"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Your website should be more than functional—it should resonate. We craft bespoke digital experiences that merge innovation with creativity, delivering intuitive, visually stunning platforms that captivate audiences, reflect your brand's essence, and adapt to future opportunities.",
  },
  {
    title: "Design",
    description: "Your website should be more than functional—it should resonate. We craft bespoke digital experiences that merge innovation with creativity, delivering intuitive, visually stunning platforms that captivate audiences, reflect your brand's essence, and adapt to future opportunities."
  },
  {
    title: "Software Development",
    description: "We create beautiful and functional designs for your website and application.",
  },
];

function AnimatedText({ children, className, offsetEnd = "0.55" }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", `start ${offsetEnd}`],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <motion.p
      ref={ref}
      style={{ opacity, x }}
      className={`relative will-change-transform ${className ?? ""}`}
    >
      {children}
    </motion.p>
  );
}

export default function Stacks() {
  return (
    <section data-header-theme="dark" className="relative bg-[#0a0a0a]">
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
          {services.map((service) => (
            <div
              key={service.title}
              className="flex min-h-[80vh] flex-col items-center justify-center gap-4 text-center md:min-h-[85vh]"
            >
              <AnimatedText className="text-8xl font-medium leading-tight text-white md:text-8xl md:leading-[1.05]">
                {service.title}
              </AnimatedText>
              <AnimatedText
                offsetEnd="0.45"
                className="max-w-2xl text-sm leading-relaxed text-[#86858B] md:text-base"
              >
                {service.description}
              </AnimatedText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
