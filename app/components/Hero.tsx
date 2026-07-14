import Image from "next/image";

const quickLinks = [
  "Boat Rentals",
  "Marinas",
  "Restaurants",
  "Fuel Prices",
  "Fishing",
  "Events",
];

export default function Hero() {
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

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28">
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

          <div className="mt-10 max-w-3xl rounded-3xl border border-white/20 bg-white/15 p-2 shadow-2xl backdrop-blur-xl">
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
                className="rounded-full border border-white/20 bg-slate-950/30 px-4 py-2 text-sm font-bold backdrop-blur-md transition hover:border-cyan-300 hover:bg-slate-950/50"
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
