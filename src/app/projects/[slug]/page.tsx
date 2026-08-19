import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseStudy from "@/components/project-case-study";
import { JsonLd } from "@/components/json-ld";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects-data";
import {
  creativeWorkJsonLd,
  getProjectOgImage,
  siteName,
} from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `/projects/${project.slug}`;
  const ogImage = getProjectOgImage(project);
  const title = project.title;
  const description = project.description;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: canonical,
      type: "article",
      ...(ogImage
        ? {
            images: [
              {
                url: ogImage,
                alt: `${title} — project cover`,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <JsonLd data={creativeWorkJsonLd(project)} />
      <ProjectCaseStudy slug={slug} />
    </>
  );
}
