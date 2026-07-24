"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type LakeConditions = {
  weather: string;
  airTemp: number | null;
  waterTemp: number | null;
  lakeLevel: number | null;
  wind: string;
  uvIndex: number | null;
  updatedAt: string;
};

function WindIcon() {
  return (
    <svg
      viewBox="0 0 64 48"
      className="h-7 w-9 text-cyan-400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 14H38C44 14 48 10 48 6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M8 24H46C52 24 56 20 56 16"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M8 34H32C38 34 42 38 42 42"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

const lakes = [
  { name: "Table Rock Lake", active: true },
  { name: "Lake of the Ozarks", active: false },
  { name: "Beaver Lake", active: false },
  { name: "Bull Shoals Lake", active: false },
  { name: "Truman Lake", active: false },
  { name: "Stockton Lake", active: false },
];

export default function Hero() {
  const [conditions, setConditions] = useState<LakeConditions>({
    weather: "Loading...",
    airTemp: null,
    waterTemp: null,
    lakeLevel: null,
    wind: "Loading...",
    uvIndex: null,
    updatedAt: "",
  });

  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [comingSoonLake, setComingSoonLake] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/lake-conditions")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load lake conditions");
        }

        return response.json();
      })
      .then((data) => {
        setConditions({
          weather: data.weather ?? "Unavailable",
          airTemp: data.airTemp ?? null,
          waterTemp: data.waterTemp ?? null,
          lakeLevel: data.lakeLevel ?? null,
          wind: data.wind ?? "Unavailable",
          uvIndex: data.uvIndex ?? null,
          updatedAt: data.updatedAt ?? "",
        });
      })
      .catch((error) => {
        console.error("Lake conditions error:", error);

        setConditions({
          weather: "Unavailable",
          airTemp: null,
          waterTemp: null,
          lakeLevel: null,
          wind: "Unavailable",
          uvIndex: null,
          updatedAt: "",
        });
      });
  }, []);

  const handleSearch = () => {
    const query = search.trim().toLowerCase();

    if (!query) return;

    if (query.includes("marina") || query.includes("dock")) {
      window.location.href = "/marinas";
      return;
    }

    if (
      query.includes("rent") ||
      query.includes("rental") ||
      query.includes("boat") ||
      query.includes("pontoon")
    ) {
      window.location.href = "/boat-rentals";
      return;
    }

    if (
      query.includes("restaurant") ||
      query.includes("food") ||
      query.includes("eat") ||
      query.includes("dining")
    ) {
      window.location.href = "/restaurants";
      return;
    }

    if (
      query.includes("fish") ||
      query.includes("fishing") ||
      query.includes("guide")
    ) {
      window.location.href = "/fishing";
      return;
    }

    if (query.includes("fuel") || query.includes("gas")) {
      window.location.href = "/fuel-docks";
      return;
    }

    if (
      query.includes("event") ||
      query.includes("events") ||
      query.includes("music") ||
      query.includes("fireworks")
    ) {
      window.location.href = "/events";
      return;
    }

    if (
      query.includes("stay") ||
      query.includes("hotel") ||
      query.includes("lodging") ||
      query.includes("resort")
    ) {
      window.location.href = "/stays";
      return;
    }

    if (
      query.includes("rv") ||
      query.includes("camp") ||
      query.includes("camping")
    ) {
      window.location.href = "/rv-parks";
      return;
    }

    window.location.href = "/businesses";
  };

  const handleLakeClick = (lake: { name: string; active: boolean }) => {
    if (lake.active) {
      setMenuOpen(false);
      return;
    }

    setComingSoonLake(lake.name);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Image
        src="/nakedJPG.JPG"
        alt="Aerial view of Table Rock Lake"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/10 to-slate-950/70" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-5 pb-8 pt-6 sm:px-8 lg:px-12">
        <div className="relative flex items-center justify-between">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Choose lake"
            className="flex h-11 w-11 items-center justify-center text-3xl text-white"
          >
            ☰
          </button>

          <a
            href="/"
            className="absolute left-1/2 top-1/2 w-[250px] -translate-x-1/2 -translate-y-1/2 sm:w-[320px]"
          >
            <Image
              src="/lakedayzlogo.png"
              alt="LakeDayz"
              width={700}
              height={220}
              className="h-auto w-full object-contain"
              priority
            />
          </a>

          <a
            href="/businesses"
            aria-label="Explore LakeDayz"
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-xl text-white"
          >
            ⌂
          </a>
        </div>

        <div className="mt-24 sm:mt-28">
          <div className="max-w-2xl">
            <h1 className="font-serif text-6xl leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
              Find your
              <span className="block">lake day</span>
            </h1>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.22em] text-white/95 sm:text-base">
              Stay. Play. Eat. Explore.
              <span className="block">All in one place.</span>
            </p>
          </div>

          <div className="mt-8 max-w-4xl">
            <div className="flex items-center rounded-[28px] bg-white p-2 shadow-2xl">
              <span className="pl-4 pr-3 text-xl text-slate-500">🔍</span>

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSearch();
                  }
                }}
                placeholder="Search lakes, towns, activities..."
                className="min-w-0 flex-1 bg-transparent py-3 text-base text-slate-900 outline-none placeholder:text-slate-500"
              />

              <button
                onClick={handleSearch}
                className="rounded-2xl bg-cyan-500 px-6 py-3 text-sm font-black text-white transition hover:bg-cyan-400"
              >
                Search
              </button>
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-[28px] border border-white/20 bg-slate-950/80 shadow-2xl backdrop-blur-md">
            <div className="grid grid-cols-5">
              <div className="border-r border-white/15 px-2 py-4 text-center">
                <div className="text-2xl">☀️</div>

                <p className="mt-1 text-xl font-black">
                  {conditions.airTemp !== null
                    ? `${Math.round(conditions.airTemp)}°`
                    : "--°"}
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase text-white/75">
                  {conditions.weather}
                </p>
              </div>

              <div className="border-r border-white/15 px-2 py-4 text-center">
                <div className="text-2xl">🌞</div>

                <p className="mt-1 text-[9px] font-bold uppercase text-cyan-400">
                  UV Index
                </p>

                <p className="mt-1 text-xl font-black">
                  {conditions.uvIndex !== null
                    ? Math.round(conditions.uvIndex)
                    : "--"}
                </p>
              </div>

              <div className="border-r border-white/15 px-2 py-4 text-center">
                <div className="flex justify-center">
                  <WindIcon />
                </div>

                <p className="mt-1 text-[9px] font-bold uppercase text-cyan-400">
                  Wind
                </p>

                <p className="mt-1 text-base font-black">{conditions.wind}</p>
              </div>

              <div className="border-r border-white/15 px-2 py-4 text-center">
                <div className="text-2xl">💧</div>

                <p className="mt-1 text-[9px] font-bold uppercase text-cyan-400">
                  Lake Level
                </p>

                <p className="mt-1 text-xl font-black">
                  {conditions.lakeLevel !== null
                    ? `${conditions.lakeLevel.toFixed(1)}'`
                    : "--"}
                </p>
              </div>

              <div className="px-2 py-4 text-center">
                <div className="text-2xl">🌡️</div>

                <p className="mt-1 text-[9px] font-bold uppercase text-cyan-400">
                  Lake Temp
                </p>

                <p className="mt-1 text-xl font-black">
                  {conditions.waterTemp !== null
                    ? `${Math.round(conditions.waterTemp)}°`
                    : "--°"}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 text-center">
            <div className="text-3xl leading-none">⌄</div>

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/85">
              Discover More
            </p>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950/70 backdrop-blur-sm">
          <div className="h-full w-[85%] max-w-sm bg-slate-950 p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                  LakeDayz
                </p>

                <h2 className="mt-2 text-3xl font-black text-white">
                  Choose your lake
                </h2>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-2xl text-white"
              >
                ×
              </button>
            </div>

            <div className="mt-8 space-y-3">
              {lakes.map((lake) => (
                <button
                  key={lake.name}
                  onClick={() => handleLakeClick(lake)}
                  className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left transition hover:bg-white/10"
                >
                  <div>
                    <p className="font-bold text-white">{lake.name}</p>

                    <p
                      className={`mt-1 text-xs font-bold uppercase tracking-wider ${
                        lake.active ? "text-cyan-400" : "text-white/40"
                      }`}
                    >
                      {lake.active ? "Current Lake" : "Coming Soon"}
                    </p>
                  </div>

                  <span className="text-xl text-white/60">›</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {comingSoonLake && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/80 px-6 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-slate-900 p-8 text-center shadow-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
              LakeDayz
            </p>

            <h2 className="mt-4 text-3xl font-black text-white">
              {comingSoonLake}
            </h2>

            <p className="mt-3 text-lg text-white/70">Coming soon.</p>

            <button
              onClick={() => setComingSoonLake(null)}
              className="mt-7 w-full rounded-2xl bg-cyan-500 px-6 py-4 font-black text-white"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </section>
  );
}