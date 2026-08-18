"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import LightRays from "./LightRays";
import { SplitText } from "@/components/split-text";

const HERO_VIDEO_SRC = "/0818.mp4";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const textClip = useTransform(
    scrollYProgress,
    [0.04, 0.32],
    ["inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"]
  );
  const textOpacity = useTransform(scrollYProgress, [0.02, 0.28], [1, 0]);
  const textY = useTransform(scrollYProgress, [0.04, 0.32], ["0%", "-12%"]);

  const videoTop = useTransform(scrollYProgress, [0.06, 0.85], ["46vh", "0vh"]);
  const videoSide = useTransform(scrollYProgress, [0.06, 0.85], ["6vw", "0vw"]);
  const videoBottom = useTransform(scrollYProgress, [0.06, 0.85], ["5vh", "0vh"]);
  const videoRadius = useTransform(scrollYProgress, [0.45, 0.85], [28, 0]);

  const raysOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      video.play().catch(() => {});
    };

    video.addEventListener("canplay", play);
    play();

    return () => {
      video.removeEventListener("canplay", play);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const video = videoRef.current;
    if (!video) return;

    if (progress > 0.02 && video.paused) {
      video.play().catch(() => { });
    }
  });

  return (
    <section ref={sectionRef} className="relative h-[240vh]">
      <div
        data-header-theme="dark"
        className="sticky top-0 h-screen w-full overflow-hidden bg-[#030303]"
      >
        <motion.div
          style={{ opacity: raysOpacity }}
          className="pointer-events-none absolute inset-0 z-0"
        >
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#5F5F5F33_0%,_#030303cc_70%)]" />
        </motion.div>

        <motion.div
          style={{
            top: videoTop,
            left: videoSide,
            right: videoSide,
            bottom: videoBottom,
            borderRadius: videoRadius,
          }}
          className="absolute z-10 overflow-hidden bg-black"
        >
          <video
            ref={videoRef}
            src={HERO_VIDEO_SRC}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          style={{
            clipPath: textClip,
            opacity: textOpacity,
            y: textY,
          }}
          className="relative z-20 flex w-full items-start px-[6vw] pt-32 md:pt-36 lg:pt-40"
        >
          <div className="flex w-full flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
            <h1 className="max-w-[720px] text-[40px] leading-tight text-white md:text-5xl md:leading-[1.15] lg:text-[64px] lg:leading-[1.1]">
              <SplitText text="You feel the brand, we build the experience" />
            </h1>
            <p className="max-w-[340px] text-[16px] leading-relaxed text-[#b6b6b6] md:mb-1 md:text-right md:text-[15px]">
              <SplitText
                text="More than just a beautiful design, we create experiences that convert visitors into customers. Your website can’t just be a business card, it needs to do the selling for you."
                by="word"
                delay={0.35}
                stagger={0.035}
              />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
