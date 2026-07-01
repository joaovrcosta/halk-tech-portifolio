"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

function TechnologiesPreview() {
  return (
    <div className="absolute inset-0 bg-[#0a0a0a]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative flex h-full flex-col justify-center px-[6vw]">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-2 w-2 bg-[#00C8FF]" />
          <span className="text-sm font-medium text-[#00C8FF]/80">
            Technologies
          </span>
        </div>
        <h2 className="max-w-md text-4xl font-medium leading-tight text-white md:text-6xl md:leading-[1.05]">
          What I use.
        </h2>
        <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#86858B] md:text-base">
          Front-end, back-end, design and cloud — the stack behind every project
          we deliver.
        </p>
      </div>
    </div>
  );
}

export default function InsightsTechTransition() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 28,
    restDelta: 0.001,
  });

  const maskSize = useTransform(
    smoothProgress,
    [0, 0.12, 0.72],
    ["6vmin", "14vmin", "300vmin"]
  );

  const labelOpacity = useTransform(smoothProgress, [0, 0.2, 0.45], [1, 0.6, 0]);

  const overlayOpacity = useTransform(smoothProgress, [0.62, 0.82], [1, 0]);

  return (
    <section
      ref={container}
      data-header-theme="dark"
      className="relative h-[300vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <TechnologiesPreview />

        <motion.div
          style={{ opacity: overlayOpacity }}
          className="pointer-events-none absolute inset-0 z-10"
        >
          <div className="absolute inset-0 bg-black" />

          <motion.div
            className="absolute inset-0"
            style={{
              WebkitMaskImage: "url(/mask-star.svg)",
              maskImage: "url(/mask-star.svg)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center center",
              maskPosition: "center center",
              WebkitMaskSize: maskSize,
              maskSize,
            }}
          >
            <TechnologiesPreview />
          </motion.div>

          <motion.div
            style={{ opacity: labelOpacity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-white/30">
              Insights
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
