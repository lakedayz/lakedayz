import Navbar from "../components/Navbar";

const fuelDockOptions = [
  {
    name: "Marine Fuel",
    description:
      "Find fuel docks around the lake so you can refuel quickly and get back on the water.",
  },
  {
    name: "Convenience Stores",
    description:
      "Find marina stores with drinks, snacks, ice, supplies, and other lake-day essentials.",
  },
  {
    name: "Boat Supplies",
    description:
      "Discover nearby fuel docks that also carry boating supplies, accessories, and basic equipment.",
  },
  {
    name: "On-Water Stops",
    description:
      "Find convenient places to stop for fuel and supplies without leaving the lake.",
  },
];

export default function FuelDocksPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            LakeDayz Fuel Dock Directory
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            FUEL DOCKS
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Find marine fuel, lake supplies, convenience stores, and on-water
            stops around the lake.
          </p>

          <div className="mt-8 flex max-w-2xl rounded-2xl bg-white p-2">
            <input
              type="text"
              placeholder="Search fuel docks..."
              className="min-w-0 flex-1 px-4 text-slate-900 outline-none"
            />

            <button className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-white">
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {fuelDockOptions.map((option) => (
            <article
              key={option.name}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm font-bold text-cyan-600">
                Fuel Dock
              </p>

              <h2 className="mt-3 text-2xl font-black text-slate-900">
                {option.name}
              </h2>

              <p className="mt-4 text-slate-600">
                {option.description}
              </p>

              <button className="mt-6 font-bold text-cyan-600">
                Explore →
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}