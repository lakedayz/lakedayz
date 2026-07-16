import Navbar from "../../components/Navbar";

const guideDetails = {
  "branson-guided-fishing-trips": {
    name: "Branson Guided Fishing Trips",
    location: "Branson, Missouri",
    description:
      "Guided bass fishing trips on Table Rock Lake for anglers looking to learn the lake and fish with an experienced local guide.",
    features: [
      "Guided Bass Fishing",
      "Table Rock Lake",
      "Local Guide",
      "Beginner Friendly",
    ],
  },

  "capt-ricks-guide-service": {
    name: "Capt. Rick's Guide Service",
    location: "Table Rock Lake, Missouri",
    description:
      "Instructional bass fishing guide trips focused on techniques, seasonal patterns, and fishing Table Rock Lake.",
    features: [
      "Bass Fishing",
      "Instructional Trips",
      "Seasonal Patterns",
      "Table Rock Lake",
    ],
  },

  "table-rock-guide-service": {
    name: "Table Rock Guide Service",
    location: "Table Rock Lake, Missouri",
    description:
      "Professional guided bass fishing trips for anglers exploring Table Rock Lake.",
    features: [
      "Guided Fishing",
      "Bass Fishing",
      "Table Rock Lake",
      "Professional Guide",
    ],
  },
};

type GuideSlug = keyof typeof guideDetails;

export default async function FishingGuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guideDetails[slug as GuideSlug];

  if (!guide) {
    return (
      <main className="min-h-screen bg-slate-50">
        <Navbar />

        <section className="mx-auto max-w-4xl px-6 py-32">
          <h1 className="text-4xl font-black text-slate-900">
            Fishing guide not found
          </h1>

          <a
            href="/fishing"
            className="mt-6 inline-block font-bold text-cyan-600"
          >
            ← Back to fishing guides
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            LakeDayz Fishing Guide
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            {guide.name}
          </h1>

          <p className="mt-4 text-lg text-slate-300">
            {guide.location}
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {guide.description}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-16 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-black text-slate-900">
            Guide features
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {guide.features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-slate-800 shadow-sm"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl bg-white p-7 shadow-sm">
          <h2 className="text-xl font-black text-slate-900">
            Guide information
          </h2>

          <p className="mt-5 text-sm font-bold text-slate-500">
            LOCATION
          </p>

          <p className="mt-1 text-slate-800">
            {guide.location}
          </p>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${guide.name}, ${guide.location}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 block w-full rounded-xl bg-cyan-500 px-5 py-3 text-center font-bold text-white"
          >
            Get directions
          </a>

          <a
            href="/fishing"
            className="mt-5 block text-center font-bold text-cyan-600"
          >
            ← Back to all fishing guides
          </a>
        </aside>
      </section>
    </main>
  );
}