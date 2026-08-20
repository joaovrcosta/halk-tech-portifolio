import type { StaticImageData } from "next/image";
import design6 from "../../public/images/design-6.png";
import normalIsBoringCover from "../../public/images/projects/normalisboring/captura-normal-boring-1.png";
import caterpillarCover from "../../public/images/projects/caterpillar/capa.webp";
import isadoraCover from "../../public/images/projects/isadora-online/capa.jpg";
import sidThailandCover from "../../public/images/projects/sidthailand/captura-1.png";
import vansCover from "../../public/images/projects/vans/capa.jpg";
import dashInCover from "../../public/images/projects/wills-group/capa-dashin.png";
import farmRioCover from "../../public/images/projects/farmrio/farmrio-print-1.png";
import amanHotelCover from "../../public/images/projects/amanhotel/amanhotel-1.png";
import thePodHotelCover from "../../public/images/projects/thepodhotel/thepodhotel-1.png";
import hyattCover from "../../public/images/projects/hyatt/hyatt-1.png";
import vinhaHotelCover from "../../public/images/projects/vinhahotel/vinha-hotel.png";
import motorolaCover from "../../public/images/projects/motorolacl/motorola-1.png";
import audioMusicaCover from "../../public/images/projects/audio-musica/audio-musica-1.png";
import columbiaCover from "../../public/images/projects/columbia/columbia-1.png";
import samsClubCover from "../../public/images/projects/sams-club/sams-club-1.png";

export const TRUTH_LIES_VIDEO =
  "https://assets.ign.com/videos/zencoder/2024/05/23/1920/6471e8f5-5da5-4eed-a591-bd530703e4cb-1716469774.mp4";

export type ProjectLayout = {
  span: 5 | 7;
  offset?: boolean;
  aspect: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  cover?: StaticImageData;
  video?: string;
  poster?: StaticImageData;
  fit?: "cover" | "contain";
  videoCrop?: "left" | "right";
  featured?: boolean;
  layout?: ProjectLayout;
  logo?: string;
  technologies?: string[];
  projectUrl?: string;
  screenshots?: string[];
  briefTitle?: string;
  briefDescription?: string;
};

export const projects: Project[] = [
  {
    slug: "normal-is-boring",
    title: "Normal is Boring",
    description:
      "A cinematic digital experience for a Galician residential brand, built to present architecture, lifestyle, and exclusive developments with the same quiet luxury as the homes themselves.",
    tags: ["ARCHITECTURE", "WEB DESIGN"],
    cover: normalIsBoringCover,
    featured: true,
    layout: { span: 7, aspect: "aspect-[16/10]" },
    technologies: [
      "HTML5",
      "Typescript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Lenis",
      "Framer Motion",
      "Sanity CMS",
      "WebGL",
    ],
    projectUrl: "https://normalisboring.es/",
    screenshots: [
      "/images/projects/normalisboring/captura-normal-boring-1.png",
      "/images/projects/normalisboring/captura-normal-boring-2.png",
      "/images/projects/normalisboring/captura-normal-boring-3.png",
    ],
    briefTitle: "THE BRIEF",
    briefDescription:
      "Normal is Boring is a Galician residential brand building homes that last — contemporary volumes, craftsmanship, and a quiet luxury that refuses passing trends. The website was designed to carry that attitude online: living spaces that challenge the ordinary, from La Solana in Oleiros to upcoming developments, with a cinematic presence that matches the architecture.",
  },
  {
    slug: "the-truth-lies",
    title: "The Truth Lies",
    description:
      "An immersive teaser experience for Call of Duty: Black Ops 6, blending 90s aesthetics, mystery, and interactive storytelling to build intrigue around the campaign.",
    tags: ["CREATIVE DIRECTION", "MOTION", "WEB DESIGN"],
    video: TRUTH_LIES_VIDEO,
    poster: design6,
    fit: "cover",
    videoCrop: "left",
    featured: true,
    layout: { span: 5, offset: true, aspect: "aspect-[4/5]" },
    logo: "/images/cod-logo.svg",
    technologies: [
      "HTML5",
      "Typescript",
      "React",
      "Next.js",
      "Three.js",
      "Tailwind CSS",
      "GSAP",
      "SWR",
      "Contentful CMS",
      "Web Audio API",
      "Jest & Testing Libraries",
    ],
    projectUrl: "https://www.callofduty.com/blackops6",
    screenshots: [
      "/images/projects/the-truth-lies/the-truth-lies-1.png",
      "/images/projects/the-truth-lies/the-truth-lies-2.png",
      "/images/projects/the-truth-lies/the-truth-lies-3.png",
    ],
    briefTitle: "THE BRIEF",
    briefDescription:
      "The Truth Lies is a marketing campaign and an immersive interactive experience developed for the Call of Duty: Black Ops Cold War universe. The website combines an engaging narrative with realistic graphics, providing visitors with a mysterious and tense atmosphere. Through clues and videos, the site takes players on a journey to uncover hidden secrets related to the game's storyline.",
  },
  {
    slug: "isadora-online",
    title: "Isadora Online",
    description:
      "A refined e-commerce platform for Argentine women's fashion, combining elegance, performance, and a seamless shopping experience for a modern luxury audience.",
    tags: ["E-COMMERCE", "VISUAL IDENTITY", "WEB DESIGN"],
    cover: isadoraCover,
    featured: true,
    layout: { span: 5, aspect: "aspect-[4/5]" },
    logo: "/images/isadora-logo.svg",
    technologies: [
      "HTML5",
      "Typescript",
      "React",
      "Next.js",
      "Shadcn UI",
      "Radix",
      "Shopify Storefront",
      "Contentful CMS",
      "Tailwind CSS",
      "Redux",
      "Jest",
    ],
    projectUrl: "https://ar.isadoraonline.com/",
    screenshots: [
      "/images/projects/isadora-online/isadora-print-1.png",
      "/images/projects/isadora-online/isadora-print-2.png",
      "/images/projects/isadora-online/isadora-print-3.png",
    ],
    briefTitle: "THE BRIEF",
    briefDescription:
      "Isadora Online is a store dedicated to luxury Argentine fashion, bringing sophistication, authenticity, and elegance to women seeking exclusive pieces. With a refined curation, the brand blends tradition and contemporary trends, offering clothing and accessories that reflect the unique style and charm of Argentine fashion.",
  },
  {
    slug: "farmrio",
    title: "Farm Rio",
    description:
      "A vibrant e-commerce experience for Farm Rio, built to turn tropical prints, seasonal drops, and Brazilian joy into a conversion-focused shopping journey.",
    tags: ["E-COMMERCE", "PRODUCT UX", "WEB DESIGN"],
    cover: farmRioCover,
    featured: false,
    layout: { span: 7, aspect: "aspect-[16/10]" },
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "VTEX IO",
      "GraphQL",
      "Algolia",
      "Sentry",
      "Jest",
    ],
    projectUrl: "https://www.farmrio.com.br/",
    screenshots: [
      "/images/projects/farmrio/farmrio-print-1.png",
      "/images/projects/farmrio/farmrio-print-2.png",
      "/images/projects/farmrio/farmrio-print-3.png",
      "/images/projects/farmrio/farmrio-print-4.png",
    ],
    briefTitle: "THE BRIEF",
    briefDescription:
      "Farm Rio is a Brazilian fashion house known for tropical color, joyful prints, and a unmistakable Carioca spirit. The store was designed to carry that energy into a digital experience — from campaign-led hero moments and new-in drops to a clear path from product discovery to checkout.",
  },
  {
    slug: "vans",
    title: "Vans",
    description:
      "A high-energy e-commerce experience for Vans Chile, built to turn street culture, product discovery, and seasonal campaigns into a conversion-focused shopping journey.",
    tags: ["E-COMMERCE", "PRODUCT UX", "WEB DESIGN"],
    cover: vansCover,
    featured: true,
    layout: { span: 7, offset: true, aspect: "aspect-[16/10]" },
    logo: "/vans-logo.svg",
    technologies: [
      "React",
      "Next.js",
      "Javascript",
      "Tailwind CSS",
      "Shopify Storefront",
      "Sanity CMS",
      "Styled Components",
      "GraphQL",
      "SEO",
      "Sentry",
      "Algolia",
      "Zustand",
      "Jest",
    ],
    projectUrl: "https://www.vans.cl/",
    screenshots: [
      "/images/projects/vans/captura-1.png",
      "/images/projects/vans/captura-2.png",
    ],
    briefTitle: "THE BRIEF",
    briefDescription:
      "Vans is an iconic streetwear and footwear brand rooted in skate, BMX, and youth culture. The Chile store was designed to translate that attitude into a digital experience — from campaign-led hero moments to a frictionless path from product discovery to checkout.",
  },
  {
    slug: "sidthailand",
    title: "SID Thailand",
    description:
      "A premium digital experience for a Phuket real estate group, built to present developments, lifestyle, and investment opportunities with cinematic clarity.",
    tags: ["ARCHITECTURE", "BRAND"],
    cover: sidThailandCover,
    featured: true,
    layout: { span: 7, aspect: "aspect-[16/10]" },
    projectUrl: "https://sidthailand.com/",
    screenshots: ["/images/projects/sidthailand/captura-1.png"],
    briefTitle: "THE BRIEF",
    briefDescription:
      "SID Thailand is a development company shaping residential and commercial real estate in Phuket. The website was designed to communicate a 360° property offering — from landmark districts to investment journeys — with a cinematic, high-end presence that matches the ambition of building the future of the island.",
  },
  {
    slug: "caterpillar",
    title: "Caterpillar",
    description:
      "A rugged e-commerce experience for CAT Chile, built to turn workwear heritage, seasonal campaigns, and product discovery into a conversion-focused shopping journey.",
    tags: ["E-COMMERCE", "PRODUCT UX", "WEB DESIGN"],
    cover: caterpillarCover,
    featured: true,
    layout: { span: 5, offset: true, aspect: "aspect-[4/5]" },
    logo: "/cat-logo.svg",
    projectUrl: "https://www.shopcaterpillar.cl/",
    screenshots: [
      "/images/projects/caterpillar/captura-cat-1.png",
      "/images/projects/caterpillar/captura-cat-2.png",
      "/images/projects/caterpillar/captura-cat-3.png",
    ],
    briefTitle: "THE BRIEF",
    briefDescription:
      "Caterpillar is a global workwear and footwear brand known for toughness, utility, and an unmistakable yellow-and-black identity. The Chile store was designed to carry that industrial attitude into a digital experience — from campaign-led hero moments to a clear path from product discovery to checkout.",
  },
  {
    slug: "wills-group",
    title: "Dash In",
    description:
      "A convenience-retail experience for Dash In, built to turn everyday stops — food, fuel, car wash, and rewards — into a campaign-led digital journey.",
    tags: ["RESTAURANT", "BRAND"],
    cover: dashInCover,
    featured: false,
    layout: { span: 7, aspect: "aspect-[16/10]" },
    projectUrl: "https://www.dashin.com/",
    screenshots: [
      "/images/projects/wills-group/capa-dashin.png",
      "/images/projects/wills-group/laptop-img.png",
      "/images/projects/wills-group/smartphone-img.jpg",
      "/images/projects/wills-group/website-img.png",
    ],
    briefTitle: "THE BRIEF",
    briefDescription:
      "Dash In is the Wills Group convenience brand — fresh food, fuel, car wash, and rewards, built around the idea of taking on the day. The website was designed to make locations, menus, and everyday errands feel brighter and easier, from all-day breakfast to finding the nearest store.",
  },
  {
    slug: "aman-hotel",
    title: "Aman New York",
    description:
      "A quiet-luxury digital experience for Aman New York, built to present rooms, wellness, dining, and residences with the same stillness as the hotel itself.",
    tags: ["HOTELS", "BRAND"],
    cover: amanHotelCover,
    featured: false,
    layout: { span: 7, aspect: "aspect-[16/10]" },
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Contentful CMS",
      "GSAP",
      "Lenis",
    ],
    projectUrl: "https://www.aman.com/hotels-resorts/aman-new-york",
    screenshots: [
      "/images/projects/amanhotel/amanhotel-1.png",
      "/images/projects/amanhotel/amanhotel-2.png",
      "/images/projects/amanhotel/amanhotel-3.png",
      "/images/projects/amanhotel/amanhotel-4.png",
      "/images/projects/amanhotel/amanhotel-5.png",
    ],
    briefTitle: "THE BRIEF",
    briefDescription:
      "Aman New York is a sanctuary above Crown Building — residences, wellness, dining, and a jazz club looking out over Manhattan. The website was designed to carry that quiet luxury online: gallery, accommodation, and reservation journeys with the same measured pace as the hotel.",
  },
  {
    slug: "the-pod-hotel",
    title: "The Pod Hotel",
    description:
      "A playful booking experience for Pod Hotels, built to turn compact NYC stays, neighborhood energy, and affordable rooms into a clear path from discovery to reserve.",
    tags: ["HOTELS", "PRODUCT UX"],
    cover: thePodHotelCover,
    featured: false,
    layout: { span: 7, aspect: "aspect-[16/10]" },
    technologies: [
      "React",
      "Next.js",
      "Javascript",
      "Tailwind CSS",
      "Algolia",
      "Mapbox",
      "Sentry",
    ],
    projectUrl: "https://www.thepodhotel.com/",
    screenshots: [
      "/images/projects/thepodhotel/thepodhotel-1.png",
      "/images/projects/thepodhotel/thepodhotel-2.png",
      "/images/projects/thepodhotel/thepodhotel-3.png",
      "/images/projects/thepodhotel/thepodhotel-4.png",
    ],
    briefTitle: "THE BRIEF",
    briefDescription:
      "Pod Hotels reimagines New York stays as compact, social, and affordable — from Pod 39 in Murray Hill to a buzzing lobby built for urban nomads. The site was designed to make rooms, neighborhoods, and booking feel immediate: explore Midtown, unlock an offer, and reserve without friction.",
  },
  {
    slug: "hyatt",
    title: "Hyatt — The Chatwal",
    description:
      "A World of Hyatt booking experience for The Chatwal New York, built to present landmark architecture, The Lambs Club, and a theater-district stay with a clear path to reserve.",
    tags: ["HOTELS", "BRAND"],
    cover: hyattCover,
    featured: false,
    layout: { span: 7, aspect: "aspect-[16/10]" },
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Contentful CMS",
      "Algolia",
    ],
    projectUrl:
      "https://www.hyatt.com/the-unbound-collection-by-hyatt/en-US/nyctu-the-chatwal-new-york",
    screenshots: [
      "/images/projects/hyatt/hyatt-1.png",
      "/images/projects/hyatt/hyatt-2.png",
      "/images/projects/hyatt/hyatt-3.png",
      "/images/projects/hyatt/hyatt-4.png",
    ],
    briefTitle: "THE BRIEF",
    briefDescription:
      "The Chatwal is an Unbound Collection by Hyatt hotel in a restored New York landmark — red awnings, The Lambs Club, and a stay built around theater-district glamour. The website was designed to carry that World of Hyatt presence online: rooms, dining, and a booking journey that feels as considered as the hotel.",
  },
  {
    slug: "vinha-hotel",
    title: "Vinha Boutique Hotel",
    description:
      "A cinematic digital experience for Vinha Boutique Hotel, built to present comfort, tastes, wellness, and unforgettable moments overlooking the Douro.",
    tags: ["HOTELS", "BRAND"],
    cover: vinhaHotelCover,
    featured: false,
    layout: { span: 7, aspect: "aspect-[16/10]" },
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "GSAP",
      "Lenis",
      "Sanity CMS",
    ],
    projectUrl: "https://www.vinhaboutiquehotel.com/",
    screenshots: [
      "/images/projects/vinhahotel/vinha-hotel.png",
      "/images/projects/vinhahotel/vinha-hotel-1.png",
      "/images/projects/vinhahotel/vinha-hotel-2.png",
      "/images/projects/vinhahotel/vinha-hotel-3.png",
      "/images/projects/vinhahotel/vinha-hotel-4.png",
    ],
    briefTitle: "THE BRIEF",
    briefDescription:
      "Vinha Boutique Hotel is a stay of quiet luxury by the Douro — pool, garden, and a pace built around comfort, tastes, indulgence, and events. The website was designed to carry that atmosphere online: atmospheric photography, a clear reservation flow, and a booking journey as considered as the hotel itself.",
  },
  {
    slug: "motorola",
    title: "Motorola",
    description:
      "A campaign-led e-commerce experience for Motorola Chile, built to turn smartphones, accessories, and partnerships like Formula 1 into a clear path from discovery to checkout.",
    tags: ["E-COMMERCE", "PRODUCT UX"],
    cover: motorolaCover,
    featured: false,
    layout: { span: 7, aspect: "aspect-[16/10]" },
    logo: "/motorola-logo.svg",
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "VTEX IO",
      "Algolia",
      "GraphQL",
      "Sentry",
    ],
    projectUrl: "https://www.motorola.cl/",
    screenshots: [
      "/images/projects/motorolacl/motorola-1.png",
      "/images/projects/motorolacl/motorola-2.png",
      "/images/projects/motorolacl/motorola-3.png",
      "/images/projects/motorolacl/motorola-4.png",
      "/images/projects/motorolacl/motorola-5.png",
    ],
    briefTitle: "THE BRIEF",
    briefDescription:
      "Motorola Chile is the official store for Razr, Edge, and Signature — plus accessories, motofertas, and campaign moments like Formula 1. The site was designed to make product discovery, promotions, and checkout feel as sharp as the hardware, from free shipping nationwide to interest-free installments.",
  },
  {
    slug: "audio-musica",
    title: "AudioMusica",
    description:
      "A high-volume e-commerce experience for AudioMusica, built to turn instruments, pro audio, and seasonal offers into a store-led shopping journey across Chile.",
    tags: ["E-COMMERCE", "PRODUCT UX"],
    cover: audioMusicaCover,
    featured: false,
    layout: { span: 7, aspect: "aspect-[16/10]" },
    logo: "/audio-musica-logo.svg",
    technologies: [
      "React",
      "Next.js",
      "Javascript",
      "Tailwind CSS",
      "VTEX IO",
      "Algolia",
      "Sentry",
    ],
    projectUrl: "https://www.audiomusica.com/",
    screenshots: [
      "/images/projects/audio-musica/audio-musica-1.png",
      "/images/projects/audio-musica/audio-musica-2.png",
      "/images/projects/audio-musica/audio-musica-3.png",
      "/images/projects/audio-musica/audio-musica-4.png",
    ],
    briefTitle: "THE BRIEF",
    briefDescription:
      "AudioMusica is Chile’s go-to destination for instruments, pro audio, and accessories — from academy and club programs to openbox deals. The store was designed to make browsing, financing, and pickup feel immediate: search, stores, and a checkout built for high-intent shoppers.",
  },
  {
    slug: "columbia",
    title: "Columbia",
    description:
      "An outdoor e-commerce experience for Columbia Chile, built to turn technical apparel, footwear, and seasonal campaigns into a conversion-focused shopping journey.",
    tags: ["E-COMMERCE", "PRODUCT UX"],
    cover: columbiaCover,
    featured: false,
    layout: { span: 7, aspect: "aspect-[16/10]" },
    logo: "/columbia-svg.svg",
    technologies: [
      "React",
      "Next.js",
      "Javascript",
      "Tailwind CSS",
      "Shopify Storefront",
      "Algolia",
      "Sentry",
    ],
    projectUrl: "https://www.columbia.cl/",
    screenshots: [
      "/images/projects/columbia/columbia-1.png",
      "/images/projects/columbia/columbia-2.png",
      "/images/projects/columbia/columbia-3.png",
      "/images/projects/columbia/columbia-4.png",
      "/images/projects/columbia/columbia-5.png",
    ],
    briefTitle: "THE BRIEF",
    briefDescription:
      "Columbia is an outdoor brand built around weather-ready apparel and footwear. The Chile store was designed to carry that attitude online — from campaign-led heroes like Titanium Dry Hike to a clear path from new arrivals and winter sale to checkout.",
  },
  {
    slug: "sams-club",
    title: "Sam's Club",
    description:
      "A membership e-commerce experience for Sam's Club Brazil, built to turn bulk grocery, Member’s Mark, and flash promotions into a high-intent shopping journey.",
    tags: ["E-COMMERCE", "PRODUCT UX"],
    cover: samsClubCover,
    featured: false,
    layout: { span: 7, aspect: "aspect-[16/10]" },
    logo: "/sams-club-logo.svg",
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "VTEX IO",
      "Algolia",
      "GraphQL",
      "Sentry",
    ],
    projectUrl: "https://www.samsclub.com.br/",
    screenshots: [
      "/images/projects/sams-club/sams-club-1.png",
      "/images/projects/sams-club/sams-club-2.png",
      "/images/projects/sams-club/sams-club-3.png",
    ],
    briefTitle: "THE BRIEF",
    briefDescription:
      "Sam's Club Brazil is a membership warehouse store — groceries, imports, Member’s Mark, and club benefits, built around volume and value. The website was designed to make departments, CEP-based assortment, and flash campaigns like 48 horas imperdíveis feel immediate, from search to checkout.",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const workFilters = [
  { id: "all", label: "All" },
  { id: "hotels", label: "Hotels" },
  { id: "architecture", label: "Architecture" },
  { id: "restaurant", label: "Restaurant" },
  { id: "e-commerce", label: "E-commerce" },
] as const;

export type WorkFilterId = (typeof workFilters)[number]["id"];

const FILTER_TAG_MAP: Record<Exclude<WorkFilterId, "all">, string[]> = {
  hotels: ["HOTELS"],
  architecture: ["ARCHITECTURE"],
  restaurant: ["RESTAURANT"],
  "e-commerce": ["E-COMMERCE"],
};

export function parseWorkFilterId(value: string | null | undefined): WorkFilterId {
  if (value && workFilters.some((filter) => filter.id === value)) {
    return value as WorkFilterId;
  }
  return "all";
}

export function projectMatchesFilter(project: Project, filterId: WorkFilterId) {
  if (filterId === "all") return true;
  return project.tags.some((tag) => FILTER_TAG_MAP[filterId].includes(tag));
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs() {
  return projects.map((project) => project.slug);
}
