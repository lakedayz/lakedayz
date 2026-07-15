import Navbar from "../../components/Navbar";

const marinaDetails = {
  "state-park-marina": {
    name: "State Park Marina",
    lake: "Table Rock Lake",
    location: "Branson, Missouri",
    description:
      "Boat rentals, fuel, slips, supplies, and convenient access to Table Rock Lake.",
    services: ["Boat Rentals", "Fuel Dock", "Boat Slips", "Lake Supplies"],
  },
  "indian-point-marina": {
    name: "Indian Point Marina",
    lake: "Table Rock Lake",
    location: "Branson, Missouri",
    description:
      "Pontoon rentals, slips, fuel, and marina services near Silver Dollar City.",
    services: ["Pontoon Rentals", "Fuel Dock", "Boat Slips", "Marina Store"],
  },
  "port-of-kimberling-marina": {
    name: "Port of Kimberling Marina",
    lake: "Table Rock Lake",
    location: "Kimberling City, Missouri",
    description:
      "Boat rentals, wet slips, fuel, lodging, and full-service marina amenities.",
    services: ["Boat Rentals", "Wet Slips", "Fuel Dock", "Lodging"],
  },
  "rock-lane-resort-and-marina": {
    name: "Rock Lane Resort and Marina",
    lake: "Table Rock Lake",
    location: "Branson West, Missouri",
    description:
      "Resort lodging, marina access, boat slips, dining, and lakefront amenities.",
    services: ["Boat Slips", "Dining", "Lodging", "Lake Access"],
  },
  "long-creek-marina": {
    name: "Long Creek Marina",
    lake: "Table Rock Lake",
    location: "Ridgedale, Missouri",
    description:
      "Boat rentals, fuel, marina services, and convenient access to Long Creek.",
    services: ["Boat Rentals", "Fuel Dock", "Boat Slips", "Marina Services"],
  },
  "the-harbor": {
    name: "The Harbor",
    lake: "Table Rock Lake",
    location: "Branson, Missouri",
    description:
      "Marina services, boat access, slips, fuel, and nearby lake amenities.",
    services: ["Boat Slips", "Fuel Dock", "Lake Access", "Marina Services"],
  },
};

type MarinaSlug = keyof typeof marinaDetails;

export default async function MarinaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const marina = marinaDetails[slug as MarinaSlug];

  if (!marina) {
    return (
      <main className="min-h-screen bg-slate-50">
        <Navbar />

        <section className="mx-auto max-w-4xl px-6 py-32">
          <h1 className="text-4xl font-black text-slate-900">
            Marina not found
          </h1>

          <a
            href="/marinas"
            className="mt-6 inline-block font-bold text-cyan-600"
          >
            ← Back to marinas
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
            {marina.lake}
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            {marina.name}
          </h1>

          <p className="mt-4 text-lg text-slate-300">{marina.location}</p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {marina.description}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-16 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-black text-slate-900">
            Marina services
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {marina.services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-slate-800 shadow-sm"
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl bg-white p-7 shadow-sm">
          <h2 className="text-xl font-black text-slate-900">
            Marina information
          </h2>

          <p className="mt-5 text-sm font-bold text-slate-500">LOCATION</p>
          <p className="mt-1 text-slate-800">{marina.location}</p>

          <button className="mt-7 w-full rounded-xl bg-cyan-500 px-5 py-3 font-bold text-white">
            Get directions
          </button>

          <a
            href="/marinas"
            className="mt-5 block text-center font-bold text-cyan-600"
          >
            ← Back to all marinas
          </a>
        </aside>
      </section>
    </main>
  );
}