import Navbar from "../components/Navbar";

const fuelDocks = [
  {
    slug: "state-park-marina",
    name: "State Park Marina",
    location: "Branson, Missouri",
    description:
      "Fuel dock access, marina services, supplies, and convenient refueling on Table Rock Lake.",
  },
  {
    slug: "indian-point-marina",
    name: "Indian Point Marina",
    location: "Branson, Missouri",
    description:
      "Gas dock, marina store, boat services, and easy fuel access near Indian Point.",
  },
  {
    slug: "port-of-kimberling-marina",
    name: "Port of Kimberling Marina",
    location: "Kimberling City, Missouri",
    description:
      "Marine fuel, marina services, rentals, supplies, and convenient access from Table Rock Lake.",
  },
  {
    slug: "rock-lane-resort-and-marina",
    name: "Rock Lane Resort & Marina",
    location: "Branson West, Missouri",
    description:
      "Fuel access and marina services at a lakefront resort on Table Rock Lake.",
  },
  {
    slug: "cricket-creek-marina",
    name: "Cricket Creek Marina",
    location: "Omaha, Arkansas",
    description:
      "Marine fuel, lake supplies, boat services, and access to the southern end of Table Rock Lake.",
  },
  {
    slug: "long-creek-marina",
    name: "Long Creek Marina",
    location: "Ridgedale, Missouri",
    description:
      "Fuel and marina services with convenient access to the Long Creek area of Table Rock Lake.",
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
            Find fuel docks, marina services, and convenient places to refuel
            around Table Rock Lake.
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fuelDocks.map((dock) => (
            <article
              key={dock.slug}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm font-bold text-cyan-600">
                Fuel Dock
              </p>

              <h2 className="mt-3 text-2xl font-black text-slate-900">
                {dock.name}
              </h2>

              <p className="mt-2 text-sm font-semibold text-slate-500">
                {dock.location}
              </p>

              <p className="mt-4 text-slate-600">
                {dock.description}
              </p>

              <a
                href={`/fuel-docks/${dock.slug}`}
                className="mt-6 inline-block font-bold text-cyan-600"
              >
                View fuel dock →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}