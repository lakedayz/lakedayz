import Navbar from "../../components/Navbar";

const marinaDetails = {
  "state-park-marina": {
    name: "State Park Marina",
    lake: "Table Rock Lake",
    location: "Branson, Missouri",
    image: "/statepark12.jpg",
    description:
      "Boat rentals, slips, scenic lake cruises, a marina store, and lake-day essentials.",
    services: ["Boat Rentals", "Boat Slips", "Lake Cruises", "Marina Store"],
  },

  "indian-point-marina": {
    name: "Indian Point Marina",
    lake: "Table Rock Lake",
    location: "Branson, Missouri",
    image: "",
    description:
      "A full-service marina with boat rentals, slip rentals, a floating cafe, gas dock, store, and diving center.",
    services: ["Boat Rentals", "Boat Slips", "Fuel Dock", "Floating Cafe"],
  },

  "port-of-kimberling-marina": {
    name: "Port of Kimberling Marina",
    lake: "Table Rock Lake",
    location: "Kimberling City, Missouri",
    image: "",
    description:
      "Wet slips, dry-stack storage, transient slips, fuel services, boat rentals, and a ship store.",
    services: ["Boat Rentals", "Wet Slips", "Fuel Dock", "Ship Store"],
  },

  "long-creek-marina": {
    name: "Long Creek Marina",
    lake: "Table Rock Lake",
    location: "Ridgedale, Missouri",
    image: "/longcreek.jpg",
    description:
      "A full-service marina open to the public with boat and watercraft rentals, fishing services, guides, and water activities.",
    services: ["Boat Rentals", "Fishing Services", "Guides", "Water Activities"],
  },

  "rock-lane-resort-and-marina": {
    name: "Rock Lane Resort and Marina",
    lake: "Table Rock Lake",
    location: "Branson, Missouri",
    image: "/rockl.jpg",
    description:
      "A lakefront resort and marina offering boat rentals, nightly and long-term slip rentals, dining, and lodging.",
    services: ["Boat Rentals", "Boat Slips", "Dining", "Lodging"],
  },

  "cricket-creek-marina": {
    name: "Cricket Creek Marina",
    lake: "Table Rock Lake",
    location: "Omaha, Arkansas",
    image: "",
    description:
      "A full-service marina offering boat rentals, slip rentals, fuel, lake supplies, and access to the southern end of Table Rock Lake.",
    services: ["Boat Rentals", "Boat Slips", "Fuel Dock", "Lake Supplies"],
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

  const heroStyle = marina.image
    ? {
        backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.7), rgba(2, 6, 23, 0.7)), url(${marina.image})`,
      }
    : undefined;

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section
        className={`relative bg-cover bg-center px-6 py-24 text-white ${
          marina.image ? "" : "bg-slate-950"
        }`}
        style={heroStyle}
      >
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

          <a
  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${marina.name}, ${marina.location}`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-7 block w-full rounded-xl bg-cyan-500 px-5 py-3 text-center font-bold text-white"
>
  Get directions
</a>

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
