"use client";

import Image from "next/image";
import design1 from "../../public/projects/projeto-img-1.png";
import design2 from "../../public/images/design-7.png";
import design3 from "../../public/images/projects/wills-group/website-img.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const slides = [
  {
    text: "Scalable Technologies",
    src: design1,
    direction: "left",
    left: "-40%",
  },
  {
    text: "Custom Solutions for Your Business",
    src: design2,
    direction: "right",
    left: "-25%",
  },
  {
    text: "+10M Users Reached",
    src: design3,
    direction: "left",
    left: "-75%",
  },
];

function Phrase({ text, src }) {
  return (
    <div className="flex items-center gap-5 px-5">
      <p className="text-[7.5vw] uppercase text-black">{text}</p>
      <span className="relative h-[7.5vw] aspect-[4/2] overflow-hidden rounded-full">
        <Image src={src} alt="" fill style={{ objectFit: "cover" }} />
      </span>
    </div>
  );
}

function Slide({ progress, direction, left, text, src }) {
  const dir = direction === "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [150 * dir, -150 * dir]);

  return (
    <motion.div
      style={{ x, left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase text={text} src={src} />
      <Phrase text={text} src={src} />
      <Phrase text={text} src={src} />
    </motion.div>
  );
}

export default function Section() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={container}
      data-header-theme="light"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-white"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-10 flex w-full flex-col justify-center gap-6 overflow-hidden py-20 md:gap-10">
        {slides.map((slide) => (
          <Slide
            key={slide.text}
            progress={scrollYProgress}
            direction={slide.direction}
            left={slide.left}
            text={slide.text}
            src={slide.src}
          />
        ))}
      </div>
    </div>
  );
}
