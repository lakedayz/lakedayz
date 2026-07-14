const categories = [
  {
    icon: "🚤",
    title: "Boat Rentals",
    description: "Find boats, pontoons, jet skis, kayaks, and paddleboards.",
  },
  {
    icon: "⚓",
    title: "Marinas",
    description: "Discover slips, fuel docks, supplies, and lake services.",
  },
  {
    icon: "🍔",
    title: "Restaurants",
    description: "Explore waterfront dining and local lake favorites.",
  },
  {
    icon: "🎣",
    title: "Fishing Guides",
    description: "Book trusted local guides and plan your next fishing trip.",
  },
  {
    icon: "🛥️",
    title: "Boat Sales",
    description: "Browse boats, watercraft, trailers, and lake equipment.",
  },
  {
    icon: "📅",
    title: "Events",
    description: "Find live music, tournaments, fireworks, and poker runs.",
  },
];

const lakes = [
  {
    name: "Table Rock Lake",
    location: "Missouri",
    description: "Branson-area boating, fishing, dining, and entertainment.",
    gradient: "from-sky-500 via-blue-600 to-slate-950",
  },
  {
    name: "Lake of the Ozarks",
    location: "Missouri",
    description: "Waterfront restaurants, nightlife, marinas, and rentals.",
    gradient: "from-cyan-400 via-sky-700 to-slate-950",
  },
  {
    name: "Bull Shoals Lake",
    location: "Missouri & Arkansas",
    description: "Clear water, quiet coves, fishing, and outdoor adventure.",
    gradient: "from-emerald-400 via-teal-700 to-slate-950",
  },
  {
    name: "Beaver Lake",
    location: "Arkansas",
    description: "Scenic shorelines, marinas, camping, and water recreation.",
    gradient: "from-blue-400 via-indigo-700 to-slate-950",
  },
  {
    name: "Truman Lake",
    location: "Missouri",
    description: "Fishing, camping, boating, and relaxed lake-town experiences.",
    gradient: "from-amber-400 via-orange-700 to-slate-950",
  },
  {
    name: "Stockton Lake",
    location: "Missouri",
    description: "Sailing, fishing, quiet coves, and family lake days.",
    gradient: "from-teal-400 via-cyan-700 to-slate-950",
  },
];

const featuredBusinesses = [
  {
    category: "Marina",
    name: "Your Business Here",
    lake: "Table Rock Lake",
    description:
      "Premium placement for trusted lake-area businesses and service providers.",
  },
  {
    category: "Boat Rental",
    name: "Featured Rental Partner",
    lake: "Lake of the Ozarks",
    description:
      "Help visitors quickly find and contact the right rental provider.",
  },
  {
    category: "Restaurant",
    name: "Featured Waterfront Dining",
    lake: "Beaver Lake",
    description:
      "Showcase menus, location details, hours, photos, and special events.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="absolute left-0 top-0 z-20 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a
            href="#"
            className="text-2xl font-black tracking-tight text-white"
          >
            LAKE<span className="text-sky-400">DAYZ</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/90 md:flex">
            <a href="#lakes" className="transition hover:text-sky-300">
              Explore Lakes
            </a>
            <a href="#categories" className="transition hover:text-sky-300">
              Categories
            </a>
            <a href="#businesses" className="transition hover:text-sky-300">
              Businesses
            </a>
            <a href="#events" className="transition hover:text-sky-300">
              Events
            </a>
          </nav>

          <button className="rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-slate-950">
            List Your Business
          </button>
        </div>
      </header>

      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-slate-950 px-6 pb-20 pt-36 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.5),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(6,182,212,0.3),_transparent_35%),linear-gradient(to_bottom_right,_#082f49,_#020617)]" />

        <div className="absolute -right-24 top-28 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-sky-300">
              Explore. Book. Enjoy.
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
              Start Your
              <span className="block text-sky-400">Lake Day</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Discover rentals, marinas, restaurants, events, fishing guides,
              boat sales, and trusted local businesses around your favorite
              lake.
            </p>

            <div className="mt-10 max-w-3xl rounded-3xl border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex flex-1 items-center rounded-2xl bg-white px-5">
                  <span className="mr-3 text-xl">🔍</span>
                  <input
                    type="text"
                    placeholder="Search lakes, rentals, marinas, events..."
                    className="w-full bg-transparent py-4 text-slate-950 outline-none placeholder:text-slate-400"
                  />
                </div>

                <button className="rounded-2xl bg-sky-500 px-8 py-4 font-black text-white transition hover:bg-sky-400">
                  Search LakeDayz
                </button>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3 text-sm">
              {["Boat Rentals", "Restaurants", "Marinas", "Events"].map(
                (item) => (
                  <button
                    key={item}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-slate-200 backdrop-blur transition hover:border-sky-300 hover:text-white"
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rotate-2 rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-sky-400 via-blue-700 to-slate-950 p-8">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-200">
                  Featured destination
                </p>

                <div className="mt-28">
                  <p className="text-sm text-sky-100">Branson, Missouri</p>
                  <h2 className="mt-2 text-4xl font-black">
                    Table Rock Lake
                  </h2>
                  <p className="mt-3 leading-7 text-slate-200">
                    Discover marinas, rentals, restaurants, fishing guides,
                    events, and everything needed for your next lake day.
                  </p>

                  <button className="mt-7 rounded-full bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-sky-100">
                    Explore Table Rock
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-600">
              Browse LakeDayz
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Find what you need
            </h2>
          </div>

          <p className="max-w-xl text-slate-600">
            Search trusted lake-area businesses, services, activities, rentals,
            and events all in one place.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-3xl transition group-hover:scale-110">
                {category.icon}
              </div>

              <h3 className="mt-6 text-2xl font-black">{category.title}</h3>

              <p className="mt-3 leading-7 text-slate-600">
                {category.description}
              </p>

              <button className="mt-6 font-bold text-sky-600 transition group-hover:text-sky-500">
                Explore category →
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="lakes" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-600">
                Choose your destination
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Explore featured lakes
              </h2>
            </div>

            <button className="w-fit rounded-full border border-slate-300 px-6 py-3 font-bold transition hover:border-sky-500 hover:text-sky-600">
              View all lakes
            </button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lakes.map((lake) => (
              <article
                key={lake.name}
                className="group relative min-h-[360px] overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white shadow-lg"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${lake.gradient} opacity-90 transition duration-500 group-hover:scale-105`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur">
                      {lake.location}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl font-black">{lake.name}</h3>
                    <p className="mt-3 leading-7 text-slate-200">
                      {lake.description}
                    </p>
                    <button className="mt-6 rounded-full bg-white px-5 py-3 font-bold text-slate-950 transition hover:bg-sky-100">
                      Explore lake
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="businesses" className="mx-auto max-w-7xl px-6 py-24">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-600">
            Local favorites
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Featured businesses
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            These spaces will showcase trusted marinas, restaurants, rental
            companies, guides, mechanics, and other lake-area businesses.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredBusinesses.map((business) => (
            <article
              key={business.name}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-48 bg-gradient-to-br from-sky-300 via-blue-500 to-slate-950" />

              <div className="p-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
                  {business.category}
                </p>
                <h3 className="mt-2 text-2xl font-black">{business.name}</h3>
                <p className="mt-2 text-sm font-semibold text-slate-500">
                  {business.lake}
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  {business.description}
                </p>

                <button className="mt-6 font-bold text-sky-600">
                  View business →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="events" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
              What&apos;s happening
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Never miss a lake event
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Discover fishing tournaments, live music, fireworks, boat shows,
              poker runs, festivals, and family activities around the lake.
            </p>

            <button className="mt-8 rounded-full bg-sky-500 px-7 py-4 font-black transition hover:bg-sky-400">
              Browse upcoming events
            </button>
          </div>

          <div className="space-y-4">
            {[
              ["JUL 24", "Live Music on the Water", "Table Rock Lake"],
              ["AUG 02", "Summer Fishing Tournament", "Bull Shoals Lake"],
              ["AUG 15", "Lakefront Family Festival", "Lake of the Ozarks"],
            ].map(([date, event, lake]) => (
              <article
                key={event}
                className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-sky-500 text-center text-sm font-black">
                  {date}
                </div>

                <div>
                  <h3 className="text-xl font-black">{event}</h3>
                  <p className="mt-1 text-slate-400">{lake}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sky-500 via-blue-700 to-slate-950 px-8 py-16 text-center text-white shadow-2xl sm:px-14">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-200">
            Grow with LakeDayz
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
            Put your business in front of lake visitors and locals
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            Claim your listing, share your services, promote events, and reach
            customers planning their next lake day.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <button className="rounded-full bg-white px-8 py-4 font-black text-slate-950 transition hover:bg-sky-100">
              List Your Business
            </button>
            <button className="rounded-full border border-white/30 px-8 py-4 font-black transition hover:bg-white/10">
              Partner With LakeDayz
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-2xl font-black tracking-tight">
              LAKE<span className="text-sky-500">DAYZ</span>
            </div>
            <p className="mt-4 max-w-md leading-7 text-slate-600">
              Your local guide to lake businesses, rentals, events, dining,
              services, and unforgettable lake days.
            </p>
          </div>

          <div>
            <h3 className="font-black">Explore</h3>
            <div className="mt-4 space-y-3 text-slate-600">
              <p>Featured Lakes</p>
              <p>Local Businesses</p>
              <p>Rentals</p>
              <p>Events</p>
            </div>
          </div>

          <div>
            <h3 className="font-black">LakeDayz</h3>
            <div className="mt-4 space-y-3 text-slate-600">
              <p>About</p>
              <p>List Your Business</p>
              <p>Partners</p>
              <p>Contact</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 px-6 py-6 text-center text-sm text-slate-500">
          © 2026 LakeDayz LLC. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
