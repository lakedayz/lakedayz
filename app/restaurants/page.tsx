import Navbar from "../components/Navbar";

const restaurants = [
  {
    name: "Indian Point Floating Cafe",
    type: "Floating Restaurant",
    location: "Indian Point Marina",
    description:
      "A casual floating restaurant directly on Table Rock Lake known for breakfast, burgers, sandwiches, and easy boat access with courtesy slips.",
    website: "https://indianpointmarina.com/",
  },
  {
    name: "Rock Island Grill & Tiki Bar",
    type: "Lakefront Restaurant & Tiki Bar",
    location: "Rock Lane Resort, Indian Point",
    description:
      "Lakeside dining and drinks at Rock Lane Resort with views of Table Rock Lake, live entertainment, and a relaxed resort atmosphere.",
    website: "https://rocklane.com/",
  },
  {
    name: "The Lake House Restaurant & Pub",
    type: "Lake-View Restaurant & Pub",
    location: "Indian Point, Missouri",
    description:
      "A full-service restaurant and pub on Indian Point offering dinner, drinks, live entertainment, and views overlooking Table Rock Lake.",
    website: "https://www.thelakehouseindianpoint.com/",
  },
  {
    name: "Portside Pizza",
    type: "Lakeside Pizza & Casual Dining",
    location: "State Park Marina",
    description:
      "A casual marina restaurant serving handcrafted pizza, pasta, appetizers, and other favorites with views of Table Rock Lake.",
    website:
      "https://www.explorebranson.com/listing/portside-pizza-at-state-park-marina/5119/",
  },
  {
    name: "Pier 28 Pizza & Grill",
    type: "Floating Restaurant",
    location: "Port of Kimberling Marina",
    description:
      "A floating pizza and grill restaurant at Port of Kimberling Marina with casual food, lake views, live music, and courtesy boat slips.",
    website: "https://portofkimberlingmarina.com/",
  },
  {
    name: "Big Buoy's",
    type: "Boat-To Restaurant",
    location: "Kimberling City Area",
    description:
      "A casual Table Rock Lake dining destination popular with boaters looking for food, drinks, and an easy stop while spending the day on the water.",
    website: "https://www.visittablerocklake.com/restaurants-on-the-water/",
  },
  {
    name: "Goofy Goose Lakeside Bar & Grill",
    type: "Lakeside Bar & Grill",
    location: "Table Rock Lake",
    description:
      "A casual lakeside restaurant and bar serving food and drinks in a relaxed lake atmosphere with convenient access for Table Rock Lake visitors.",
    website: "https://www.visittablerocklake.com/restaurants-on-the-water/",
  },
  {
    name: "Watson's on the Water",
    type: "Marina Restaurant",
    location: "Campbell Point Marina",
    description:
      "A casual waterfront restaurant serving barbecue, burgers, fried chicken, salads, cocktails, and live music at Campbell Point Marina.",
    website: "https://campbellpointmarina.com/",
  },
  {
    name: "Dock'N'Eat",
    type: "Marina Restaurant",
    location: "Big M Marina",
    description:
      "A casual marina dining stop on the western side of Table Rock Lake serving boaters and visitors spending the day around Big M Marina.",
    website: "https://www.bigmmarina.com/",
  },
  {
    name: "Pizza at Cricket Creek",
    type: "Marina Pizza",
    location: "Cricket Creek Marina",
    description:
      "A casual pizza option located at Cricket Creek Marina, making it an easy food stop for boaters exploring the southern side of Table Rock Lake.",
    website: "https://www.cricketcreek.com/",
  },
  {
    name: "Lakeside Restaurant & General Store",
    type: "Lakefront Restaurant",
    location: "Table Rock Lake",
    description:
      "A casual lakefront restaurant and general store serving visitors and boaters looking for food, supplies, and a convenient stop near the water.",
    website: "https://www.visittablerocklake.com/restaurants-on-the-water/",
  },
  {
    name: "Shady Taco & Grill",
    type: "Tacos & Casual Dining",
    location: "Indian Point, Missouri",
    description:
      "A relaxed Indian Point dining spot serving tacos and casual food with a lake-area atmosphere and live music events.",
    website: "https://www.facebook.com/p/Shady-Taco-Grill-100064202498013/",
  },
  {
    name: "Chateau Grille",
    type: "Upscale Lake-View Dining",
    location: "Chateau on the Lake, Branson",
    description:
      "An elevated restaurant at Chateau on the Lake offering breakfast, lunch, and dinner with impressive views overlooking Table Rock Lake.",
    website: "https://www.chateauonthelake.com/restaurant-branson",
  },
  {
    name: "Osage Restaurant",
    type: "Upscale Regional Dining",
    location: "Top of the Rock, Ridgedale",
    description:
      "A signature Big Cedar dining experience featuring regional cuisine and sweeping Ozark views near Table Rock Lake.",
    website: "https://bigcedar.com/dining/osage-restaurant/",
  },
];

export default function RestaurantsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-slate-950 px-6 pb-16 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Eat Around Table Rock Lake
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            Restaurants
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Find boat-to restaurants, marina dining, lakefront bars, pizza,
            casual food, and destination restaurants around Table Rock Lake.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-950">
              Places to Eat Around the Lake
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Browse restaurants around Table Rock Lake and go directly to each
              restaurant or property for current menus, hours, entertainment,
              and other information.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.name}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-500">
                  {restaurant.type}
                </p>

                <h2 className="mt-3 text-2xl font-black text-slate-950">
                  {restaurant.name}
                </h2>

                <p className="mt-2 font-semibold text-slate-500">
                  {restaurant.location}
                </p>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {restaurant.description}
                </p>

                <a
                  href={restaurant.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full rounded-2xl bg-cyan-500 px-5 py-4 text-center font-black text-white transition hover:bg-cyan-400"
                >
                  View Menu / Visit Website
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}