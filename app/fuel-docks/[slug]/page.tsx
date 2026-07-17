import Navbar from "../../components/Navbar";

const fuelDockDetails = {
  "state-park-marina": {
    name: "State Park Marina",
    location: "Branson, Missouri",
    description:
      "Fuel dock access, marina services, supplies, and convenient refueling on Table Rock Lake.",
    features: [
      "Marine Fuel",
      "Marina Store",
      "Lake Supplies",
      "Boat Access",
    ],
  },

  "indian-point-marina": {
    name: "Indian Point Marina",
    location: "Branson, Missouri",
    description:
      "Gas dock, marina store, boat services, and easy fuel access near Indian Point.",
    features: [
      "Marine Fuel",
      "Gas Dock",
      "Marina Store",
      "Boat Access",
    ],
  },

  "port-of-kimberling-marina": {
    name: "Port of Kimberling Marina",
    location: "Kimberling City, Missouri",
    description:
      "Marine fuel, marina services, rentals, supplies, and convenient access from Table Rock Lake.",
    features: [
      "Marine Fuel",
      "Marina Services",
      "Lake Supplies",
      "Boat Access",
    ],
  },

  "rock-lane-resort-and-marina": {
    name: "Rock Lane Resort & Marina",
    location: "Branson, Missouri",
    description:
      "Fuel access and marina services at a lakefront resort on Table Rock Lake.",
    features: [
      "Marine Fuel",
      "Marina Services",
      "Boat Access",
      "Lakefront Resort",
    ],
  },

  "cricket-creek-marina": {
    name: "Cricket Creek Marina",
    location: "Omaha, Arkansas",
    description:
      "Marine fuel, lake supplies, boat services, and access to the southern end of Table Rock Lake.",
    features: [
      "Marine Fuel",
      "Lake Supplies",
      "Boat Services",
      "Boat Access",
    ],
  },

  "long-creek-marina": {
    name: "Long Creek Marina",
    location: "Ridgedale, Missouri",
    description:
      "Fuel and marina services with convenient access to the Long Creek area of Table Rock Lake.",
    features: [
      "Marine Fuel",
      "Marina Services",
      "Boat Access",
      "Lake Supplies",
    ],
  },
};

type FuelDockSlug = keyof typeof fuelDockDetails;

export default async function FuelDockDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dock = fuelDockDetails[slug as FuelDockSlug];

  if (!dock) {
    return (
      <main className="min-h-screen bg-slate-50">
        <Navbar />

        <section className="mx-auto max-w-4xl px-6 py-32">
          <h1 className="text-4xl font-black text-slate-900">
            Fuel dock not found
          </h1>

          <a
            href="/fuel-docks"
            className="mt-6 inline-block font-bold text-cyan-600"
          >
            ← Back to fuel docks
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
            LakeDayz Fuel Dock
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            {dock.name}
          </h1>

          <p className="mt-4 text-lg text-slate-300">
            {dock.location}
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {dock.description}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-16 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-black text-slate-900">
            Fuel dock features
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {dock.features.map((feature) => (
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
            Fuel dock information
          </h2>

          <p className="mt-5 text-sm font-bold text-slate-500">
            LOCATION
          </p>

          <p className="mt-1 text-slate-800">
            {dock.location}
          </p>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${dock.name}, ${dock.location}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 block w-full rounded-xl bg-cyan-500 px-5 py-3 text-center font-bold text-white"
          >
            Get directions
          </a>

          <a
            href="/fuel-docks"
            className="mt-5 block text-center font-bold text-cyan-600"
          >
            ← Back to all fuel docks
          </a>
        </aside>
      </section>
    </main>
  );
}