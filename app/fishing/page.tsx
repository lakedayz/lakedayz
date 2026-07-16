import Navbar from "../components/Navbar";

const fishingGuides = [
  {
    slug: "branson-guided-fishing-trips",
    name: "Branson Guided Fishing Trips",
    location: "Branson, Missouri",
    description:
      "Guided bass fishing trips on Table Rock Lake for anglers looking to learn the lake and catch fish with an experienced local guide.",
  },
  {
    slug: "capt-ricks-guide-service",
    name: "Capt. Rick's Guide Service",
    location: "Table Rock Lake, Missouri",
    description:
      "Instructional bass fishing guide trips focused on techniques, seasonal patterns, and fishing Table Rock Lake.",
  },
  {
    slug: "table-rock-guide-service",
    name: "Table Rock Guide Service",
    location: "Table Rock Lake, Missouri",
    description:
      "Professional guided bass fishing trips for anglers exploring Table Rock Lake.",
  },
];

export default function FishingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            LakeDayz Fishing Guide Directory
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            FISHING GUIDES
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Find local fishing guides and guided trips around Table Rock Lake.
          </p>

          <div className="mt-8 flex max-w-2xl rounded-2xl bg-white p-2">
            <input
              type="text"
              placeholder="Search fishing guides..."
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
          {fishingGuides.map((guide) => (
            <article
              key={guide.slug}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm font-bold text-cyan-600">
                Fishing Guide
              </p>

              <h2 className="mt-3 text-2xl font-black text-slate-900">
                {guide.name}
              </h2>

              <p className="mt-2 text-sm font-semibold text-slate-500">
                {guide.location}
              </p>

              <p className="mt-4 text-slate-600">
                {guide.description}
              </p>

              <a
                href={`/fishing/${guide.slug}`}
                className="mt-6 inline-block font-bold text-cyan-600"
              >
                View guide →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}