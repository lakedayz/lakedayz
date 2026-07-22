import Navbar from "../components/Navbar";

const marinas = [
  {
    name: "State Park Marina",
    type: "Full-Service Marina",
    location: "Branson, Missouri",
    description:
      "A large full-service marina inside Table Rock State Park offering boat rentals, slip rentals, fuel, water sports, a marina store, and lake experiences.",
    website: "https://www.stateparkmarina.com/",
  },
  {
    name: "Indian Point Marina",
    type: "Full-Service Marina",
    location: "Indian Point, Missouri",
    description:
      "A full-service marina offering boat rentals, slip rentals, a gas dock, marina store, floating cafe, diving services, and convenient access to Table Rock Lake.",
    website: "https://indianpointmarina.com/",
  },
  {
    name: "Port of Kimberling Marina",
    type: "Full-Service Marina",
    location: "Kimberling City, Missouri",
    description:
      "A centrally located Table Rock Lake marina offering wet slips, dry-stack storage, transient slips, fuel, boat rentals, and a ship store.",
    website: "https://portofkimberlingmarina.com/",
  },
  {
    name: "Cape Fair Marina",
    type: "Full-Service Marina",
    location: "Cape Fair, Missouri",
    description:
      "A marina on the James River arm of Table Rock Lake with fuel, boat rentals, slips, bait and tackle, pump-outs, food, drinks, and waterfront dining nearby.",
    website: "https://capefairmarina.com/",
  },
  {
    name: "Baxter Marina",
    type: "Full-Service Marina",
    location: "Lampe, Missouri",
    description:
      "A full-service marina offering fuel, a marina store, boat rentals, wet and dry storage, live bait, tackle, snacks, drinks, ice, and boating supplies.",
    website: "https://www.baxtermarina.com/",
  },
  {
    name: "Cricket Creek Marina",
    type: "Marina & Boat Rentals",
    location: "Omaha, Arkansas",
    description:
      "A Table Rock Lake marina near the Arkansas side offering pontoons, tritoons, ski boats, fishing boats, towable rentals, and other lake services.",
    website: "https://www.cricketcreek.com/",
  },
  {
    name: "Campbell Point Marina",
    type: "Full-Service Marina",
    location: "Shell Knob, Missouri",
    description:
      "A marina serving the Shell Knob area of Table Rock Lake with boating services, slip access, fuel, supplies, and convenient lake access.",
    website: "https://campbellpointmarina.com/",
  },
  {
    name: "Long Creek Marina",
    type: "Full-Service Marina",
    location: "Ridgedale, Missouri",
    description:
      "A public full-service marina operated by Big Cedar Lodge offering boat and watercraft rentals, watersports equipment, fishing services, guides, lake tours, and a marina store.",
    website: "https://bigcedar.com/long-creek-marina/",
  },
  {
    name: "Big M Marina",
    type: "Marina & Boat Rentals",
    location: "Cassville, Missouri",
    description:
      "A Table Rock Lake marina offering boat rentals, boat slip rentals, lake access, dining, lodging, and services on the western side of the lake.",
    website: "https://www.bigmmarina.com/",
  },
  {
    name: "What's Up Dock Marina",
    type: "Full-Service Marina",
    location: "Kimberling City, Missouri",
    description:
      "A one-stop marina offering boat and WaveRunner rentals, overnight slips, fuel, pump-outs, snacks, drinks, lake apparel, and boating accessories.",
    website: "https://whatsupdock.com/",
  },
  {
    name: "Hideaway Marina",
    type: "Marina & Boat Rentals",
    location: "Galena, Missouri",
    description:
      "A long-running marina serving the western Table Rock Lake area with boat rentals, slips, lake access, and boating services.",
    website: "https://hideawaymarina1956.com/",
  },
  {
    name: "The Harbor Marina",
    type: "Marina & Marine Services",
    location: "Indian Point, Missouri",
    description:
      "A marina near Silver Dollar City offering boating services, marine sales, and convenient access to the Indian Point area of Table Rock Lake.",
    website: "https://www.theharbormarina.com/",
  },
  {
    name: "Still Waters Resort Marina",
    type: "Resort Marina",
    location: "Indian Point, Missouri",
    description:
      "A marina serving Still Waters Resort guests and lake visitors with boat rentals, slips, and convenient access to Table Rock Lake.",
    website: "https://www.stillwatersresort.com/marina",
  },
];

export default function MarinasPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-slate-950 px-6 pb-16 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Explore Table Rock Lake
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            Marinas
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Find marinas around Table Rock Lake for fuel, boat rentals, slips,
            storage, supplies, and everything you need on the water.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-950">
              Marinas Around Table Rock Lake
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Browse marina options around the lake and go directly to each
              marina for current hours, rentals, slip availability, fuel,
              services, and other information.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {marinas.map((marina) => (
              <div
                key={marina.name}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-500">
                  {marina.type}
                </p>

                <h2 className="mt-3 text-2xl font-black text-slate-950">
                  {marina.name}
                </h2>

                <p className="mt-2 font-semibold text-slate-500">
                  {marina.location}
                </p>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {marina.description}
                </p>

                <a
                  href={marina.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full rounded-2xl bg-cyan-500 px-5 py-4 text-center font-black text-white transition hover:bg-cyan-400"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}