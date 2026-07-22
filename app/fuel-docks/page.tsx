import Navbar from "../components/Navbar";

const fuelDocks = [
  {
    name: "State Park Marina",
    location: "Branson, Missouri",
    regular: "Call for price",
    premium: "Call for price",
    updated: "Price update coming soon",
    roadDestination: "380 State Park Marina Road, Branson, MO 65616",
    latitude: "36.5915",
    longitude: "-93.3108",
  },
  {
    name: "Indian Point Marina",
    location: "Indian Point, Missouri",
    regular: "Call for price",
    premium: "Call for price",
    updated: "Price update coming soon",
    roadDestination: "Indian Point Marina, Branson, MO",
    latitude: "36.6269",
    longitude: "-93.3487",
  },
  {
    name: "Port of Kimberling Marina",
    location: "Kimberling City, Missouri",
    regular: "Call for price",
    premium: "Call for price",
    updated: "Price update coming soon",
    roadDestination: "Port of Kimberling Marina, Kimberling City, MO",
    latitude: "36.6351",
    longitude: "-93.4152",
  },
  {
    name: "Cape Fair Marina",
    location: "Cape Fair, Missouri",
    regular: "Call for price",
    premium: "Call for price",
    updated: "Price update coming soon",
    roadDestination: "Cape Fair Marina, Cape Fair, MO",
    latitude: "36.7316",
    longitude: "-93.5054",
  },
  {
    name: "Baxter Marina",
    location: "Lampe, Missouri",
    regular: "Call for price",
    premium: "Call for price",
    updated: "Price update coming soon",
    roadDestination: "Baxter Marina, Lampe, MO",
    latitude: "36.5657",
    longitude: "-93.5087",
  },
  {
    name: "Big M Marina",
    location: "Cassville, Missouri",
    regular: "Call for price",
    premium: "Call for price",
    updated: "Price update coming soon",
    roadDestination: "26111 Big M Campground Road, Cassville, MO 65625",
    latitude: "36.6207",
    longitude: "-93.6075",
  },
  {
    name: "What's Up Dock Marina",
    location: "Table Rock Lake",
    regular: "Call for price",
    premium: "Call for price",
    updated: "Price update coming soon",
    roadDestination: "What's Up Dock Marina, Table Rock Lake",
    latitude: "36.6198",
    longitude: "-93.4028",
  },
  {
    name: "Kings River Marina",
    location: "Shell Knob Area, Missouri",
    regular: "Call for price",
    premium: "Call for price",
    updated: "Price update coming soon",
    roadDestination: "Kings River Marina, Shell Knob, MO",
    latitude: "36.5718",
    longitude: "-93.6465",
  },
  {
    name: "Rock Lane Resort & Marina",
    location: "Indian Point, Missouri",
    regular: "Call for price",
    premium: "Call for price",
    updated: "Price update coming soon",
    roadDestination: "611 Rock Lane, Branson, MO 65616",
    latitude: "36.6344",
    longitude: "-93.3354",
  },
];

function googleDirections(destination: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    destination
  )}`;
}

export default function FuelDocksPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-slate-950 px-6 pb-16 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Fuel Up on Table Rock Lake
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            Fuel Docks
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Compare fuel docks around Table Rock Lake, get road directions,
            or open your marine navigation app for on-water navigation.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-950">
              Fuel Around the Lake
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Fuel prices will be updated as they are confirmed directly with
              each marina.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fuelDocks.map((dock) => (
              <div
                key={dock.name}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-500">
                  Fuel Dock
                </p>

                <h2 className="mt-3 text-2xl font-black text-slate-950">
                  {dock.name}
                </h2>

                <p className="mt-2 font-semibold text-slate-500">
                  {dock.location}
                </p>

                <div className="mt-6 rounded-2xl bg-slate-100 p-5">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <span className="font-semibold text-slate-600">
                      Regular
                    </span>

                    <span className="font-black text-slate-950">
                      {dock.regular}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-3">
                    <span className="font-semibold text-slate-600">
                      Premium
                    </span>

                    <span className="font-black text-slate-950">
                      {dock.premium}
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-sm text-slate-500">
                  {dock.updated}
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href={googleDirections(dock.roadDestination)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-2xl bg-cyan-500 px-5 py-4 text-center font-black text-white transition hover:bg-cyan-400"
                  >
                    Get Road Directions
                  </a>

                  <a
                    href="https://apps.apple.com/us/app/navionics-boating/id744920098"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-2xl bg-slate-950 px-5 py-4 text-center font-black text-white transition hover:bg-slate-800"
                  >
                    🧭 Open in Navionics
                  </a>
                </div>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                    Marina Coordinates
                  </p>

                  <p className="mt-2 font-black text-slate-700">
                    {dock.latitude}, {dock.longitude}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Use these coordinates inside your preferred marine
                    navigation app to locate the marina.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}