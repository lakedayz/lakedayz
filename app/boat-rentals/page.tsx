import Navbar from "../components/Navbar";

const boatRentals = [
  {
    name: "State Park Marina",
    type: "Boat & Watercraft Rentals",
    location: "Branson, Missouri",
    description:
      "Rent pontoons, ski boats, wake boats, bass boats, and other watercraft directly on Table Rock Lake.",
    website: "https://www.stateparkmarina.com/boat-rentals",
  },
  {
    name: "Indian Point Marina",
    type: "Boat Rentals",
    location: "Indian Point, Missouri",
    description:
      "Offers luxury tritoons, pleasure tritoons, and other rental boats for cruising, tubing, skiing, wakeboarding, and fishing.",
    website: "https://indianpointmarina.com/branson-boat-rentals/",
  },
  {
    name: "Long Creek Marina",
    type: "Boat & Watercraft Rentals",
    location: "Ridgedale, Missouri",
    description:
      "A full-service public marina offering boat rentals, personal watercraft, watersports equipment, and lake experiences on Table Rock Lake.",
    website: "https://bigcedar.com/long-creek-marina/",
  },
  {
    name: "Bent Hook Marina",
    type: "Boat & Watercraft Rentals",
    location: "Big Cedar Lodge, Ridgedale",
    description:
      "Offers bass boats, ski boats, pontoons, and personal watercraft with hourly and daily rental options.",
    website: "https://bigcedar.com/activity/boat-rentals/",
  },
  {
    name: "Port of Kimberling Marina",
    type: "Boat Rentals",
    location: "Kimberling City, Missouri",
    description:
      "A large full-service marina centrally located on Table Rock Lake with convenient access to boat rentals and lake services.",
    website: "https://portofkimberlingmarina.com/",
  },
  {
    name: "Big M Marina",
    type: "Pontoon & Boat Rentals",
    location: "Cassville, Missouri",
    description:
      "A Table Rock Lake marina offering pontoon rentals, boat slips, fuel, supplies, and convenient access to the western side of the lake.",
    website: "https://www.bigmmarina.com/",
  },
  {
    name: "Cape Fair Marina",
    type: "Boat & Sea-Doo Rentals",
    location: "Cape Fair, Missouri",
    description:
      "Offers ski boats, fishing boats, pontoons, Sea-Doos, tubes, skis, and other rental equipment on the James River arm of Table Rock Lake.",
    website: "https://capefairmarina.com/",
  },
  {
    name: "Rock Lane Resort & Marina",
    type: "Boat Rentals",
    location: "Indian Point, Missouri",
    description:
      "Offers well-equipped tritoons, pontoons, and double-decker rental boats from its marina on Table Rock Lake.",
    website: "https://rocklane.com/",
  },
  {
    name: "Still Waters Resort Marina",
    type: "Pontoon & Ski Boat Rentals",
    location: "Indian Point, Missouri",
    description:
      "Rent pontoon boats and ski boats directly from the Still Waters Resort marina on Table Rock Lake.",
    website: "https://www.stillwatersresort.com/marina",
  },
  {
    name: "Table Rock Lake Pontoon Rentals at Baxter Marina",
    type: "Pontoon Rentals",
    location: "Baxter Marina, Missouri",
    description:
      "Specializes in pontoon and tritoon rentals with a large rental fleet located at Baxter Marina on Table Rock Lake.",
    website: "https://pontoonrentals.com/",
  },
  {
    name: "Five Star Houseboat Rentals",
    type: "Houseboat Rentals",
    location: "Kimberling City, Missouri",
    description:
      "Luxury houseboat rentals designed for extended stays directly on Table Rock Lake, with boats that can accommodate larger groups.",
    website: "https://tablerockhouseboatrentals.com/",
  },
  {
    name: "What's Up Dock Marina",
    type: "Boat & Personal Watercraft Rentals",
    location: "Table Rock Lake",
    description:
      "Offers ski boats, pontoon boats, WaveRunners, overnight slips, fuel, and boating supplies.",
    website: "https://whatsupdock.com/",
  },
];

export default function BoatRentalsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-slate-950 px-6 pb-16 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Get on the Water
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            Boat Rentals
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Find boats, pontoons, tritoons, personal watercraft, and houseboats
            available around Table Rock Lake.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-950">
              Rentals on Table Rock Lake
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Browse rental options around the lake and go directly to each
              operator to view current boats, pricing, availability, and booking
              options.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {boatRentals.map((rental) => (
              <div
                key={rental.name}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-500">
                  {rental.type}
                </p>

                <h2 className="mt-3 text-2xl font-black text-slate-950">
                  {rental.name}
                </h2>

                <p className="mt-2 font-semibold text-slate-500">
                  {rental.location}
                </p>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {rental.description}
                </p>

                <a
                  href={rental.website}
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