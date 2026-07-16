import Navbar from "../../components/Navbar";

const restaurantDetails = {
  "shady-taco-and-grill": {
    name: "Shady Taco & Grill",
    location: "Indian Point / Table Rock Lake Area",
    description:
      "Casual lake-area restaurant serving tacos, grilled favorites, and a laid-back atmosphere near Table Rock Lake.",
    features: ["Casual Dining", "Tacos", "Lake Area", "Family Friendly"],
  },

  "lakeview-scoops-and-sips": {
    name: "Lakeview Scoops & Sips",
    location: "Lakeview Campground",
    description:
      "A lakeside stop for hand-dipped ice cream, sundaes, milkshakes, specialty coffee drinks, and bakery treats.",
    features: ["Ice Cream", "Coffee Drinks", "Sweet Treats", "Lake Views"],
  },

  "rock-island-grill-and-tiki-bar": {
    name: "Rock Island Grill & Tiki Bar",
    location: "Rock Lane Resort, Branson, Missouri",
    description:
      "Lakefront dining and drinks at Rock Lane Resort with views of Table Rock Lake and seasonal live entertainment.",
    features: ["Lakefront Dining", "Bar", "Live Entertainment", "Lake Views"],
  },

  "indian-point-floating-cafe": {
    name: "Indian Point Floating Cafe",
    location: "Indian Point Marina, Branson, Missouri",
    description:
      "A two-story floating restaurant on Table Rock Lake serving breakfast, lunch, and casual lake-day meals.",
    features: ["Floating Restaurant", "Breakfast", "Lunch", "Marina Access"],
  },

  "portside-pizza-and-ice-cream": {
    name: "Portside Pizza & Ice Cream",
    location: "State Park Marina, Branson, Missouri",
    description:
      "Boat-or-foot accessible marina dining serving handmade pizza and hand-dipped ice cream.",
    features: ["Pizza", "Ice Cream", "Boat Accessible", "Marina Dining"],
  },

  "pier-28-pizza-and-grill": {
    name: "Pier 28 Pizza & Grill",
    location: "Port of Kimberling Marina, Kimberling City, Missouri",
    description:
      "A floating boat-up restaurant with pizza, burgers, fish, salads, drinks, and courtesy boat slips.",
    features: ["Pizza", "Grill", "Boat Accessible", "Courtesy Slips"],
  },

  "goofy-goose-lakeside-bar-and-grill": {
    name: "Goofy Goose Lakeside Bar & Grill",
    location: "Kimberling City, Missouri",
    description:
      "A lakeside bar and grill near Schooner Creek with food, drinks, lake views, and temporary boat slips for guests.",
    features: ["Lakeside Dining", "Bar", "Lake Views", "Boat Slips"],
  },
};

type RestaurantSlug = keyof typeof restaurantDetails;

export default async function RestaurantDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const restaurant = restaurantDetails[slug as RestaurantSlug];

  if (!restaurant) {
    return (
      <main className="min-h-screen bg-slate-50">
        <Navbar />

        <section className="mx-auto max-w-4xl px-6 py-32">
          <h1 className="text-4xl font-black text-slate-900">
            Restaurant not found
          </h1>

          <a
            href="/restaurants"
            className="mt-6 inline-block font-bold text-cyan-600"
          >
            ← Back to restaurants
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
            LakeDayz Restaurant
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            {restaurant.name}
          </h1>

          <p className="mt-4 text-lg text-slate-300">
            {restaurant.location}
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {restaurant.description}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-16 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-black text-slate-900">
            Restaurant features
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {restaurant.features.map((feature) => (
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
            Restaurant information
          </h2>

          <p className="mt-5 text-sm font-bold text-slate-500">
            LOCATION
          </p>

          <p className="mt-1 text-slate-800">
            {restaurant.location}
          </p>

          <a
  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${restaurant.name}, ${restaurant.location}`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-7 block w-full rounded-xl bg-cyan-500 px-5 py-3 text-center font-bold text-white"
>
  Get directions
</a>

          <a
            href="/restaurants"
            className="mt-5 block text-center font-bold text-cyan-600"
          >
            ← Back to all restaurants
          </a>
        </aside>
      </section>
    </main>
  );
}