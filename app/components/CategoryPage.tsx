import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import CategoryHero from "./CategoryHero";
import ListingCard from "./ListingCard";

export type CategoryListing = {
  name: string;
  type: string;
  location: string;
  description: string;
  website: string;
  image: string;
};

type CategoryPageProps<T extends CategoryListing> = {
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;

  sectionEyebrow?: string;
  sectionTitle: string;
  sectionDescription: string;

  listings: T[];
  buttonText: string;

  renderExtraContent?: (listing: T) => ReactNode;
};

export default function CategoryPage<T extends CategoryListing>({
  eyebrow,
  title,
  description,
  heroImage,
  sectionEyebrow = "Explore Table Rock Lake",
  sectionTitle,
  sectionDescription,
  listings,
  buttonText,
  renderExtraContent,
}: CategoryPageProps<T>) {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <CategoryHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        image={heroImage}
      />

      <section className="px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-600">
              {sectionEyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              {sectionTitle}
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              {sectionDescription}
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing) => (
              <ListingCard
                key={listing.name}
                image={listing.image}
                imageAlt={`${listing.name} near Table Rock Lake`}
                type={listing.type}
                name={listing.name}
                location={listing.location}
                description={listing.description}
                website={listing.website}
                buttonText={buttonText}
                extraContent={
                  renderExtraContent
                    ? renderExtraContent(listing)
                    : undefined
                }
              />
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              href="/"
              className="rounded-full bg-slate-950 px-7 py-4 font-black text-white transition hover:bg-cyan-500"
            >
              ← Back to LakeDayz
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}