"use client";

import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Hero } from "./hero";
import LightRays from "./LightRays";

export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div ref={container} className="lg:h-[100vh] h-[70vh] overflow-hidden">
      <motion.div
        data-header-theme="dark"
        style={{ y }}
        className="relative h-full bg-[#030303]"
      >
        <div className="absolute inset-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00C8FF"
            raysSpeed={0.9}
            lightSpread={0.55}
            rayLength={1.8}
            fadeDistance={1.1}
            saturation={0.85}
            followMouse
            mouseInfluence={0.06}
            noiseAmount={0.04}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_bottom_right,_#5F5F5F33_0%,_#030303cc_70%)]"
          aria-hidden
        />

        <div className="relative z-10">
          <Hero />
        </div>
      </motion.div>
    </div>
  );
}
