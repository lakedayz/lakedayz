const categories = [
  {
    name: "Boat Rentals",
    image: "/boatrental.jpg",
    href: "/boat-rentals",
  },
  {
    name: "Marinas",
    image: "/dock.jpg",
    href: "/marinas",
  },
  {
    name: "Restaurants",
    image: "/bell.jpg",
    href: "/restaurants",
  },
  {
    name: "Fishing",
    image: "/Fishing_reel.jpg",
    href: "/fishing",
  },
  {
    name: "Events",
    image: "/map.jpg",
    href: "events",
  },
  {
    name: "Fuel Docks",
    image: "/gas.jpg",
    href: "fuel-docks",
  },
];

export default function Categories() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-slate-900">
          Explore LakeDayz
        </h2>

        <p className="mb-10 mt-3 text-slate-600">
          Everything you need for the perfect day on the water.
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="relative min-h-[220px] overflow-hidden rounded-3xl bg-cover bg-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              style={{
                backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.35), rgba(2, 6, 23, 0.65)), url(${category.image})`,
              }}
            >
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">
                  {category.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}