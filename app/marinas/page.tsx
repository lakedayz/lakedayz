import Navbar from "../components/Navbar";

const marinas = [
  {
    name: "State Park Marina",
    lake: "Table Rock Lake",
    location: "Branson, Missouri",
    description:
      "Boat rentals, fuel, slips, supplies, and convenient lake access.",
  },
  {
    name: "Indian Point Marina",
    lake: "Table Rock Lake",
    location: "Branson, Missouri",
    description:
      "Pontoon rentals, boat slips, fuel, and services near Silver Dollar City.",
  },
  {
    name: "Port of Kimberling Marina",
    lake: "Table Rock Lake",
    location: "Kimberling City, Missouri",
    description:
      "Boat rentals, wet slips, fuel, lodging, and full-service marina amenities.",
  },
  {
    name: "Rock Lane Resort and Marina",
    lake: "Table Rock Lake",
    location: "Branson West, Missouri",
    description:
      "Resort, marina access, boat slips, dining, lodging, and lakefront amenities.",
  },
  {
    name: "Long Creek Marina",
    lake: "Table Rock Lake",
    location: "Ridgedale, Missouri",
    description:
      "Boat rentals, marina services, fuel, and convenient access to Long Creek.",
  },
  {
    name: "The Harbor",
    lake: "Table Rock Lake",
    location: "Branson, Missouri",
    description:
      "Marina services, boat access, slips, fuel, and lake-area amenities.",
  },
];

export default function MarinasPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            LakeDayz Marina Directory
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            MARINAS
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Find boat rentals, fuel docks, slips, supplies, and marina services
            around your favorite lake.
          </p>

          <div className="mt-8 flex max-w-2xl rounded-2xl bg-white p-2">
            <input
              type="text"
              placeholder="Search marinas..."
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
          {marinas.map((marina) => (
            <article
              key={marina.name}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm font-bold text-cyan-600">Marina</p>

              <h2 className="mt-3 text-2xl font-black text-slate-900">
                {marina.name}
              </h2>

              <p className="mt-2 text-sm font-semibold text-slate-500">
                {marina.lake}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {marina.location}
              </p>

              <p className="mt-4 text-slate-600">{marina.description}</p>

              <button className="mt-6 font-bold text-cyan-600">
                View marina →
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}