import type { StaticImageData } from "next/image";
import design1 from "../../public/projects/projeto-img-1.png";
import design2 from "../../public/images/design-2.png";
import design3 from "../../public/images/design-3.png";
import design4 from "../../public/images/design-4.png";
import design5 from "../../public/images/design-5.png";
import design6 from "../../public/images/design-6.png";
import willsCover from "../../public/images/projects/wills-group/website-img.png";

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
    cover: design2,
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
    slug: "use-sneakers",
    title: "UseSneakers",
    description:
      "A sneaker marketplace connecting buyers and sellers with a premium shopping flow designed for discovery, trust, and conversion at scale.",
    tags: ["E-COMMERCE", "PRODUCT UX", "WEB DESIGN"],
    cover: design3,
    featured: true,
    layout: { span: 7, offset: true, aspect: "aspect-[16/10]" },
    logo: "/images/use-sneakers-logo.svg",
    technologies: [
      "React",
      "Next.js",
      "Javascript",
      "Tailwind CSS",
      "Shopify Storefront",
      "Sanity CMS",
      "Styled Components",
      "GraphQL",
      "Prisma",
      "NextAuth",
      "SEO",
      "Sentry",
      "Algolia",
      "Zustand",
      "Jest",
    ],
    projectUrl: "https://www.modausesneaker.com/shop",
    screenshots: [
      "/images/projects/use-sneakers/use-sneakers-print-1.png",
      "/images/projects/use-sneakers/use-sneakers-print-2.png",
      "/images/projects/use-sneakers/use-sneakers-print-3.png",
    ],
    briefTitle: "THE BRIEF",
    briefDescription:
      "UseSneakers is a brand specialized in the curation and sale of exclusive and rare sneakers, focusing on serving both enthusiasts and discerning collectors. More than just an e-commerce platform, UseSneakers is a true hub for those seeking unique pieces that combine style, authenticity, and cultural value.",
  },
  {
    slug: "easy-english-school",
    title: "Easy English School",
    description:
      "A clear and approachable website for an English school, focused on guiding students through programs with confidence, clarity, and strong visual hierarchy.",
    tags: ["WEB DESIGN", "BRAND"],
    cover: design4,
    featured: true,
    layout: { span: 7, aspect: "aspect-[16/10]" },
  },
  {
    slug: "code-legends",
    title: "Code Legends",
    description:
      "A product experience crafted for a developer-focused brand, balancing technical credibility with a bold visual identity built to stand out.",
    tags: ["PRODUCT UX", "VISUAL IDENTITY", "WEB DESIGN"],
    cover: design5,
    featured: true,
    layout: { span: 5, offset: true, aspect: "aspect-[4/5]" },
  },
  {
    slug: "wills-group",
    title: "Wills Group",
    description:
      "The Dash In official website for The Wills Group features a modern interface and a campaign where users discover premium food rewards, emphasizing customer convenience.",
    tags: ["WEB DESIGN", "BRAND"],
    cover: willsCover,
    featured: false,
    screenshots: [
      "/images/projects/wills-group/laptop-img.png",
      "/images/projects/wills-group/smartphone-img.jpg",
      "/images/projects/wills-group/website-img.png",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs() {
  return projects.map((project) => project.slug);
}
