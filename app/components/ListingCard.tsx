import Image from "next/image";
import type { ReactNode } from "react";

type ListingCardProps = {
  image: string;
  imageAlt: string;
  type: string;
  name: string;
  location: string;
  description: string;
  website: string;
  buttonText: string;
  extraContent?: ReactNode;
};

export default function ListingCard({
  image,
  imageAlt,
  type,
  name,
  location,
  description,
  website,
  buttonText,
  extraContent,
}: ListingCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
          {type}
        </p>

        <h2 className="mt-3 text-2xl font-black text-slate-950">{name}</h2>

        <p className="mt-2 font-semibold text-slate-500">{location}</p>

        <p className="mt-4 flex-1 leading-7 text-slate-600">{description}</p>

        {extraContent}

        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 block w-full rounded-2xl bg-cyan-500 px-5 py-4 text-center font-black text-white transition hover:bg-cyan-400"
        >
          {buttonText}
        </a>
      </div>
    </article>
  );
}