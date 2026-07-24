import CategoryPage from "../components/CategoryPage";
import { boatRentals } from "../lib/boatRentals";

export default function BoatRentalsPage() {
  return (
    <CategoryPage
      eyebrow="Get on the Water"
      title="Boat Rentals"
      description="Find boats, pontoons, tritoons, personal watercraft, and houseboats available around Table Rock Lake."
      heroImage="/boatrental.jpg"
      sectionEyebrow="Explore the Lake"
      sectionTitle="Rentals on Table Rock Lake"
      sectionDescription="Browse rental options around the lake and visit each operator to view current boats, pricing, availability, and booking options."
      listings={boatRentals}
      buttonText="Book / Visit Website"
    />
  );
}