"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { featuredProjects, type Project } from "@/lib/projects-data";
import { useProjectTransition } from "@/components/project-transition";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  index,
  isDimmed,
  onHover,
}: {
  project: Project;
  index: number;
  isDimmed: boolean;
  onHover: (slug: string | null) => void;
}) {
  const mediaRef = useRef<HTMLDivElement>(null);
  const { openProject } = useProjectTransition();
  const href = `/projects/${project.slug}`;
  const objectClass = project.fit === "contain" ? "object-contain" : "object-cover";
  const [viewCursor, setViewCursor] = useState({ x: 0, y: 0 });

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
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        delay: (index % 2) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "group/card relative min-w-0 transition-[filter,opacity] duration-500 ease-out",
        isDimmed && "md:opacity-35 md:blur-[6px]"
      )}
      onMouseEnter={() => onHover(project.slug)}
      onMouseLeave={() => onHover(null)}
    >
      <Link
        href={href}
        onClick={handleClick}
        aria-label={`Open ${project.title}`}
        className="block"
      >
        <div
          ref={mediaRef}
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            setViewCursor({
              x: event.clientX - rect.left,
              y: event.clientY - rect.top,
            });
          }}
          className={cn(
            "group/media relative cursor-none overflow-hidden bg-[#111]",
            project.layout?.aspect ?? "aspect-[16/10]"
          )}
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
                "absolute top-0 h-full transition-transform duration-700 ease-out group-hover/card:scale-[1.04]",
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
              className={cn(
                objectClass,
                "transition-transform duration-700 ease-out group-hover/card:scale-[1.04]"
              )}
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          ) : null}

          <div
            aria-hidden
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-150 ease-out group-hover/media:opacity-100"
            style={{ left: viewCursor.x, top: viewCursor.y }}
          >
            <div className="flex items-stretch overflow-hidden rounded-sm bg-white text-black shadow-sm">
              <span className="grid size-7 place-items-center">
                <ArrowUpRight className="size-3.5" strokeWidth={2.2} />
              </span>
              <span className="flex items-center pr-2.5 text-[11px] font-semibold uppercase tracking-[0.12em]">
                View
              </span>
            </div>
          </div>

          <ul className="absolute bottom-3 left-3 z-[1] flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="border border-white/35 bg-black/45 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-white backdrop-blur-sm"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 md:mt-8">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-4xl font-medium tracking-[-0.03em] text-white md:text-[1.75rem]">
              {project.title}
            </h3>
            <span className="mt-1 inline-flex shrink-0 items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white">
              <span className="grid size-5 place-items-center bg-white">
                <ArrowRight className="size-3 text-black" strokeWidth={2} />
              </span>
              View project
            </span>
          </div>
          <p className="mt-3 line-clamp-2 max-w-[42ch] text-[11px] uppercase leading-relaxed tracking-[0.12em] text-white/55 md:mt-4">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}

export default function Description() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <section
      data-header-theme="dark"
      className="relative bg-[#030303] px-[6vw] pb-28 pt-20 md:pb-40 md:pt-28"
    >
      <div className="mb-16 flex items-end justify-between gap-6 md:mb-24">
        <h2 className="text-5xl font-medium leading-[0.92] tracking-[-0.04em] text-white md:text-7xl lg:text-[5.5rem]">
          Selected
          <br />
          projects
        </h2>
        <Link
          href="/projects"
          className="mb-1 shrink-0 text-[11px] font-medium uppercase tracking-[0.18em] text-white underline decoration-white/80 underline-offset-4 transition-opacity hover:opacity-60 md:text-xs"
        >
          VIEW ALL WORKS
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)] md:gap-x-12 lg:gap-x-[4.5vw]">
        {[
          featuredProjects.filter((_, index) => index % 2 === 0),
          featuredProjects.filter((_, index) => index % 2 === 1),
        ].map((column, columnIndex) => (
          <div
            key={columnIndex}
            className={cn(
              "flex flex-col gap-20 md:gap-28 lg:gap-32",
              columnIndex === 1 && "md:pt-36 lg:pt-48"
            )}
          >
            {column.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={columnIndex + index * 2}
                isDimmed={hoveredSlug !== null && hoveredSlug !== project.slug}
                onHover={setHoveredSlug}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
