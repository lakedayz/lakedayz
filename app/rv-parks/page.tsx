import Navbar from "../components/Navbar";

const rvParks = [
  {
    name: "Table Rock State Park Campground",
    type: "State Park Campground",
    location: "Branson, Missouri",
    description:
      "Two campground areas near Table Rock Lake offering basic, electric, and full-hookup camping options with convenient access to the lake and Branson.",
    website:
      "https://mostateparks.com/park/table-rock-state-park/camping",
  },
  {
    name: "Indian Point Campground",
    type: "Lakefront Campground",
    location: "Indian Point, Missouri",
    description:
      "A wooded campground on Table Rock Lake with reservable campsites, electric hookups, showers, a swimming beach, boat ramp, and playground.",
    website:
      "https://www.recreation.gov/camping/campgrounds/232610",
  },
  {
    name: "Old Highway 86 Campground",
    type: "Lakefront Campground",
    location: "Blue Eye, Missouri",
    description:
      "A popular campground built on a peninsula with water on three sides, many shoreline campsites, swimming, boating, fishing, and easy lake access.",
    website:
      "https://www.recreation.gov/camping/campgrounds/232656",
  },
  {
    name: "Mill Creek Campground",
    type: "Lakefront Campground",
    location: "Lampe Area, Missouri",
    description:
      "A spacious campground on the White River arm of Table Rock Lake with many campsites directly beside the water and others just a short walk away.",
    website:
      "https://www.recreation.gov/camping/campgrounds/232643",
  },
  {
    name: "Aunts Creek Campground",
    type: "Lakefront Campground",
    location: "Reeds Spring Area, Missouri",
    description:
      "A Table Rock Lake campground with reservable campsites, electric hookups, showers, a boat ramp, swimming area, playground, and picnic space.",
    website:
      "https://www.recreation.gov/camping/campgrounds/232516",
  },
  {
    name: "Baxter Campground",
    type: "Lakefront Campground",
    location: "Lampe, Missouri",
    description:
      "A lake campground with reservable campsites, electric hookups, showers, a swimming area, boat ramp, playground, and a nearby full-service marina.",
    website:
      "https://www.recreation.gov/camping/campgrounds/232520",
  },
  {
    name: "Big M Campground",
    type: "Lakefront Campground",
    location: "Cassville, Missouri",
    description:
      "A Table Rock Lake campground with electric hookups, showers, a dump station, swimming area, marina access, boat ramp, playground, and recreation facilities.",
    website:
      "https://www.recreation.gov/camping/campgrounds/232526",
  },
  {
    name: "Campbell Point Campground",
    type: "Lakefront Campground",
    location: "Shell Knob, Missouri",
    description:
      "A large campground along the White River arm of Table Rock Lake with dozens of reservable campsites and convenient access to Campbell Point Marina.",
    website:
      "https://www.recreation.gov/camping/campgrounds/232540",
  },
  {
    name: "Cape Fair Campground",
    type: "Lakefront Campground",
    location: "Cape Fair, Missouri",
    description:
      "A shaded campground along the James River arm of Table Rock Lake with campsites, lake access, boating, fishing, and nearby marina services.",
    website:
      "https://www.recreation.gov/camping/campgrounds/232542",
  },
  {
    name: "Eagle Rock Campground",
    type: "Lakefront Campground",
    location: "Eagle Rock, Missouri",
    description:
      "A campground on the southwest side of Table Rock Lake offering boating, fishing, swimming, hiking, wildlife viewing, and access to a full-service marina.",
    website:
      "https://www.recreation.gov/camping/campgrounds/232581",
  },
  {
    name: "Viola Campground",
    type: "Lakefront Campground",
    location: "Shell Knob Area, Missouri",
    description:
      "A campground on the Kings River arm of Table Rock Lake with reservable campsites, electric hookups, showers, drinking water, and easy access to boating.",
    website:
      "https://www.recreation.gov/camping/campgrounds/232732",
  },
  {
    name: "Lakeview Cabins & RV Campground",
    type: "RV Park & Cabins",
    location: "Indian Point, Missouri",
    description:
      "A private campground near Table Rock Lake offering full-hookup RV sites, cabins, Wi-Fi, a pool, and convenient access to Indian Point and Silver Dollar City.",
    website:
      "https://www.lakeviewcampground.com/",
  },
  {
    name: "Ozarks RV Resort on Table Rock Lake",
    type: "Luxury RV Resort",
    location: "Oak Grove, Arkansas",
    description:
      "An upscale RV resort on Table Rock Lake with resort-style amenities including pools, hot tubs, recreation facilities, and access to a nearby full-service marina.",
    website:
      "https://www.ozarksrvresortontablerocklake.com/",
  },
  {
    name: "Bar M Resort & Campground",
    type: "Lakefront RV Resort",
    location: "Branson West, Missouri",
    description:
      "A lakefront resort offering cabins, condos, glamping accommodations, and full-hookup RV sites with direct access to the Table Rock Lake experience.",
    website:
      "https://barmresort.com/",
  },
  {
    name: "Port of Kimberling Campground & RV Park",
    type: "Lakefront RV Park & Campground",
    location: "Kimberling City, Missouri",
    description:
      "A large lakeside campground and RV park offering full-hookup RV sites, tent camping, cabins, and convenient access to Port of Kimberling Marina.",
    website:
      "https://staypok.com/",
  },
  {
    name: "Ozark Country Campground",
    type: "RV Park",
    location: "Branson, Missouri",
    description:
      "A family-owned RV park located a short drive from Table Rock Lake and Branson attractions, offering a convenient base for lake trips and local entertainment.",
    website:
      "https://www.explorebranson.com/listing/ozark-country-campground/5086/",
  },
  {
    name: "Trail's End Resort & RV Park",
    type: "Lakefront Resort & RV Park",
    location: "Indian Point, Missouri",
    description:
      "A Table Rock Lake resort and RV park near Silver Dollar City offering RV accommodations, cabins, and convenient access to the water.",
    website:
      "https://www.explorebranson.com/listing/trails-end-resort-%26-rv-park/5134/",
  },
];

export default function RVParksPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-slate-950 px-6 pb-16 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Camp Around Table Rock Lake
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            RV Parks & Camping
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Find lakefront campgrounds, RV parks, full-hookup sites, tent
            camping, and places to stay close to Table Rock Lake.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-950">
              Camping & RV Parks Around the Lake
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Browse public campgrounds and private RV parks around Table Rock
              Lake, then go directly to the campground or reservation provider
              for current availability and booking.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rvParks.map((park) => (
              <div
                key={park.name}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-500">
                  {park.type}
                </p>

                <h2 className="mt-3 text-2xl font-black text-slate-950">
                  {park.name}
                </h2>

                <p className="mt-2 font-semibold text-slate-500">
                  {park.location}
                </p>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {park.description}
                </p>

                <a
                  href={park.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full rounded-2xl bg-cyan-500 px-5 py-4 text-center font-black text-white transition hover:bg-cyan-400"
                >
                  Reserve / Visit Website
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}