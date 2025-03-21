"use client";

import React, { useEffect, useRef } from "react";
import { projects } from "@/data";
import Card from "./card";
import { useScroll } from "framer-motion";
import Lenis from "lenis";

export default function Description() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;

        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}
