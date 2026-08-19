import type { Metadata } from "next";
import type { Project } from "@/lib/projects-data";

export const siteUrl = "https://www.halk.solutions";
export const siteName = "Halk Solutions";
export const defaultTitle =
  "Halk Solutions | Digital Experiences that Convert";
export const defaultDescription =
  "You feel the brand, we build the experience. Halk Solutions designs digital products, brand platforms, and e-commerce systems that convert visitors into customers.";

export const workTitle = "Work";
export const workDescription =
  "A catalog of digital experiences, brand platforms, and e-commerce systems by Halk Solutions — built to convert and stay memorable.";

export const sameAs = [
  "https://x.com/halksolutions",
  "https://www.linkedin.com/company/halksolutions",
  "https://instagram.com/halksolutions",
] as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return siteUrl;
  return `${siteUrl}${normalized}`;
}

export function getProjectOgImage(project: Project) {
  const src =
    project.cover?.src ?? project.poster?.src ?? project.screenshots?.[0];

  if (!src) return undefined;

  return absoluteUrl(src);
}

export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: absoluteUrl("/halk.svg"),
        sameAs: [...sameAs],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: defaultDescription,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en",
      },
    ],
  };
}

export function creativeWorkJsonLd(project: Project) {
  const image = getProjectOgImage(project);

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: absoluteUrl(`/projects/${project.slug}`),
    ...(image ? { image } : {}),
    creator: { "@id": `${siteUrl}/#organization` },
    keywords: project.tags.join(", "),
    inLanguage: "en",
  };
}

export const defaultOpenGraph = {
  type: "website",
  locale: "en_US",
  url: siteUrl,
  siteName,
  title: defaultTitle,
  description: defaultDescription,
} satisfies Metadata["openGraph"];

export const defaultTwitter = {
  card: "summary_large_image",
  title: defaultTitle,
  description: defaultDescription,
} satisfies Metadata["twitter"];
