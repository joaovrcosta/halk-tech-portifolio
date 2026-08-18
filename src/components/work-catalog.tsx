"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import {
  parseWorkFilterId,
  projects,
  projectMatchesFilter,
  workFilters,
  type Project,
  type WorkFilterId,
} from "@/lib/projects-data";
import { useProjectTransition } from "@/components/project-transition";
import { cn } from "@/lib/utils";

function buildWorkHref(filterId: WorkFilterId, query: string) {
  const params = new URLSearchParams();
  if (filterId !== "all") params.set("category", filterId);
  const trimmed = query.trim();
  if (trimmed) params.set("q", trimmed);
  const qs = params.toString();
  return qs ? `/projects?${qs}` : "/projects";
}

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
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeFilter = parseWorkFilterId(searchParams.get("category"));
  const queryFromUrl = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(queryFromUrl);

  useEffect(() => {
    setQuery(queryFromUrl);
  }, [queryFromUrl]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (query.trim() === queryFromUrl.trim()) return;
      router.replace(buildWorkHref(activeFilter, query), { scroll: false });
    }, 250);

    return () => window.clearTimeout(timeout);
  }, [activeFilter, query, queryFromUrl, router]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      if (!projectMatchesFilter(project, activeFilter)) return false;
      if (!normalizedQuery) return true;

      const haystack = [project.title, project.description, ...project.tags]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [activeFilter, query]);

  return (
    <section
      data-header-theme="dark"
      className="relative min-h-screen bg-[#030303] px-[6vw] pb-28 pt-32 md:pb-36 md:pt-40"
    >
      <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
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

      <div className="sticky top-20 z-30 mb-12 border-b border-white/10 bg-[#030303]/90 py-4 backdrop-blur-md md:top-24 md:mb-16">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {workFilters.map((filter) => {
              const isActive = activeFilter === filter.id;

              return (
                <Link
                  key={filter.id}
                  href={buildWorkHref(filter.id, query)}
                  scroll={false}
                  className={cn(
                    "rounded-full border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors",
                    isActive
                      ? "border-[#00C8FF] bg-[#00C8FF] text-black"
                      : "border-white/20 text-white/70 hover:border-white hover:text-white"
                  )}
                >
                  {filter.label}
                </Link>
              );
            })}
          </div>

          <label className="relative flex w-full items-center lg:max-w-[280px]">
            <Search
              className="pointer-events-none absolute left-3 size-4 text-white/40"
              strokeWidth={1.75}
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by project or category"
              className="w-full rounded-full border border-white/20 bg-transparent py-2 pl-10 pr-10 text-[13px] text-white outline-none placeholder:text-white/35 focus:border-[#00C8FF]"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 text-white/40 transition-colors hover:text-white"
              >
                <X className="size-4" strokeWidth={1.75} />
              </button>
            ) : null}
          </label>
        </div>
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
