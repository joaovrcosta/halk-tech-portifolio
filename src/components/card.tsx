"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import backgroundXl from "../../public/images/background-xl.png";

type CardProps = {
  title: string;
  description: string;
  src: string;
  logo?: string;
  url?: string;
  color: string;
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
};

const Card = ({
  title,
  description,
  src,
  url,
  color,
  logo,
  i,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative flex flex-col h-[500px] w-[1000px] rounded-3xl p-12 shadow-2xs"
      >
        <h2 className="text-center text-2xl font-bold">{title}</h2>

        <Image
          fill
          src={backgroundXl}
          alt="image"
          className="object-cover rounded-4xl"
        />
        <div className="flex h-full mt-6 gap-6">
          <div className="w-2/5 relative top-[0%]">
            {/* Exibe a logo acima da descrição caso exista */}
            {logo && (
              <div className="relative w-24 h-8 mb-4">
                <Image
                  src={`/images/${logo}`}
                  alt="Company logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            )}

            <p className="text-sm text-white leading-relaxed first-letter:text-2xl first-letter:font-bold">
              {description}
            </p>
            <span className="flex items-center gap-2 mt-4">
              <a
                href={url}
                target="_blank"
                className="text-sm underline text-blue-600 hover:text-blue-800"
              >
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
          <div className="relative w-3/5 h-full rounded-3xl overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                fill
                src={`/images/${src}`}
                alt="image"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
