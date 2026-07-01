"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  Briefcase,
  GlobeHemisphereWest,
  UsersThree,
} from "@phosphor-icons/react";

const metrics = [
  {
    end: 10,
    suffix: "M+",
    decimals: 0,
    label: "users reached",
    description:
      "users reached through our tailored solutions and digital products.",
    icon: UsersThree,
  },
  {
    end: 2.9,
    suffix: "B+",
    decimals: 1,
    label: "views",
    description:
      "peak monthly visitors engaging with the websites we build.",
    icon: GlobeHemisphereWest,
  },
  {
    end: 25,
    suffix: "+",
    decimals: 0,
    label: "projects",
    description: "successfully delivered across multiple industries.",
    icon: Briefcase,
  },
];

function CountUp({ end, suffix, decimals = 0, duration = 1.6, start = false }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let frameId = 0;

    const animate = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(end * eased);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [start, end, duration]);

  const formatted =
    decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString();

  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
}

function KpiCard({ metric, startCount }) {
  const Icon = metric.icon;
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#111111] p-8 transition-colors duration-300 hover:border-white/10 md:min-h-[380px] md:p-10"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#1f1f1f 1px, transparent 1px), linear-gradient(90deg, #1f1f1f 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(520px circle at ${position.x}px ${position.y}px, rgba(0, 200, 255, 0.18), transparent 42%)`,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(220px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.07), transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center">
        <p
          className="text-[clamp(3.5rem,8vw,5.5rem)] font-semibold leading-none tracking-tight"
          style={{
            background:
              "linear-gradient(180deg, #ffffff 0%, #ffffff 45%, rgba(255,255,255,0.15) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          <CountUp
            end={metric.end}
            suffix={metric.suffix}
            decimals={metric.decimals}
            start={startCount}
          />
        </p>
        <p className="mt-3 text-lg font-medium text-white md:text-xl">
          {metric.label}
        </p>
        <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-[#86858B]">
          {metric.description}
        </p>
      </div>

      <div className="relative z-10 mt-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#1a1a1a] transition-colors duration-300 group-hover:border-[#00C8FF]/30 group-hover:bg-[#00C8FF]/10">
        <Icon size={18} weight="regular" className="text-white/80" />
      </div>
    </article>
  );
}

export default function Kpi() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      data-header-theme="dark"
      className="bg-black px-[6vw] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-[#86858B]">
            📈 Insights
          </span>
          <h2 className="max-w-2xl text-3xl font-medium leading-tight text-white md:text-5xl md:leading-[1.1]">
            Numbers That Just Make Sense
          </h2>
          <p className="mt-4 max-w-lg text-sm text-[#86858B] md:text-base">
            Relentlessly KPI-Driven, Driving Measurable Results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {metrics.map((metric) => (
            <KpiCard
              key={metric.label}
              metric={metric}
              startCount={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
