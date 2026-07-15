import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/CategoryCards";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
    </main>
  );
}