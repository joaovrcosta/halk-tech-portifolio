"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import design1 from "../../public/projects/projeto-img-1.png";
import design2 from "../../public/images/design-2.png";
import design3 from "../../public/images/design-3.png";
import design4 from "../../public/images/design-4.png";
import design5 from "../../public/images/design-5.png";
import design6 from "../../public/images/design-6.png";
import codLogo from "../../public/images/cod-logo.svg";
import isadoraLogo from "../../public/images/isadora-logo.svg";
import halkLogoDark from "../../public/halk-logo-dark.svg";

interface ProjectItem {
  alt: string;
  title: string;
  monthly?: string;
  url: string;
  fit?: "cover" | "contain";
  src?: StaticImageData;
  video?: string;
  poster?: StaticImageData;
  videoCrop?: "left" | "right";
  logo?: StaticImageData;
}

const CARD_WIDTH = "w-[88vw] md:w-[50vw]";
const CARD_MEDIA = `${CARD_WIDTH} aspect-[16/9]`;

const TRUTH_LIES_VIDEO =
  "https://assets.ign.com/videos/zencoder/2024/05/23/1920/6471e8f5-5da5-4eed-a591-bd530703e4cb-1716469774.mp4";

const imageItems: ProjectItem[] = [
  {
    src: design1,
    alt: "design-1",
    title: "Normal is Boring",
    monthly: "450k",
    url: "/projects/isadora-online",
    logo: halkLogoDark,
  },
  {
    alt: "design-6",
    title: "The Truth Lies",
    monthly: "7.1M",
    url: "/projects/the-truth-lies",
    video: TRUTH_LIES_VIDEO,
    poster: design6,
    fit: "cover",
    videoCrop: "left",
    logo: codLogo,
  },
  {
    src: design2,
    alt: "design-2",
    title: "Isadora Online",
    monthly: "624k",
    url: "/projects/isadora-online",
    logo: isadoraLogo,
  },
  {
    src: design3,
    alt: "design-3",
    title: "UseSnearkers",
    monthly: "54k",
    url: "/projects/use-sneakers",
    logo: halkLogoDark,
  },
  {
    src: design4,
    alt: "design-4",
    title: "Easy English School",
    monthly: "5k",
    url: "/projects/isadora-online",
    logo: halkLogoDark,
  },
  {
    src: design5,
    alt: "design-5",
    title: "Code Legends",
    url: "/projects/isadora-online",
    logo: halkLogoDark,
  },

];

function ProjectCard({
  item,
  isLightBg,
}: {
  item: ProjectItem;
  isLightBg: boolean;
}) {
  const fit = item.fit ?? "contain";
  const objectClass = fit === "contain" ? "object-contain" : "object-cover";
  const imageClassName = `${objectClass} absolute inset-0 h-full w-full transition-transform duration-500 ease-out group-hover:scale-105`;
  const logo = item.logo ?? halkLogoDark;
  const isDarkLogo = logo === halkLogoDark;
  const logoClassName = isDarkLogo
    ? isLightBg
      ? ""
      : "invert"
    : isLightBg
      ? "brightness-0"
      : "";

  return (
    <div className={`flex shrink-0 flex-col gap-4 ${CARD_WIDTH}`}>
      <article
        className={`relative overflow-hidden rounded-2xl group ${CARD_MEDIA} bg-transparent`}
      >
        {item.video ? (
          <div className="absolute inset-0 overflow-hidden">
            <video
              src={item.video}
              poster={item.poster?.src}
              autoPlay
              muted
              loop
              playsInline
              className={`absolute top-0 h-full ${objectClass} transition-transform duration-500 ease-out group-hover:scale-105 ${item.videoCrop
                ? `w-[200%] max-w-none ${item.videoCrop === "right" ? "right-0" : "left-0"}`
                : "inset-0 w-full"
                }`}
            />
          </div>
        ) : item.src ? (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className={imageClassName}
            sizes="(max-width: 768px) 80vw, 36vw"
          />
        ) : null}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/80 group-hover:opacity-100">
          <div className="flex flex-col items-center justify-center gap-2 px-4 text-center">
            <span className="text-3xl font-bold italic bg-gradient-to-br from-[#00C8FF] to-[#004E63] bg-clip-text text-transparent md:text-4xl">
              {item.title}
            </span>
            {item.monthly && (
              <span className="text-xs text-white">
                +<span className="text-2xl">{item.monthly}</span> monthly
                visitors
              </span>
            )}
            <Link
              href={item.url}
              className="mt-2 text-sm uppercase tracking-widest text-white underline-offset-4 hover:underline"
            >
              See more
            </Link>
          </div>
        </div>
      </article>

      <div className="flex flex-col gap-2">
        <Image
          src={logo}
          alt=""
          className={`h-5 w-auto max-w-[200px] object-contain object-left ${logoClassName}`}
        />
        <h3
          className={`text-2xl font-medium md:text-3xl ${isLightBg ? "text-black" : "text-white"
            }`}
        >
          {item.title}
        </h3>
      </div>
    </div>
  );
}

export default function Description() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [sectionHeight, setSectionHeight] = useState<number | null>(null);
  const [isLightBg, setIsLightBg] = useState(true);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateScrollMetrics = () => {
      const distance = Math.max(track.scrollWidth - window.innerWidth, 0);
      setScrollDistance(distance);
      setSectionHeight(distance + window.innerHeight);
    };

    updateScrollMetrics();

    const observer = new ResizeObserver(updateScrollMetrics);
    observer.observe(track);
    window.addEventListener("resize", updateScrollMetrics);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateScrollMetrics);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#ffffff", "#004E63"]
  );

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const light = progress < 0.5;

    setIsLightBg(light);
    containerRef.current?.setAttribute(
      "data-header-theme",
      light ? "light" : "dark"
    );
  });

  return (
    <section
      ref={containerRef}
      data-header-theme="light"
      style={{ height: sectionHeight ?? "320vh" }}
      className="relative"
    >
      <motion.div
        style={{ backgroundColor }}
        className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden"
      >
        <p
          className={`mb-8 px-[6vw] text-xs font-medium uppercase tracking-[0.2em] ${isLightBg ? "text-black/45" : "text-[#86858B]"
            }`}
        >
          Selected work
        </p>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max items-end gap-5 pl-[6vw] pr-[6vw] md:gap-8"
        >
          {imageItems.map((item) => (
            <ProjectCard key={item.alt} item={item} isLightBg={isLightBg} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
