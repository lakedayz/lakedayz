import Navbar from "../components/Navbar";

const restaurants = [
  {
    slug: "shady-taco-and-grill",
    name: "Shady Taco & Grill",
    location: "Indian Point / Table Rock Lake Area",
    description:
      "Casual lake-area restaurant serving tacos, grilled favorites, and a laid-back atmosphere near Table Rock Lake.",
  },
  {
    slug: "lakeview-scoops-and-sips",
    name: "Lakeview Scoops & Sips",
    location: "Lakeview Campground",
    description:
      "A lakeside stop for hand-dipped ice cream, sundaes, milkshakes, specialty coffee drinks, and bakery treats.",
  },
  {
    slug: "rock-island-grill-and-tiki-bar",
    name: "Rock Island Grill & Tiki Bar",
    location: "Rock Lane Resort, Branson, Missouri",
    description:
      "Lakefront dining and drinks at Rock Lane Resort with views of Table Rock Lake and seasonal live entertainment.",
  },
  {
    slug: "indian-point-floating-cafe",
    name: "Indian Point Floating Cafe",
    location: "Indian Point Marina, Branson, Missouri",
    description:
      "A two-story floating restaurant on Table Rock Lake serving breakfast, lunch, and casual lake-day meals.",
  },
  {
    slug: "portside-pizza-and-ice-cream",
    name: "Portside Pizza & Ice Cream",
    location: "State Park Marina, Branson, Missouri",
    description:
      "Boat-or-foot accessible marina dining serving handmade pizza and hand-dipped ice cream.",
  },
  {
    slug: "pier-28-pizza-and-grill",
    name: "Pier 28 Pizza & Grill",
    location: "Port of Kimberling Marina, Kimberling City, Missouri",
    description:
      "A floating boat-up restaurant with pizza, burgers, fish, salads, drinks, and courtesy boat slips.",
  },
  {
    slug: "goofy-goose-lakeside-bar-and-grill",
    name: "Goofy Goose Lakeside Bar & Grill",
    location: "Kimberling City, Missouri",
    description:
      "A lakeside bar and grill near Schooner Creek with food, drinks, lake views, and temporary boat slips for guests.",
  },
];

export default function RestaurantsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            LakeDayz Restaurant Directory
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            RESTAURANTS
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Find lakefront restaurants, marina dining, boat-accessible food,
            and great places to eat around the lake.
          </p>

          <div className="mt-8 flex max-w-2xl rounded-2xl bg-white p-2">
            <input
              type="text"
              placeholder="Search restaurants..."
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
          {restaurants.map((restaurant) => (
            <article
              key={restaurant.name}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm font-bold text-cyan-600">
                Restaurant
              </p>

              <h2 className="mt-3 text-2xl font-black text-slate-900">
                {restaurant.name}
              </h2>

              <p className="mt-2 text-sm font-semibold text-slate-500">
                {restaurant.location}
              </p>

              <p className="mt-4 text-slate-600">
                {restaurant.description}
              </p>

              <a
  href={`/restaurants/${restaurant.slug}`}
  className="mt-6 inline-block font-bold text-cyan-600"
>
  View resturants →
</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}