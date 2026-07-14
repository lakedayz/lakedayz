export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">

        <h1 className="text-2xl font-bold text-white">
          <span className="text-white">LAKE</span>
          <span className="text-cyan-400">DAYZ</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-white font-medium">
          <a href="#">Explore Lakes</a>
          <a href="#">Categories</a>
          <a href="#">Businesses</a>
          <a href="#">Events</a>
        </nav>

        <button className="rounded-full bg-cyan-500 px-5 py-2 text-white font-semibold hover:bg-cyan-400 transition">
          List Your Business
        </button>

      </div>
    </header>
  );
}
