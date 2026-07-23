const categories = [
  {
    name: "STAY",
    image: "/stays.jpeg",
    href: "/stays",
  },
  {
    name: "RENT",
    image: "/boatrental.jpg",
    href: "/boat-rentals",
  },
  {
    name: "EAT",
    image: "/bell.jpg",
    href: "/restaurants",
  },
  {
    name: "EVENTS",
    image: "/map.jpg",
    href: "/events",
  },
  {
    name: "EXPLORE",
    image: "/hero1.jpg",
    href: "/businesses",
  },
  {
    name: "MARINAS",
    image: "/dock.jpg",
    href: "/marinas",
  },
  {
    name: "FISHING",
    image: "/Fishing_reel.jpg",
    href: "/fishing",
  },
  {
    name: "FUEL DOCKS",
    image: "/gas.jpg",
    href: "/fuel-docks",
  },
  {
    name: "RV PARKS",
    image: "/rvpark.jpeg",
    href: "/rv-parks",
  },
];

export default function Categories() {
  return (
    <section className="bg-slate-950 px-4 pb-16 pt-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-3 gap-3 sm:gap-5">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="group relative min-h-[170px] overflow-hidden rounded-3xl border border-white/40 bg-cover bg-center shadow-xl transition hover:-translate-y-1 hover:shadow-2xl sm:min-h-[220px]"
              style={{
                backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.12), rgba(2, 6, 23, 0.82)), url(${category.image})`,
              }}
            >
              <div className="absolute inset-0 flex items-end justify-center p-3">
                <h3 className="text-center text-sm font-black tracking-wide text-white sm:text-xl">
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