"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const techCategories = [
  {
    title: "Front-end Development",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
      "Radix",
      "Zustand",
      "Redux",
      "Three.js",
    ],
  },
  {
    title: "Back-end Development",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "Fastify",
      "WordPress",
      "Sanity CMS",
      "Strapi",
      "Contentful",
    ],
  },
  {
    title: "Design & Animation",
    items: [
      "Figma",
      "Adobe XD",
      "Framer",
      "Photoshop",
      "Design Systems",
      "Prototyping",
    ],
  },
  {
    title: "Database & Cloud",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Firebase",
      "Supabase",
      "AWS",
    ],
  },
];

function CategoryItem({ category }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center center", "end center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.12, 1, 0.12]);

  const titleColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#2a2a2a", "#ffffff", "#2a2a2a"]
  );

  const subtitleColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#1a1a1a", "#86858B", "#1a1a1a"]
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="flex min-h-[75vh] flex-col justify-center py-10 md:min-h-[85vh]"
    >
      <motion.h3
        style={{ color: titleColor }}
        className="text-3xl font-medium leading-tight md:text-5xl md:leading-[1.1]"
      >
        {category.title}
      </motion.h3>
      <motion.p
        style={{ color: subtitleColor }}
        className="mt-3 max-w-lg text-sm leading-relaxed md:text-base"
      >
        {category.items.join(" · ")}
      </motion.p>
    </motion.div>
  );
}

export default function Stacks() {
  return (
    <section
      data-header-theme="dark"
      className="relative bg-[#0a0a0a]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative grid grid-cols-1 px-[6vw] lg:grid-cols-2 lg:gap-20">
        <div className="sticky top-0 flex h-screen flex-col justify-center py-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 bg-[#00C8FF]" />
            <span className="text-sm font-medium text-[#00C8FF]/80">
              Technologies
            </span>
          </div>
          <h2 className="max-w-md text-4xl font-medium leading-tight text-white md:text-6xl md:leading-[1.05]">
            What I use.
          </h2>
        </div>

        <div className="pb-[30vh] pt-[20vh] lg:pb-[35vh] lg:pt-[25vh]">
          {techCategories.map((category) => (
            <CategoryItem key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
