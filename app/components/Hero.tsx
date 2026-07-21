"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const quickLinks = [
  "Boat Rentals",
  "Marinas",
  "Restaurants",
  "Fuel Prices",
  "Fishing",
  "Events",
];

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

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <Image
        src="/tablerock.jpg"
        alt="Aerial view of Table Rock Lake"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/30 to-slate-950/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-slate-950/20" />

      {/* Lake conditions */}
      <div className="absolute left-6 right-6 top-32 z-20 rounded-2xl border border-white/20 bg-slate-950/70 p-4 text-white shadow-2xl backdrop-blur-md md:left-auto md:right-6 md:top-24 md:w-80">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
          Table Rock Lake Conditions
        </p>

        <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
          <div>
            <p className="text-slate-300">Weather</p>
            <p className="font-bold">
              {conditions.airTemp !== null
                ? `${conditions.airTemp}°F`
                : "--"}
              {" · "}
              {conditions.weather}
            </p>
          </div>

          <div>
            <p className="text-slate-300">Water Temp</p>
            <p className="font-bold">
              {conditions.waterTemp !== null
                ? `${conditions.waterTemp}°F`
                : "--"}
            </p>
          </div>

          <div>
            <p className="text-slate-300">Lake Level</p>
            <p className="font-bold">
              {conditions.lakeLevel !== null
                ? `${conditions.lakeLevel} ft`
                : "--"}
            </p>
          </div>

          <div>
            <p className="text-slate-300">Wind</p>
            <p className="font-bold">{conditions.wind}</p>
          </div>
        </div>

        <p className="mt-3 text-xs text-slate-400">Updated recently</p>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-28 pt-[28rem] md:py-28">
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
            fuel prices, and everything you need for the perfect day on the
            water.
          </p>

          <div className="mt-10 max-w-3xl rounded-3xl border border-white/20 bg-white/15 p-2 shadow-2xl backdrop-blur">
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                type="text"
                placeholder="Find Your LakeDay..."
                className="min-w-0 flex-1 rounded-2xl bg-white px-5 py-4 text-slate-950 outline-none placeholder:text-slate-400"
              />

              <button className="rounded-2xl bg-cyan-500 px-8 py-4 font-black text-white transition hover:bg-cyan-400">
                Search
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {quickLinks.map((link) => (
              <button
                key={link}
                className="rounded-full border border-white/20 bg-slate-950/45 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-slate-950/70"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}