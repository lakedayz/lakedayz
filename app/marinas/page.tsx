import Link from "next/link";
import Navbar from "../components/Navbar";
import CategoryHero from "../components/CategoryHero";
import ListingCard from "../components/ListingCard";

const marinas = [
  {
    name: "State Park Marina",
    type: "Full-Service Marina",
    location: "Branson, Missouri",
    description:
      "A large full-service marina inside Table Rock State Park offering boat rentals, slip rentals, fuel, water sports, a marina store, and lake experiences.",
    website: "https://www.stateparkmarina.com/",
    image: "/statepark12.jpg",
  },
  {
    name: "Indian Point Marina",
    type: "Full-Service Marina",
    location: "Indian Point, Missouri",
    description:
      "A full-service marina offering boat rentals, slip rentals, a gas dock, marina store, floating cafe, diving services, and convenient access to Table Rock Lake.",
    website: "https://indianpointmarina.com/",
    image: "/dock.jpg",
  },
  {
    name: "Port of Kimberling Marina",
    type: "Full-Service Marina",
    location: "Kimberling City, Missouri",
    description:
      "A centrally located Table Rock Lake marina offering wet slips, dry-stack storage, transient slips, fuel, boat rentals, and a ship store.",
    website: "https://portofkimberlingmarina.com/",
    image: "/dock.jpg",
  },
  {
    name: "Cape Fair Marina",
    type: "Full-Service Marina",
    location: "Cape Fair, Missouri",
    description:
      "A marina on the James River arm of Table Rock Lake with fuel, boat rentals, slips, bait and tackle, pump-outs, food, drinks, and waterfront dining nearby.",
    website: "https://capefairmarina.com/",
    image: "/dock.jpg",
  },
  {
    name: "Baxter Marina",
    type: "Full-Service Marina",
    location: "Lampe, Missouri",
    description:
      "A full-service marina offering fuel, a marina store, boat rentals, wet and dry storage, live bait, tackle, snacks, drinks, ice, and boating supplies.",
    website: "https://www.baxtermarina.com/",
    image: "/dock.jpg",
  },
  {
    name: "Cricket Creek Marina",
    type: "Marina & Boat Rentals",
    location: "Omaha, Arkansas",
    description:
      "A Table Rock Lake marina near the Arkansas side offering pontoons, tritoons, ski boats, fishing boats, towable rentals, and other lake services.",
    website: "https://www.cricketcreek.com/",
    image: "/dock.jpg",
  },
  {
    name: "Campbell Point Marina",
    type: "Full-Service Marina",
    location: "Shell Knob, Missouri",
    description:
      "A marina serving the Shell Knob area of Table Rock Lake with boating services, slip access, fuel, supplies, and convenient lake access.",
    website: "https://campbellpointmarina.com/",
    image: "/dock.jpg",
  },
  {
    name: "Long Creek Marina",
    type: "Full-Service Marina",
    location: "Ridgedale, Missouri",
    description:
      "A public full-service marina operated by Big Cedar Lodge offering boat and watercraft rentals, watersports equipment, fishing services, guides, lake tours, and a marina store.",
    website: "https://bigcedar.com/long-creek-marina/",
    image: "/longcreek.jpg",
  },
  {
    name: "Big M Marina",
    type: "Marina & Boat Rentals",
    location: "Cassville, Missouri",
    description:
      "A Table Rock Lake marina offering boat rentals, boat slip rentals, lake access, dining, lodging, and services on the western side of the lake.",
    website: "https://www.bigmmarina.com/",
    image: "/dock.jpg",
  },
  {
    name: "What's Up Dock Marina",
    type: "Full-Service Marina",
    location: "Kimberling City, Missouri",
    description:
      "A one-stop marina offering boat and WaveRunner rentals, overnight slips, fuel, pump-outs, snacks, drinks, lake apparel, and boating accessories.",
    website: "https://whatsupdock.com/",
    image: "/dock.jpg",
  },
  {
    name: "Hideaway Marina",
    type: "Marina & Boat Rentals",
    location: "Galena, Missouri",
    description:
      "A long-running marina serving the western Table Rock Lake area with boat rentals, slips, lake access, and boating services.",
    website: "https://hideawaymarina1956.com/",
    image: "/dock.jpg",
  },
  {
    name: "The Harbor Marina",
    type: "Marina & Marine Services",
    location: "Indian Point, Missouri",
    description:
      "A marina near Silver Dollar City offering boating services, marine sales, and convenient access to the Indian Point area of Table Rock Lake.",
    website: "https://www.theharbormarina.com/",
    image: "/dock.jpg",
  },
  {
    name: "Still Waters Resort Marina",
    type: "Resort Marina",
    location: "Indian Point, Missouri",
    description:
      "A marina serving Still Waters Resort guests and lake visitors with boat rentals, slips, and convenient access to Table Rock Lake.",
    website: "https://www.stillwatersresort.com/marina",
    image: "/dock.jpg",
  },
  {
    name: "Rock Lane Resort & Marina",
    type: "Resort Marina",
    location: "Indian Point, Missouri",
    description:
      "A lakeside resort marina offering boat rentals, marina services, dining, lodging, and convenient access to Table Rock Lake.",
    website: "https://rocklane.com/",
    image: "/rockl.jpg",
  },
];

export default function MarinasPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <CategoryHero
        eyebrow="Explore Table Rock Lake"
        title="Marinas"
        description="Find marinas around Table Rock Lake for fuel, boat rentals, slips, storage, supplies, and everything you need on the water."
        image="/dock.jpg"
      />

      <section className="px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-600">
              Lake Services
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Marinas Around Table Rock Lake
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Browse marina options around the lake and visit each marina for
              current hours, boat rentals, slip availability, fuel, storage,
              services, and other information.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {marinas.map((marina) => (
              <ListingCard
                key={marina.name}
                image={marina.image}
                imageAlt={`${marina.name} on Table Rock Lake`}
                type={marina.type}
                name={marina.name}
                location={marina.location}
                description={marina.description}
                website={marina.website}
                buttonText="Visit Website"
              />
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              href="/"
              className="rounded-full bg-slate-950 px-7 py-4 font-black text-white transition hover:bg-cyan-500"
            >
              ← Back to LakeDayz
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}