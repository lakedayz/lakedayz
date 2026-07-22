"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type LakeConditions = {
  weather: string;
  airTemp: number | null;
  waterTemp: number | null;
  lakeLevel: number | null;
  wind: string;
  updatedAt: string;
};

export default function Hero() {
  const [conditions, setConditions] = useState<LakeConditions>({
    weather: "Loading...",
    airTemp: null,
    waterTemp: null,
    lakeLevel: null,
    wind: "Loading...",
    updatedAt: "",
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/lake-conditions")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load lake conditions");
        }

        return response.json();
      })
      .then((data: LakeConditions) => {
        setConditions(data);
      })
      .catch((error) => {
        console.error("Failed to load lake conditions:", error);
      });
  }, []);

  const handleSearch = () => {
    const query = search.trim().toLowerCase();

    if (!query) return;

    if (
      query.includes("boat") ||
      query.includes("rental") ||
      query.includes("pontoon") ||
      query.includes("tritoon") ||
      query.includes("jet ski") ||
      query.includes("jetski") ||
      query.includes("waverunner")
    ) {
      window.location.href = "/boat-rentals";
      return;
    }

    if (
      query.includes("marina") ||
      query.includes("state park marina") ||
      query.includes("indian point") ||
      query.includes("port of kimberling") ||
      query.includes("rock lane")
    ) {
      window.location.href = "/marinas";
      return;
    }

    if (
      query.includes("restaurant") ||
      query.includes("food") ||
      query.includes("eat") ||
      query.includes("pizza") ||
      query.includes("taco") ||
      query.includes("grill")
    ) {
      window.location.href = "/restaurants";
      return;
    }

    if (
      query.includes("fuel") ||
      query.includes("gas") ||
      query.includes("fuel dock")
    ) {
      window.location.href = "/fuel-docks";
      return;
    }

    if (
      query.includes("fish") ||
      query.includes("fishing") ||
      query.includes("guide") ||
      query.includes("bass")
    ) {
      window.location.href = "/fishing";
      return;
    }

    if (
      query.includes("event") ||
      query.includes("concert") ||
      query.includes("festival") ||
      query.includes("fireworks") ||
      query.includes("market")
    ) {
      window.location.href = "/events";
      return;
    }

    if (
      query.includes("camp") ||
      query.includes("rv") ||
      query.includes("campground")
    ) {
      window.location.href = "/rv-parks";
      return;
    }

    if (
      query.includes("stay") ||
      query.includes("hotel") ||
      query.includes("resort") ||
      query.includes("condo") ||
      query.includes("cabin") ||
      query.includes("lodging")
    ) {
      window.location.href = "/stays";
      return;
    }

    if (
      query.includes("repair") ||
      query.includes("service") ||
      query.includes("boat lift") ||
      query.includes("dock builder") ||
      query.includes("storage") ||
      query.includes("business")
    ) {
      window.location.href = "/businesses";
      return;
    }

    alert(
      "No exact match yet. Try searching for marinas, boat rentals, restaurants, fuel, fishing, events, camping, stays, or local businesses."
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <Image
        src="/tbrdam.png"
        alt="Aerial view of Table Rock Lake"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/30 to-slate-950/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-slate-950/20" />

      <div className="absolute left-6 right-6 top-32 z-20 rounded-2xl border border-white/20 bg-slate-950/70 p-5 text-white shadow-2xl backdrop-blur-md md:left-auto md:right-6 md:top-24 md:w-80">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
          Table Rock Lake Conditions
        </p>

        <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-5 text-center text-sm">
          <div>
            <p className="text-slate-300">Weather</p>
            <p className="mt-1 font-bold">
              {conditions.airTemp !== null ? `${conditions.airTemp}°F` : "--"}
              {" · "}
              {conditions.weather}
            </p>
          </div>

          <div>
            <p className="text-slate-300">Water Temp</p>
            <p className="mt-1 font-bold">
              {conditions.waterTemp !== null
                ? `${conditions.waterTemp}°F`
                : "--"}
            </p>
          </div>

          <div>
            <p className="text-slate-300">Lake Level</p>
            <p className="mt-1 font-bold">
              {conditions.lakeLevel !== null
                ? `${conditions.lakeLevel} ft`
                : "--"}
            </p>
          </div>

          <div>
            <p className="text-slate-300">Wind</p>
            <p className="mt-1 font-bold">{conditions.wind}</p>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-slate-400">
          Updated recently
        </p>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-28 pt-[31rem] md:py-28">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
            Explore. Book. Enjoy.
          </p>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Find Your
            <span className="block text-cyan-400">LakeDay.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            Discover marinas, rentals, restaurants, events, fishing guides,
            fuel prices, camping, stays, and everything you need for the perfect
            day on the water.
          </p>

          <div className="mt-10 max-w-3xl rounded-3xl border border-white/20 bg-white/15 p-2 shadow-2xl backdrop-blur">
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSearch();
                  }
                }}
                placeholder="Find Your LakeDay..."
                className="min-w-0 flex-1 rounded-2xl bg-white px-5 py-4 text-slate-950 outline-none placeholder:text-slate-400"
              />

              <button
                onClick={handleSearch}
                className="rounded-2xl bg-cyan-500 px-8 py-4 font-black text-white transition hover:bg-cyan-400"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}