import Navbar from "../components/Navbar";

const businesses = [
  {
    name: "Big Cedar Lodge",
    category: "Resort & Dining",
    lake: "Table Rock Lake",
    description:
      "Lakefront lodging, restaurants, activities, and outdoor experiences.",
  },
  {
    name: "Table Rock Boat & RV Storage",
    category: "Storage",
    lake: "Table Rock Lake",
    description:
      "Secure boat, trailer, and RV storage near Table Rock Lake.",
  },
  {
    name: "Ozarks Marine Service",
    category: "Boat Repair & Service",
    lake: "Table Rock Lake",
    description:
      "Local boat repair, maintenance, detailing, and seasonal service.",
  },
];

export default function BusinessesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            LakeDayz Business Directory
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            DISCOVER LOCAL
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Explore, restaurants, resorts, shops, mechanics,
            storage facilities, and local services.
          </p>

          <div className="mt-8 flex max-w-2xl rounded-2xl bg-white p-2">
            <input
              type="text"
              placeholder="Search businesses..."
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
          {businesses.map((business) => (
            <article
              key={business.name}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm font-bold text-cyan-600">
                {business.category}
              </p>

              <h2 className="mt-3 text-2xl font-black text-slate-900">
                {business.name}
              </h2>

              <p className="mt-2 text-sm font-semibold text-slate-500">
                {business.lake}
              </p>

              <p className="mt-4 text-slate-600">{business.description}</p>

              <button className="mt-6 font-bold text-cyan-600">
                View business →
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}