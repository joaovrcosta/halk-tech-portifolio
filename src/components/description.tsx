import Image, { StaticImageData } from "next/image";
import React from "react";
import design1 from "../../public/images/design-1.png";
import design2 from "../../public/images/design-2.png";
import design3 from "../../public/images/design-3.png";
import design4 from "../../public/images/design-4.png";
import design5 from "../../public/images/design-5.png";
import design6 from "../../public/images/design-6.png";
import Link from "next/link";

interface ImageItem {
  src: StaticImageData;
  alt: string;
  title: string;
  monthly?: string;
  url: string;
}

const imageItems: ImageItem[] = [
  {
    src: design1,
    alt: "design-1",
    title: "PlayInc",
    monthly: "12k",
    url: "/projects/isadora-online",
  },
  {
    src: design2,
    alt: "design-2",
    title: "Isadora Online",
    monthly: "624k",
    url: "/projects/isadora-online",
  },
  {
    src: design3,
    alt: "design-3",
    title: "UseSnearkers",
    monthly: "54k",
    url: "/projects/use-sneakers",
  },
  {
    src: design4,
    alt: "design-4",
    title: "Easy English School",
    monthly: "5k",
    url: "/projects/isadora-online",
  },
  {
    src: design5,
    alt: "design-5",
    title: "Code Legends",
    url: "/projects/isadora-online",
  },
  {
    src: design6,
    alt: "design-6",
    title: "The Truth Lies",
    monthly: "7.1M",
    url: "/projects/the-truth-lies",
  },
];

const ImageRow = ({ images }: { images: ImageItem[] }) => (
  <div className="flex lg:flex-row flex-col items-center justify-around gap-2 px-2">
    {images.map((image, index) => (
      <div key={index} className="relative group overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          width={630}
          height={500}
          className="max-h-[500px] h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/80 bg-opacity-50 transition-opacity duration-150 ease-in-out">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-4xl text-center font-bold italic bg-gradient-to-br from-[#00C8FF] to-[#004E63] bg-clip-text text-transparent">
              {image.title}
            </span>
            <span className="text-white text-xs">
              +<span className="text-2xl">{image.monthly}</span> monthly
              visitors
            </span>
            <Link href={image?.url}>See more</Link>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ImageColumn = ({ images }: { images: ImageItem[] }) => (
  <div className="flex items-center justify-center gap-2 mt-2 flex-wrap px-2">
    {images.map((image, index) => (
      <div key={index} className="relative group overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          className="object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/80 bg-opacity-50 transition-opacity duration-150 ease-in-out">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-4xl text-center font-bold italic bg-gradient-to-br from-[#00C8FF] to-[#004E63] bg-clip-text text-transparent">
              {image.title}
            </span>
            <span className="text-white">{image.monthly} monthly visitors</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default function Description() {
  const row1Images = imageItems.slice(0, 3);
  const row2Images = imageItems.slice(3, 5);
  const row3Image = imageItems.slice(5, 6);

  return (
    <div className="flex flex-col justify-center my-4 shadow-lg">
      {/* Linha 1: Imagens em linha */}
      <ImageRow images={row1Images} />

      {/* Linha 2: Imagens em coluna */}
      <ImageColumn images={row2Images} />

      {/* Linha 3: Imagem única */}
      <div className="mt-2 px-2 relative group overflow-hidden">
        <Image
          src={row3Image[0].src}
          alt={row3Image[0].alt}
          className="object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/80 bg-opacity-50 transition-opacity duration-150 ease-in-out">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-4xl text-center font-bold italic bg-gradient-to-br from-[#00C8FF] to-[#004E63] bg-clip-text text-transparent">
              {row3Image[0].title}
            </span>
            <span className="text-white text-xs">
              +<span className="text-2xl">{row3Image[0].monthly}</span> monthly
              visitors
            </span>
            <Link href={row3Image[0].url}>See more</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
