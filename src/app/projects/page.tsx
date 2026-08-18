import type { Metadata } from "next";
import { Suspense } from "react";
import { WorkCatalog } from "@/components/work-catalog";

export const metadata: Metadata = {
  title: "Work | Halk Soluctions",
  description:
    "A catalog of digital experiences, brand platforms, and e-commerce systems by Halk.",
};

export default function ProjectsPage() {
  return (
    <Suspense
      fallback={
        <section
          data-header-theme="dark"
          className="min-h-screen bg-[#030303]"
        />
      }
    >
      <WorkCatalog />
    </Suspense>
  );
}
