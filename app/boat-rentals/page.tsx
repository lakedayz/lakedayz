import Navbar from "../components/Navbar";

const rentalBusinesses = [
  {
    slug: "state-park-marina",
    name: "State Park Marina",
    location: "Branson, Missouri",
    description:
      "Boat rentals on Table Rock Lake with a variety of options for families, cruising, fishing, and watersports.",
  },
  {
    slug: "indian-point-marina",
    name: "Indian Point Marina",
    location: "Branson, Missouri",
    description:
      "Table Rock Lake boat rentals with convenient access from Indian Point.",
  },
  {
    slug: "port-of-kimberling-marina",
    name: "Port of Kimberling Marina",
    location: "Kimberling City, Missouri",
    description:
      "Boat rentals and marina services with direct access to Table Rock Lake.",
  },
  {
    slug: "long-creek-marina",
    name: "Long Creek Marina",
    location: "Ridgedale, Missouri",
    description:
      "Boat and watercraft rentals with access to the southern side of Table Rock Lake.",
  },
  {
    slug: "rock-lane-resort-and-marina",
    name: "Rock Lane Resort & Marina",
    location: "Branson West, Missouri",
    description:
      "Boat rentals and marina services with convenient access to Table Rock Lake.",
  },
  {
    slug: "baxter-marina",
    name: "Baxter Marina",
    location: "Table Rock Lake, Missouri",
    description:
      "Pontoon rentals and marina access for exploring Table Rock Lake.",
  },
];

export default function BoatRentalsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            LakeDayz Rental Directory
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            BOAT RENTALS
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Find boat rentals and marina rental services around Table Rock Lake.
          </p>

          <div className="mt-8 flex max-w-2xl rounded-2xl bg-white p-2">
            <input
              type="text"
              placeholder="Search boat rentals..."
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
          {rentalBusinesses.map((business) => (
            <article
              key={business.slug}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm font-bold text-cyan-600">
                Boat Rental
              </p>

              <h2 className="mt-3 text-2xl font-black text-slate-900">
                {business.name}
              </h2>

              <p className="mt-2 text-sm font-semibold text-slate-500">
                {business.location}
              </p>

              <p className="mt-4 text-slate-600">
                {business.description}
              </p>

              <a
                href={`/boat-rentals/${business.slug}`}
                className="mt-6 inline-block font-bold text-cyan-600"
              >
                View rental →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}