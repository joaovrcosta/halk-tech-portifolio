"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TextWrapPath from "./text-wrap-path";

const services = [
  {
    title: "Web Development-1",
    description:
      "Your website should be more than functional—it should resonate. We craft bespoke digital experiences that merge innovation with creativity, delivering intuitive, visually stunning platforms that captivate audiences, reflect your brand's essence, and adapt to future opportunities.",
  },
  {
    title: "Web Development",
    description:
      "Your website should be more than functional—it should resonate. We craft bespoke digital experiences that merge innovation with creativity, delivering intuitive, visually stunning platforms that captivate audiences, reflect your brand's essence, and adapt to future opportunities.",
  },
  {
    title: "Design",
    description:
      "Design is your brand's voice. We craft visuals and layouts that communicate purpose, inspire trust, and connect emotionally. By harmonizing artistry with intent, our designs transform user interactions into meaningful, memorable experiences that align with your identity.",
  },
  {
    title: "Software Development",
    description:
      "We build custom software that evolves with your business. By addressing unique challenges, our tailored solutions streamline workflows, eliminate inefficiencies, and foster innovation—empowering you to scale, adapt, and maintain a competitive edge in an ever-changing landscape.",
  },
];

function getAnimationRanges(index, total) {
  const slice = 1 / total;
  const start = index * slice;
  const isLast = index === total - 1;

  return {
    start,
    mid: start + slice * 0.28,
    pathEnd: start + slice * (isLast ? 0.78 : 0.92),
    pathFadeEnd: start + slice * 0.1,
    descStart: start + slice * (isLast ? 0.12 : 0.3),
    descEnd: start + slice * (isLast ? 0.4 : 0.65),
  };
}

function ServiceBlock({ service, index, total, scrollYProgress }) {
  const words = service.title.split(" ");
  const { start, mid, pathEnd, pathFadeEnd, descStart, descEnd } =
    getAnimationRanges(index, total);

  const pathLength = useTransform(scrollYProgress, [start, pathEnd], [0, 1]);
  const pathOpacity = useTransform(scrollYProgress, [start, pathFadeEnd], [0, 1]);

  const titleOpacity = useTransform(scrollYProgress, [start, mid], [0, 1]);
  const titleY = useTransform(scrollYProgress, [start, mid], [48, 0]);

  const descOpacity = useTransform(scrollYProgress, [descStart, descEnd], [0, 1]);
  const descY = useTransform(scrollYProgress, [descStart, descEnd], [32, 0]);

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-4 text-center md:min-h-[85vh]">
      <TextWrapPath pathLength={pathLength} pathOpacity={pathOpacity}>
        <motion.h2
          style={{ opacity: titleOpacity, y: titleY }}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 lg:text-8xl text-4xl font-medium leading-tight text-white will-change-transform md:text-8xl md:leading-[1.05]"
        >
          {words.map((word, wordIndex) => (
            <span key={`${service.title}-${wordIndex}`}>{word}</span>
          ))}
        </motion.h2>
      </TextWrapPath>

      <motion.p
        style={{ opacity: descOpacity, y: descY }}
        className="max-w-2xl text-sm leading-relaxed text-[#86858B] will-change-transform md:text-base"
      >
        {service.description}
      </motion.p>
    </div>
  );
}

export default function Stacks() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      data-header-theme="dark"
      className="relative bg-[#0a0a0a] pb-[50vh]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative px-[6vw] py-16 md:py-24">
        <div className="mb-8 flex justify-center md:mb-12">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 bg-[#00C8FF]" />
            <span className="text-sm font-medium text-[#00C8FF]/80">
              Technologies
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <ServiceBlock
              key={service.title}
              service={service}
              index={index}
              total={services.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
          <div className="h-[20vh]" aria-hidden />
        </div>
      </div>
    </section>
  );
}
