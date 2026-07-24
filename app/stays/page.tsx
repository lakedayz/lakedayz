import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

const stays = [
  {
    name: "Chateau on the Lake",
    type: "Resort & Hotel",
    location: "Branson, Missouri",
    description:
      "A full-service resort overlooking Table Rock Lake with lake views, dining, spa services, pools, and convenient access to Branson attractions.",
    website: "https://www.chateauonthelake.com/",
  },
  {
    name: "Still Waters Resort",
    type: "Lakefront Resort",
    location: "Indian Point, Missouri",
    description:
      "A family-friendly lakefront resort with nightly rentals, multiple pools, marina access, and easy access to Silver Dollar City.",
    website: "https://www.stillwatersresort.com/",
  },
  {
    name: "The Village at Indian Point",
    type: "Condo Resort",
    location: "Indian Point, Missouri",
    description:
      "Lakefront condo rentals with one- to five-bedroom accommodations, pools, a fishing dock, and resort amenities.",
    website: "https://thevillageatindianpoint.com/",
  },
  {
    name: "Table Rock Resorts at Indian Point",
    type: "Condos, Cabins & Lodges",
    location: "Indian Point, Missouri",
    description:
      "Lakefront and lake-view accommodations ranging from condos and cabins to large multi-bedroom lodges.",
    website: "https://tablerockresorts.com/",
  },
  {
    name: "Rockwood Resort",
    type: "Condo Resort",
    location: "Indian Point, Missouri",
    description:
      "Luxury condo accommodations on Table Rock Lake with spacious units located near Silver Dollar City and Branson.",
    website: "https://www.bookrockwood.com/",
  },
  {
    name: "Big Cedar Lodge",
    type: "Luxury Resort",
    location: "Ridgedale, Missouri",
    description:
      "A premier wilderness resort overlooking Table Rock Lake with cabins, cottages, dining, golf, outdoor recreation, and spa experiences.",
    website: "https://bigcedar.com/",
  },
  {
    name: "Serenity Shores Resort",
    type: "Luxury Lakefront Resort",
    location: "Kimberling City, Missouri",
    description:
      "A lakefront family resort featuring large vacation homes, resort-style pools, a dock, and family-friendly amenities.",
    website: "https://www.serenityshores.com/",
  },
  {
    name: "Port of Kimberling Resort",
    type: "Hotel, Cabins & Resort",
    location: "Kimberling City, Missouri",
    description:
      "A full-service Table Rock Lake destination offering hotel rooms, lakefront cabins, marina access, pools, and recreation.",
    website: "https://staypok.com/",
  },
  {
    name: "Table Rock Shore Resort",
    type: "Lakefront Resort",
    location: "Kimberling City, Missouri",
    description:
      "A family-focused resort near Table Rock Lake offering cabins and condominium-style accommodations with convenient lake access.",
    website: "https://tablerockshore.com/",
  },
  {
    name: "Cedar Wood Resort",
    type: "Cabin Resort",
    location: "Kimberling City, Missouri",
    description:
      "A family-friendly cabin resort within walking distance of Table Rock Lake with a boat dock, pool, playground, and outdoor amenities.",
    website: "https://www.cedarwoodresort.com/",
  },
  {
    name: "Shore Acres Resort",
    type: "Lakefront Resort",
    location: "Branson West, Missouri",
    description:
      "A Table Rock Lake resort with lake-view cottages and convenient access from the accommodations directly to the water.",
    website: "https://www.theshoreacresresort.com/",
  },
  {
    name: "Bavarian Village Resort",
    type: "Lakefront Resort",
    location: "Branson, Missouri",
    description:
      "A family resort directly on Table Rock Lake with one- to five-bedroom accommodations, swimming, and boat docks.",
    website: "https://bavarianresort.com/",
  },
  {
    name: "Tribesman Resort",
    type: "Lakefront Resort",
    location: "Indian Point, Missouri",
    description:
      "A family-friendly Table Rock Lake resort with multiple accommodation sizes, pools, boat slips, and lake recreation.",
    website: "https://book.tribesmanresort.com/",
  },
  {
    name: "Hideaway Resort",
    type: "Lakefront Cabins",
    location: "Galena, Missouri",
    description:
      "A quiet lakefront resort offering private cabins, a dock, swimming pool, water activities, and direct access to Table Rock Lake.",
    website: "https://hideawayresort.com/",
  },
  {
    name: "Lakeside Resort",
    type: "Lakefront Resort",
    location: "Indian Point, Missouri",
    description:
      "A Table Rock Lake resort with villas, cabins, lodges, boat slips, boat rentals, and convenient lake access.",
    website: "https://lakesideresort.com/",
  },
  {
    name: "Cedar Hollow Resort",
    type: "Lakefront Resort",
    location: "Galena, Missouri",
    description:
      "A smaller lakeside retreat with furnished accommodations and a covered boat dock on Table Rock Lake.",
    website: "https://resortatcedarhollow.com/",
  },
];

export default function StaysPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="relative min-h-[430px] overflow-hidden text-white">
        <Image
          src="/stays.jpeg"
          alt="Lakefront resort near Table Rock Lake"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/45 to-slate-950/90" />

        <div className="relative z-10 mx-auto flex min-h-[430px] max-w-7xl flex-col px-6 pb-12 pt-8 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-slate-950/45 px-4 py-2 text-sm font-bold text-white shadow-lg backdrop-blur-md transition hover:bg-white hover:text-slate-950"
          >
            <span aria-hidden="true">←</span>
            Back to LakeDayz
          </Link>

          <div className="mt-auto max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-400">
              Stay near the water
            </p>

            <h1 className="mt-4 text-5xl font-black sm:text-6xl">
              Stays
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-white/90">
              Find resorts, hotels, condos, cabins, and vacation stays with
              easy access to Table Rock Lake.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-950">
              Places to Stay Around Table Rock Lake
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Browse lakefront resorts, condos, hotels, cabins, and vacation
              properties located on or close to Table Rock Lake.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {stays.map((stay) => (
              <article
                key={stay.name}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
                  {stay.type}
                </p>

                <h2 className="mt-3 text-2xl font-black text-slate-950">
                  {stay.name}
                </h2>

                <p className="mt-2 font-semibold text-slate-500">
                  {stay.location}
                </p>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {stay.description}
                </p>

                <a
                  href={stay.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full rounded-2xl bg-cyan-500 px-5 py-4 text-center font-black text-white transition hover:bg-cyan-400"
                >
                  Visit Website
                </a>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-4 font-black text-slate-800 shadow-sm transition hover:bg-slate-950 hover:text-white"
            >
              <span aria-hidden="true">←</span>
              Back to LakeDayz
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}