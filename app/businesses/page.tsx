import Navbar from "../components/Navbar";
const businesses = [
  {
    name: "The Harbor",
    category: "Boat Sales & Service",
    lake: "Table Rock Lake",
    description:
      "New and used boat sales, marine service, parts, and support for Table Rock Lake boaters.",
  },
  {
    name: "Cope Marine",
    category: "Boat Sales & Service",
    lake: "Table Rock Lake",
    description:
      "Boat dealership offering new and used boats, marine service, parts, and boating support.",
  },
  {
    name: "Branson West Marine and Powersports",
    category: "Boat Sales & Service",
    lake: "Table Rock Lake",
    description:
      "Boat sales, marine service, parts, and powersports serving the Table Rock Lake area.",
  },
  {
    name: "Ulrich Marine Center",
    category: "Boat Sales & Service",
    lake: "Table Rock Lake",
    description:
      "Longtime local marine dealer offering new and used boats, parts, and professional service.",
  },
  {
    name: "Premier Boat Sales and Service",
    category: "Boat Sales & Service",
    lake: "Table Rock Lake",
    description:
      "Boat sales and marine service serving boaters throughout the Table Rock Lake area.",
  },
  {
    name: "American Water Sports",
    category: "Boat Sales & Watersports",
    lake: "Table Rock Lake",
    description:
      "Boat and watersports sales serving Kimberling City and the surrounding lake community.",
  },
  {
    name: "Dyna Prop",
    category: "Marine Parts & Service",
    lake: "Table Rock Lake",
    description:
      "Marine parts and propeller support serving boat owners around Table Rock Lake.",
  },
  {
    name: "Extreme Outdoors",
    category: "Fishing & Outdoor Retail",
    lake: "Table Rock Lake",
    description:
      "Fishing tackle, gear, live bait, and outdoor supplies for anglers visiting Table Rock Lake.",
  },
  {
    name: "Anglers Obsession Guide Service",
    category: "Fishing Guide",
    lake: "Table Rock Lake",
    description:
      "Professional guided fishing trips for anglers looking to experience Table Rock Lake.",
  },
  {
    name: "Bearded Boat Captain",
    category: "Boat Captain Service",
    lake: "Table Rock Lake",
    description:
      "Licensed captain services for rental boats, private boats, families, groups, and lake days.",
  },
  {
    name: "Hooked on Branson Fishing",
    category: "Fishing Guide",
    lake: "Table Rock Lake",
    description:
      "Year-round guided fishing trips on Table Rock Lake and other nearby Ozarks waters.",
  },
  {
    name: "Mike Boyles Fishing",
    category: "Fishing Guide",
    lake: "Table Rock Lake",
    description:
      "Guided fishing trips for anglers of all experience levels on Table Rock Lake.",
  },
  {
    name: "OzarkAnglers.com",
    category: "Fishing Resource",
    lake: "Table Rock Lake",
    description:
      "Local fishing information and resources for recreational and tournament anglers.",
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