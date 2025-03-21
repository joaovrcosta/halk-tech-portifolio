import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Hero } from "./hero";

export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className="lg:h-[100vh] h-[70vh] overflow-hidden">
      <motion.div
        style={{ y }}
        className="relative h-full bg-[radial-gradient(circle_at_bottom_right,_#5F5F5F_0%,_#030303_80%)]"
      >
        <Hero />
      </motion.div>
    </div>
  );
}
