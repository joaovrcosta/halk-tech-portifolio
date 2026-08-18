const brands = [
  { src: "/audio-musica-logo.svg", alt: "Áudio e Música", width: 244, height: 29 },
  { src: "/steve-madden-logo.svg", alt: "Steve Madden", width: 116, height: 18 },
  { src: "/columbia-svg.svg", alt: "Columbia", width: 160, height: 29 },
  { src: "/sams-club-logo.svg", alt: "Sam's Club", width: 160, height: 27 },
  { src: "/motorola-logo.svg", alt: "Motorola", width: 52, height: 52 },
  { src: "/activision-blizzard.svg", alt: "Activision Blizzard", width: 212, height: 48 },
  { src: "/billabong.svg", alt: "Billabong", width: 63, height: 43 },
  { src: "/cat-logo.svg", alt: "CAT", width: 41, height: 31 },
  { src: "/vans-logo.svg", alt: "Vans", width: 69, height: 24 },
] as const;

function BrandRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-14 pr-14 md:gap-20 md:pr-20"
    >
      {brands.map((brand) => (
        <li key={brand.alt} className="flex h-10 shrink-0 items-center md:h-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={brand.src}
            alt={ariaHidden ? "" : brand.alt}
            width={brand.width}
            height={brand.height}
            className="h-7 w-auto max-h-full object-contain opacity-80 md:h-8"
          />
        </li>
      ))}
    </ul>
  );
}

export function BrandMarquee() {
  return (
    <section
      aria-label="Brands we work with"
      className="overflow-hidden bg-[#030303] py-10 md:py-14"
    >
      <div
        className="overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, rgb(0 0 0 / 0.2) 4%, rgb(0 0 0 / 0.7) 9%, black 14%, black 86%, rgb(0 0 0 / 0.7) 91%, rgb(0 0 0 / 0.2) 96%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgb(0 0 0 / 0.2) 4%, rgb(0 0 0 / 0.7) 9%, black 14%, black 86%, rgb(0 0 0 / 0.7) 91%, rgb(0 0 0 / 0.2) 96%, transparent 100%)",
        }}
      >
        <div className="flex w-max animate-brand-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          <BrandRow />
          <BrandRow ariaHidden />
        </div>
      </div>
    </section>
  );
}
