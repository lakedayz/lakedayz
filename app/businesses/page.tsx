import Navbar from "../components/Navbar";

const businesses = [
  {
    name: "Dan's Marine Service",
    type: "Marine Service & Repair",
    location: "Kimberling City, Missouri",
    description:
      "Complete marine service and repair serving Table Rock Lake, including mechanical and electrical systems, diagnostics, fiberglass and gel coat repair, bottom painting, welding, winterization, and other marine services.",
    website: "https://dansmarinetablerock.com/",
  },
  {
    name: "Ulrich Marine",
    type: "Marine Service, Repair & Storage",
    location: "Branson West, Missouri",
    description:
      "A longtime Table Rock Lake marine business offering factory-certified boat service and repair, boat and RV storage, warranty work, winterization, and on-site boat detailing.",
    website: "https://www.ulrichmarine.com/",
  },
  {
    name: "Cope Marine",
    type: "Boat Sales, Service & Storage",
    location: "Branson West, Missouri",
    description:
      "A full-service boat dealership offering new and pre-owned boats, mechanical and electrical service, fiberglass repair, parts, storage, winterization, and marine upgrades.",
    website: "https://www.copemarine.com/",
  },
  {
    name: "American Water Sports",
    type: "Boat Sales, Service & Storage",
    location: "Kimberling City & Shell Knob, Missouri",
    description:
      "A Table Rock Lake-area boat dealership with locations in Kimberling City and Shell Knob offering boat sales, service, winterization, parts, and storage.",
    website: "https://americanwatersports.com/",
  },
  {
    name: "The Harbor",
    type: "Boat Sales & Marine Service",
    location: "Branson / Table Rock Lake",
    description:
      "A major Table Rock Lake marine dealership offering new and pre-owned boats, parts, warranties, professional service, and lakefront sales locations.",
    website: "https://www.theharbor.com/",
  },
  {
    name: "Toons Table Rock",
    type: "Boat Sales, Electronics & Service",
    location: "Shell Knob, Missouri",
    description:
      "A Table Rock Lake-area boat business offering pontoon, tritoon, and fishing boat sales along with service, parts, marine electronics sales, installation, and repair.",
    website: "https://toonstablerock.com/",
  },
  {
    name: "Dyna Prop",
    type: "Propeller & Boat Repair",
    location: "Table Rock Lake Area",
    description:
      "A family-operated marine service business serving Table Rock Lake with propeller services, boat repair, parts, accessories, and other boating needs.",
    website:
      "https://business.visittablerocklake.com/list/member/dyna-prop-inc-134965",
  },
  {
    name: "D&R Dock Builders",
    type: "Dock Construction & Repair",
    location: "Reeds Spring, Missouri",
    description:
      "A local dock company serving the Table Rock Lake area with dock construction, repairs, modifications, and other waterfront dock services.",
    website: "https://dandrdock.com/",
  },
  {
    name: "James River Dock Services",
    type: "Dock Construction & Service",
    location: "Table Rock Lake, Missouri",
    description:
      "A full-service dock manufacturer and service company providing new dock construction, repairs, custom modifications, and commercial marina dock projects around Table Rock Lake.",
    website: "https://jamesriverdockservices.com/",
  },
  {
    name: "Top Shelf Boat Lifts",
    type: "Boat Lift Sales & Service",
    location: "Kimberling City Area, Missouri",
    description:
      "A Table Rock Lake-area boat lift specialist offering boat lift installation, repair, relocation, modification, trade-ins, and dock upgrades.",
    website:
      "https://business.visittablerocklake.com/list/member/top-shelf-boat-lifts-137145",
  },
  {
    name: "Fitzco Marine Group",
    type: "Dock Construction & Boat Lifts",
    location: "Table Rock Lake",
    description:
      "A marine construction company serving Table Rock Lake with custom dock construction, dock repairs, waterfront projects, and boat lift solutions.",
    website: "https://fitzcomarine.com/missouri/table-rock-lake",
  },
  {
    name: "Poly Lift Boat Lifts",
    type: "Boat Lift Sales & Service",
    location: "Serving Table Rock Lake",
    description:
      "A longtime boat lift company providing lift systems and service for boat owners on Table Rock Lake and other Missouri lakes.",
    website: "https://www.polylift.com/",
  },
];

export default function BusinessesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-slate-950 px-6 pb-16 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Discover Local
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            Find Trusted Lake Businesses
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Find boat repair, marine service, boat sales, storage, propeller
            repair, dock builders, boat lift companies, and other businesses
            serving the Table Rock Lake community.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-950">
              Local Services Around Table Rock Lake
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Browse trusted businesses serving boat owners, lake homeowners,
              visitors, and the Table Rock Lake community.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businesses.map((business) => (
              <div
                key={business.name}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-500">
                  {business.type}
                </p>

                <h2 className="mt-3 text-2xl font-black text-slate-950">
                  {business.name}
                </h2>

                <p className="mt-2 font-semibold text-slate-500">
                  {business.location}
                </p>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {business.description}
                </p>

                <a
                  href={business.website}
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