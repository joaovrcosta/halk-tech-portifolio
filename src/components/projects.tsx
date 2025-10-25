"use client";

import { useMemo, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export interface Project {
  title: string;
  description: string;
  images: StaticImageData[];
  link?: string;
}

interface ProjectShowcaseProps {
  project: Project;
  index: number;
}

export default function ProjectShowcase({
  project,
  index,
}: ProjectShowcaseProps) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const imageTransforms = [0, lg, md];

  const images = project.images.slice(0, 3).map((src, i) => ({
    src,
    y: imageTransforms[i],
  }));

  const titleAnimations = useMemo(
    () =>
      project.title
        .split("")
        .map(() =>
          useTransform(
            scrollYProgress,
            [0, 1],
            [0, Math.floor(Math.random() * -75) - 25]
          )
        ),
    [scrollYProgress, project.title]
  );

  // const isEven = index % 2 === 0;
  // // const alignClass = isEven
  // //   ? "items-start text-left ml-[10vw]"
  // //   : "items-end text-right mr-[10vw]";

  return (
    <div
      ref={container}
      className="mt-[10vh] min-h-screen relative bg-[#0e0e0e]"
    >
      <div
        className={`flex flex-col ${
          index % 2 === 0
            ? "items-start text-left md:ml-[10vw]"
            : "items-end text-right md:mr-[10vw]"
        } items-center text-center px-4 md:px-0`}
      >
        <p className="text-white m-0 mt-2 text-[6vw] md:text-[3vw] uppercase flex flex-wrap gap-[0.1em]">
          {project.title.split("").map((letter, i) => {
            const isSpace = letter === " ";
            return (
              <motion.span
                key={`l_${i}`}
                style={{ top: titleAnimations[i] }}
                className={`relative text-[#fa6801] ${
                  isSpace ? "w-[0.5em]" : "inline-block"
                }`}
              >
                {letter}
              </motion.span>
            );
          })}
        </p>
        <div className="max-w-[90vw] md:max-w-[35vw] text-white mt-4">
          <span>{project.description}</span>
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 w-full md:w-auto"
          >
            <button className="w-full md:w-auto px-4 py-2 border rounded-bl-3xl rounded-tr-3xl hover:bg-white hover:text-black cursor-pointer">
              View
            </button>
          </a>
        )}
      </div>

      {/* Desktop layout with scroll effect */}
      <div className="hidden md:block relative w-full h-[60vh] mt-[5vh]">
        {images.map(({ src, y }, i) => {
          const positions = [
            "left-1/2 top-0 translate-x-[-50%] h-[60vh] w-[50vh] z-[1]",
            "left-[calc(50%+12rem)] top-[10vh] h-[40vh] w-[25vh] z-[2]",
            "left-[calc(50%-20rem)] top-[35vh] h-[25vh] w-[20vh] z-[3]",
          ];

          return (
            <motion.div
              key={`i_${i}`}
              style={{ y }}
              className={`absolute ${positions[i]} overflow-hidden`}
            >
              <Image
                src={src}
                placeholder="blur"
                quality={100}
                alt="project image"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Mobile layout: stacked images with no scroll effect */}
      <div className="block md:hidden flex flex-col gap-4 items-center mt-8 px-4">
        {project.images.map((src, i) => (
          <div
            key={`mobile_${i}`}
            className="relative w-full max-w-[90%] h-[300px] overflow-hidden rounded-2xl"
          >
            <Image
              src={src}
              placeholder="blur"
              quality={100}
              alt={`project image ${i}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
