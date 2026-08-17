"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useLenis } from "lenis/react";
import { getProjectBySlug } from "@/lib/projects-data";
import { useProjectTransition } from "@/components/project-transition";
import { SplitText } from "@/components/split-text";

export default function ProjectCaseStudy({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);
  const mediaRef = useRef<HTMLDivElement>(null);
  const { activeSlug, registerTarget } = useProjectTransition();
  const lenis = useLenis();
  const isEntering = activeSlug === slug;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    lenis?.scrollTo(0, { immediate: true });
    registerTarget(slug, mediaRef.current);
  }, [lenis, registerTarget, slug]);

  if (!project) return null;

  const objectClass = project.fit === "contain" ? "object-contain" : "object-cover";

  return (
    <article data-header-theme="dark" className="bg-[#030303] text-white">
      <div className="px-[6vw] pt-32 pb-10 md:pt-40 md:pb-14">
        <motion.div
          initial={isEntering ? { opacity: 0, y: 12 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-10"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white md:text-xs"
          >
            <ArrowLeft size={14} />
            Back
          </Link>
        </motion.div>

        <h1 className="max-w-[18ch] text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
          <SplitText text={project.title} delay={isEntering ? 0.28 : 0.08} />
        </h1>

        <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-start md:justify-between md:gap-16">
          <p className="max-w-[540px] text-[15px] leading-relaxed text-white/70 md:text-base">
            <SplitText
              text={project.description}
              by="word"
              delay={isEntering ? 0.42 : 0.22}
              stagger={0.035}
            />
          </p>
          <ul className="flex flex-wrap gap-2 md:max-w-[420px] md:justify-end">
            {project.tags.map((tag, index) => (
              <motion.li
                key={tag}
                initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.55,
                  delay: (isEntering ? 0.55 : 0.35) + index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border border-white/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white"
              >
                {tag}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <div
        ref={mediaRef}
        className="relative h-[56vh] w-full overflow-hidden bg-[#111] md:h-[72vh]"
      >
        {project.video ? (
          <video
            src={project.video}
            poster={project.poster?.src}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 h-full w-full ${objectClass}`}
          />
        ) : project.cover ? (
          <Image
            src={project.cover}
            alt={project.title}
            fill
            priority
            className={objectClass}
            sizes="100vw"
          />
        ) : null}
      </div>

      {project.technologies || project.projectUrl ? (
        <div className="px-[6vw] py-16 md:py-24">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            {project.technologies ? (
              <div className="max-w-[720px]">
                <h2 className="mb-6 text-sm uppercase tracking-[0.18em] text-white/45">
                  Technologies
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/80"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.projectUrl ? (
              <Link
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-full border border-white px-6 py-2 text-sm transition-colors hover:bg-white hover:text-black"
              >
                Visit <ArrowRight size={18} />
              </Link>
            ) : null}
          </div>
        </div>
      ) : null}

      {project.screenshots?.length ? (
        <div className="space-y-4 px-[6vw] pb-8">
          <h2 className="mb-8 text-2xl font-medium md:text-3xl">About the Project</h2>
          {project.screenshots.map((image) => (
            <Image
              key={image}
              src={image}
              alt={project.title}
              width={1600}
              height={900}
              quality={100}
              className="h-auto w-full"
            />
          ))}
        </div>
      ) : null}

      {project.briefTitle && project.briefDescription ? (
        <div className="flex flex-col gap-8 px-[6vw] py-20 md:flex-row md:items-center md:gap-16 md:py-28">
          <h2 className="flex-1 text-5xl font-medium tracking-[-0.04em] md:text-7xl lg:text-8xl">
            {project.briefTitle}
          </h2>
          <p className="flex-1 text-[15px] leading-relaxed text-white/70 md:text-base">
            {project.briefDescription}
          </p>
        </div>
      ) : (
        <div className="px-[6vw] py-20" />
      )}

      <div className="px-[6vw] pb-24">
        <Link
          href="/projects"
          className="text-xs uppercase tracking-[0.18em] text-white underline decoration-white/70 underline-offset-4 transition-opacity hover:opacity-60"
        >
          See more projects
        </Link>
      </div>
    </article>
  );
}
