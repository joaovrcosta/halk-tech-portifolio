"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function InsightsTechTransition() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const maskSize = useTransform(
    scrollYProgress,
    [0, 0.12, 0.85],
    ["6vmin", "14vmin", "360vmin"]
  );

  const labelOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.5, 0.68],
    [0, 1, 1, 0]
  );

  const overlayOpacity = useTransform(scrollYProgress, [0.78, 0.98], [1, 0]);

  return (
    <section
      ref={container}
      data-header-theme="dark"
      className="pointer-events-none relative z-20 h-[300vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 will-change-[opacity]"
        >
          <div className="absolute inset-0 bg-black" />

          <motion.div
            className="absolute inset-0 bg-white"
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
            <motion.div
              style={{ opacity: labelOpacity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-lg font-medium uppercase tracking-[0.35em] text-black/70">
                Our Services
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
