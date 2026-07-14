const categories = [
  "Boat Rentals",
  "Marinas",
  "Restaurants",
  "Fuel Docks",
  "Fishing Guides",
  "Events",
];

export default function Categories() {
  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-600">
          Explore LakeDayz
        </p>

        <h2 className="mt-3 text-4xl font-black text-slate-900">
          Find what you need
        </h2>

        <p className="mt-4 max-w-2xl text-slate-600">
          Discover rentals, marinas, restaurants, fishing guides, events, and
          everything else you need for a great day on the water.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {category}
              </h3>

              <p className="mt-3 text-slate-600">
                Explore trusted local options around the lake.
              </p>

              <button className="mt-6 font-bold text-cyan-600">
                Explore category →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}