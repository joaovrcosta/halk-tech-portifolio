"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

const metrics = [
  {
    end: 10,
    prefix: "",
    suffix: "M+",
    decimals: 0,
    title: "Users Reached",
    description:
      "Users reached through our tailored solutions and digital products.",
  },
  {
    end: 2.9,
    prefix: "",
    suffix: "B+",
    decimals: 1,
    title: "Views",
    description:
      "Peak monthly visitors engaging with the websites we build.",
  },
  {
    end: 25,
    prefix: "",
    suffix: "+",
    decimals: 0,
    title: "Projects",
    description: "Successfully delivered across multiple industries.",
  },
];

function CountUp({
  end,
  prefix = "",
  suffix,
  decimals = 0,
  duration = 1.6,
  start = false,
}) {
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
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

function KpiItem({ metric, startCount, showDivider }) {
  return (
    <div
      className={`relative flex flex-col justify-between px-8 py-14 md:px-12 md:py-20 lg:px-16 ${
        showDivider ? "border-t border-white/10 md:border-t-0" : ""
      }`}
    >
      {showDivider && (
        <div
          className="absolute top-8 bottom-8 left-0 hidden w-px bg-white/10 md:block"
          aria-hidden
        />
      )}

      <p
        className={`${instrumentSerif.className} text-[clamp(2.75rem,5.5vw,4.25rem)] leading-none tracking-tight text-white`}
      >
        <CountUp
          end={metric.end}
          prefix={metric.prefix}
          suffix={metric.suffix}
          decimals={metric.decimals}
          start={startCount}
        />
      </p>

      <div className="mt-10 md:mt-14">
        <h3
          className={`${instrumentSerif.className} text-xl text-white md:text-2xl`}
        >
          {metric.title}
        </h3>
        <p className="mt-4 max-w-[240px] text-sm leading-relaxed text-[#86858B] md:text-[15px]">
          {metric.description}
        </p>
      </div>
    </div>
  );
}

export default function Kpi() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      data-header-theme="dark"
      className="border-y border-white/10 bg-black"
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        {metrics.map((metric, index) => (
          <KpiItem
            key={metric.title}
            metric={metric}
            startCount={isInView}
            showDivider={index > 0}
          />
        ))}
      </div>
    </section>
  );
}
