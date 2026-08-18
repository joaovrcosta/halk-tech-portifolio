"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useRef, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  parseWorkFilterId,
  projects,
  projectMatchesFilter,
  type Project,
} from "@/lib/projects-data";
import { useProjectTransition } from "@/components/project-transition";
import { cn } from "@/lib/utils";

function CatalogCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const mediaRef = useRef<HTMLDivElement>(null);
  const { openProject } = useProjectTransition();
  const href = `/projects/${project.slug}`;
  const objectClass =
    project.fit === "contain" ? "object-contain" : "object-cover";

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    if (!mediaRef.current) return;

    event.preventDefault();
    openProject({
      slug: project.slug,
      href,
      mediaElement: mediaRef.current,
      imageSrc: project.cover?.src,
      videoSrc: project.video,
      posterSrc: project.poster?.src,
      objectFit: project.fit === "contain" ? "contain" : "cover",
    });
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group min-w-0"
    >
      <Link
        href={href}
        onClick={handleClick}
        aria-label={`Open ${project.title}`}
        className="block"
      >
        <div
          ref={mediaRef}
          className="relative aspect-[16/10] overflow-hidden bg-[#111]"
        >
          {project.video ? (
            <video
              src={project.video}
              poster={project.poster?.src}
              autoPlay
              muted
              loop
              playsInline
              className={cn(
                "absolute top-0 h-full transition-transform duration-700 ease-out group-hover:scale-[1.04]",
                objectClass,
                project.videoCrop
                  ? `w-[200%] max-w-none ${project.videoCrop === "right" ? "right-0" : "left-0"}`
                  : "inset-0 w-full"
              )}
            />
          ) : project.cover ? (
            <Image
              src={project.cover}
              alt={project.title}
              fill
              quality={100}
              className={cn(
                objectClass,
                "transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              )}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : null}

          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/25" />

          <span className="absolute left-3 top-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/80">
            {String(index + 1).padStart(3, "0")}
          </span>

          <span className="absolute bottom-3 right-3 translate-y-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Full case
          </span>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-medium tracking-[-0.03em] text-white md:text-[1.65rem]">
              {project.title}
            </h2>
            <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
              {project.tags.slice(0, 3).map((tag) => (
                <li
                  key={tag}
                  className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/45"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function WorkCatalog() {
  const searchParams = useSearchParams();
  const activeFilter = parseWorkFilterId(searchParams.get("category"));
  const query = (searchParams.get("q") ?? "").trim().toLowerCase();

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (!projectMatchesFilter(project, activeFilter)) return false;
      if (!query) return true;

      const haystack = [project.title, project.description, ...project.tags]
        .join(" ")
        .toLowerCase();

      return haystack.includes(query);
    });
  }, [activeFilter, query]);

  return (
    <section
      data-header-theme="dark"
      className="relative min-h-screen bg-[#0e0e0e] px-[6vw] pb-28 pt-44 md:pb-36 md:pt-48"
    >
      <div className="mb-16 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white/45">
            Archive / {String(filteredProjects.length).padStart(2, "0")}
          </p>
          <h1 className="text-5xl font-medium leading-[0.92] tracking-[-0.04em] text-white md:text-7xl lg:text-[5.5rem]">
            Work
          </h1>
        </div>
        <p className="max-w-[340px] text-[13px] leading-relaxed text-white/50 md:mb-1 md:text-right md:text-[15px]">
          A catalog of digital experiences, brand platforms, and e-commerce
          systems built to convert and stay memorable.
        </p>
      </div>

      {filteredProjects.length ? (
        <motion.div
          layout
          className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-20 lg:gap-x-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <CatalogCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <p className="py-24 text-sm uppercase tracking-[0.16em] text-white/40">
          No projects in this category.
        </p>
      )}
    </section>
  );
}
