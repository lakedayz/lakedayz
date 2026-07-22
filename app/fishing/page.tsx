import Navbar from "../components/Navbar";

const fishingGuides = [
  {
    name: "Branson Guided Fishing Trips",
    type: "Bass Fishing Guide",
    location: "Branson / Table Rock Lake",
    description:
      "Professional guided fishing trips for beginners, experienced anglers, families, individuals, and larger groups on Table Rock Lake.",
    website: "https://bransonguidedfishingtrips.com/",
  },
  {
    name: "Table Rock Lake Fishing Guides",
    type: "Bass Fishing Guide",
    location: "Table Rock Lake",
    description:
      "Year-round guided bass fishing focused on seasonal patterns including topwater, jig, jerkbait, A-rig, drop shot, and deep-water fishing.",
    website: "https://tablerocklakefishingguides.com/",
  },
  {
    name: "Anglers Advantage",
    type: "Professional Fishing Guide",
    location: "Branson / Table Rock Lake",
    description:
      "Family-friendly guided fishing trips led by an experienced local captain serving Table Rock Lake and the Branson area.",
    website: "https://anglersadvantage.net/",
  },
  {
    name: "Captain B's Fishing Guide Service",
    type: "Fishing Guide",
    location: "Table Rock Lake",
    description:
      "Guided lake fishing trips with a focus on helping guests learn effective techniques while enjoying a day on the water.",
    website: "https://captainbguide.com/",
  },
  {
    name: "Maloney's Fishing Guide Service",
    type: "Fishing Guide",
    location: "Branson / Table Rock Lake",
    description:
      "Commercially insured professional guide service offering guided fishing trips on Table Rock Lake and the surrounding Branson lakes.",
    website: "https://www.explorebranson.com/listing/maloneys-fishing-guide-service/5632/",
  },
  {
    name: "Dodson Fishing Guide",
    type: "Fishing Guide",
    location: "Table Rock Lake",
    description:
      "Professional fishing guide service offering guided trips on Table Rock Lake for visitors looking to experience local fishing.",
    website:
      "https://www.explorebranson.com/listing/dodson-fishing-guide-table-rock-lake-lake-taneycomo/5454/",
  },
  {
    name: "Branson Fishing Guide Service",
    type: "Bass Fishing Guide",
    location: "Branson / Table Rock Lake",
    description:
      "Full-time guide service specializing in families and groups, with guided fishing opportunities on Table Rock Lake.",
    website:
      "https://www.explorebranson.com/listing/branson-fishing-guide-service/5340/",
  },
];

export default function FishingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-slate-950 px-6 pb-16 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Fish Table Rock Lake
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            Fishing Guides
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Find professional fishing guides and book a guided trip on Table
            Rock Lake.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-950">
              Guided Fishing on Table Rock Lake
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Browse local fishing guides and go directly to each guide to
              learn about current trip options, availability, pricing, and
              booking.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fishingGuides.map((guide) => (
              <div
                key={guide.name}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-500">
                  {guide.type}
                </p>

                <h2 className="mt-3 text-2xl font-black text-slate-950">
                  {guide.name}
                </h2>

                <p className="mt-2 font-semibold text-slate-500">
                  {guide.location}
                </p>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {guide.description}
                </p>

                <a
                  href={guide.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full rounded-2xl bg-cyan-500 px-5 py-4 text-center font-black text-white transition hover:bg-cyan-400"
                >
                  Book / Visit Website
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}