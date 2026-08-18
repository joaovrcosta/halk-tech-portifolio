import type { StaticImageData } from "next/image";
import design1 from "../../public/projects/projeto-img-1.png";
import design6 from "../../public/images/design-6.png";
import caterpillarCover from "../../public/images/projects/caterpillar/capa.webp";
import isadoraCover from "../../public/images/projects/isadora-online/capa.jpg";
import sidThailandCover from "../../public/images/projects/sidthailand/captura-1.png";
import vansCover from "../../public/images/projects/vans/capa.jpg";
import dashInCover from "../../public/images/projects/wills-group/capa-dashin.png";

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
      "A bold digital experience built to challenge conventions and turn brand storytelling into something memorable, expressive, and impossible to ignore.",
    tags: ["CREATIVE DIRECTION", "WEB DESIGN", "MOTION"],
    cover: design1,
    featured: true,
    layout: { span: 7, aspect: "aspect-[16/10]" },
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
    tags: ["WEB DESIGN", "BRAND"],
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
    tags: ["WEB DESIGN", "BRAND"],
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
];

export const featuredProjects = projects.filter((project) => project.featured);

export const workFilters = [
  { id: "all", label: "All" },
  { id: "e-commerce", label: "E-commerce" },
  { id: "web-design", label: "Web Design" },
  { id: "brand", label: "Brand" },
  { id: "motion", label: "Motion" },
  { id: "product", label: "Product" },
] as const;

export type WorkFilterId = (typeof workFilters)[number]["id"];

const FILTER_TAG_MAP: Record<Exclude<WorkFilterId, "all">, string[]> = {
  "e-commerce": ["E-COMMERCE"],
  "web-design": ["WEB DESIGN"],
  brand: ["BRAND", "VISUAL IDENTITY", "CREATIVE DIRECTION"],
  motion: ["MOTION"],
  product: ["PRODUCT UX"],
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
