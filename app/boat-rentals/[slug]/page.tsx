import Navbar from "../../components/Navbar";

const rentalDetails = {
  "state-park-marina": {
    name: "State Park Marina",
    location: "Branson, Missouri",
    description:
      "Boat rentals on Table Rock Lake with options for families, cruising, fishing, and watersports.",
    features: ["Pontoon Rentals", "Boat Rentals", "Marina Access", "Lake Supplies"],
  },

  "indian-point-marina": {
    name: "Indian Point Marina",
    location: "Branson, Missouri",
    description:
      "Table Rock Lake boat rentals with convenient access from Indian Point.",
    features: ["Pontoon Rentals", "Boat Rentals", "Fuel Dock", "Marina Access"],
  },

  "port-of-kimberling-marina": {
    name: "Port of Kimberling Marina",
    location: "Kimberling City, Missouri",
    description:
      "Boat rentals and marina services with direct access to Table Rock Lake.",
    features: ["Boat Rentals", "Marina Access", "Fuel Dock", "Lake Supplies"],
  },

  "long-creek-marina": {
    name: "Long Creek Marina",
    location: "Ridgedale, Missouri",
    description:
      "Boat and watercraft rentals with convenient access to the southern side of Table Rock Lake.",
    features: ["Boat Rentals", "Watercraft Rentals", "Marina Access", "Watersports"],
  },

  "rock-lane-resort-and-marina": {
    name: "Rock Lane Resort & Marina",
    location: "Branson West, Missouri",
    description:
      "Boat rentals and marina services with convenient access to Table Rock Lake.",
    features: ["Boat Rentals", "Boat Slips", "Marina Access", "Lakefront Resort"],
  },

  "baxter-marina": {
    name: "Baxter Marina",
    location: "Table Rock Lake, Missouri",
    description:
      "Pontoon rentals and marina access for exploring Table Rock Lake.",
    features: ["Pontoon Rentals", "Marina Access", "Lake Cruising", "Family Rentals"],
  },
};

type RentalSlug = keyof typeof rentalDetails;

export default async function BoatRentalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const rental = rentalDetails[slug as RentalSlug];

  if (!rental) {
    return (
      <main className="min-h-screen bg-slate-50">
        <Navbar />

        <section className="mx-auto max-w-4xl px-6 py-32">
          <h1 className="text-4xl font-black text-slate-900">
            Boat rental not found
          </h1>

          <a
            href="/boat-rentals"
            className="mt-6 inline-block font-bold text-cyan-600"
          >
            ← Back to boat rentals
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
            LakeDayz Boat Rental
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            {rental.name}
          </h1>

          <p className="mt-4 text-lg text-slate-300">
            {rental.location}
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {rental.description}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-16 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-black text-slate-900">
            Rental features
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {rental.features.map((feature) => (
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
            Rental information
          </h2>

          <p className="mt-5 text-sm font-bold text-slate-500">
            LOCATION
          </p>

          <p className="mt-1 text-slate-800">
            {rental.location}
          </p>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${rental.name}, ${rental.location}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 block w-full rounded-xl bg-cyan-500 px-5 py-3 text-center font-bold text-white"
          >
            Get directions
          </a>

          <a
            href="/boat-rentals"
            className="mt-5 block text-center font-bold text-cyan-600"
          >
            ← Back to all boat rentals
          </a>
        </aside>
      </section>
    </main>
  );
}