import type { Metadata } from "next";
import { Suspense } from "react";
import { WorkCatalog } from "@/components/work-catalog";
import { siteName, workDescription, workTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: workTitle,
  description: workDescription,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: `${workTitle} | ${siteName}`,
    description: workDescription,
    url: "/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${workTitle} | ${siteName}`,
    description: workDescription,
  },
};

export default function ProjectsPage() {
  return (
    <Suspense
      fallback={
        <section
          data-header-theme="dark"
          className="min-h-screen bg-[#0e0e0e]"
        />
      }
    >
      <WorkCatalog />
    </Suspense>
  );
}
