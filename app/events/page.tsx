import Navbar from "../components/Navbar";

const events = [
  {
    name: "Live Music",
    description:
      "Find live music, waterfront performances, and local entertainment happening around the lake.",
  },
  {
    name: "Fishing Tournaments",
    description:
      "Explore upcoming fishing tournaments and competitive events for anglers of all levels.",
  },
  {
    name: "Fireworks",
    description:
      "Find holiday fireworks shows and special lakefront celebrations.",
  },
  {
    name: "Poker Runs",
    description:
      "Discover upcoming poker runs, boating events, and organized lake activities.",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            LakeDayz Event Directory
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            EVENTS
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Find live music, fishing tournaments, fireworks, poker runs, and
            other events happening around the lake.
          </p>

          <div className="mt-8 flex max-w-2xl rounded-2xl bg-white p-2">
            <input
              type="text"
              placeholder="Search events..."
              className="min-w-0 flex-1 px-4 text-slate-900 outline-none"
            />

            <button className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-white">
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <article
              key={event.name}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm font-bold text-cyan-600">
                Event
              </p>

              <h2 className="mt-3 text-2xl font-black text-slate-900">
                {event.name}
              </h2>

              <p className="mt-4 text-slate-600">
                {event.description}
              </p>

              <button className="mt-6 font-bold text-cyan-600">
                View events →
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}