import Navbar from "../components/Navbar";

const events = [
  {
    name: "Bags, Beers & Birds - Cornhole Competition",
    type: "Recurring Summer Event",
    date: "Wednesdays through August 26, 2026",
    location: "Branson Hillside Hotel & Theatre",
    description:
      "A recurring summer cornhole competition in Branson running through late August.",
    website:
      "https://www.explorebranson.com/events-branson/",
  },
  {
    name: "Branson Farmers Market at Branson Landing",
    type: "Farmers Market",
    date: "Tuesdays through October 27, 2026",
    location: "Branson Landing",
    description:
      "A recurring farmers market featuring local vendors, products, and seasonal goods near the Branson waterfront.",
    website:
      "https://www.explorebranson.com/events-branson/",
  },
  {
    name: "Farmers Market & Summer Street Fair",
    type: "Market & Summer Event",
    date: "Through October 27, 2026",
    location: "Branson Area",
    description:
      "A recurring seasonal market and street fair offering shopping, local vendors, and summer activities.",
    website:
      "https://www.explorebranson.com/events-branson/",
  },
  {
    name: "Avenged Sevenfold & Good Charlotte",
    type: "Live Concert",
    date: "July 25, 2026",
    location: "Thunder Ridge Nature Arena",
    description:
      "Avenged Sevenfold and Good Charlotte bring their 2026 North American tour to Thunder Ridge Nature Arena near Table Rock Lake.",
    website:
      "https://www.branson.com/2026-thunder-ridge-concert-lineup/",
  },
  {
    name: "FREE Summer Concert Series",
    type: "Live Music",
    date: "August 8 & September 5, 2026",
    location: "Branson Landing",
    description:
      "A free outdoor summer concert series at Branson Landing with live music and entertainment.",
    website:
      "https://www.explorebranson.com/event/free-summer-concert-series/5887/",
  },
  {
    name: "Branson Area Garden Tractor Pull",
    type: "Sporting Event",
    date: "August 22, 2026",
    location: "Stone County Event Center",
    description:
      "A family-friendly garden tractor pull hosted at the Stone County Event Center.",
    website:
      "https://business.visittablerocklake.com/events/calendar",
  },
  {
    name: "Creekside Market - Crane",
    type: "Community Market",
    date: "August 21, 2026",
    location: "Crane, Missouri",
    description:
      "An evening community market featuring local farmers, makers, and cottage-industry vendors.",
    website:
      "https://business.visittablerocklake.com/events/calendar",
  },
  {
    name: "Big Cedar Lodge Activity & Event Calendar",
    type: "Lake Resort Events",
    date: "Ongoing",
    location: "Big Cedar Lodge",
    description:
      "Seasonal events, lake cruises, family activities, dining experiences, and special events throughout the Big Cedar Lodge property.",
    website:
      "https://bigcedar.com/events/",
  },
  {
    name: "Silver Dollar City Summer Celebration",
    type: "Summer Festival",
    date: "Through August 2, 2026",
    location: "Silver Dollar City",
    description:
      "A summer festival featuring live entertainment, family activities, extended hours, and nighttime entertainment.",
    website:
      "https://www.silverdollarcity.com/theme-park/festivals26/",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-slate-950 px-6 pb-16 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            What&apos;s Happening Around the Lake
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            Events
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Find concerts, lake events, festivals, markets, tournaments, and
            seasonal activities happening around Table Rock Lake.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-950">
              Upcoming Events
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Browse upcoming events around Table Rock Lake and the surrounding
              Branson area, then go directly to the event organizer for the
              latest schedules, tickets, and details.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.name}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-500">
                  {event.type}
                </p>

                <h2 className="mt-3 text-2xl font-black text-slate-950">
                  {event.name}
                </h2>

                <p className="mt-3 font-black text-cyan-600">
                  {event.date}
                </p>

                <p className="mt-2 font-semibold text-slate-500">
                  {event.location}
                </p>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {event.description}
                </p>

                <a
                  href={event.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full rounded-2xl bg-cyan-500 px-5 py-4 text-center font-black text-white transition hover:bg-cyan-400"
                >
                  View Event
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}