import Image from "next/image";
import Link from "next/link";

type CategoryHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export default function CategoryHero({
  eyebrow,
  title,
  description,
  image,
}: CategoryHeroProps) {
  return (
    <section className="relative min-h-[430px] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />

      <div className="relative mx-auto flex min-h-[430px] max-w-7xl flex-col justify-between px-6 pb-12 pt-8 text-white">
        <Link
          href="/"
          className="w-fit rounded-full border border-white/40 bg-black/30 px-5 py-3 text-sm font-bold backdrop-blur-md transition hover:bg-white hover:text-slate-950"
        >
          ← Back to LakeDayz
        </Link>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
            {eyebrow}
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}