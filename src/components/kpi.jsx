"use client";

import {
  Briefcase,
  GlobeHemisphereWest,
  UsersThree,
} from "@phosphor-icons/react";

const metrics = [
  {
    value: "10M+",
    label: "users reached",
    description:
      "users reached through our tailored solutions and digital products.",
    icon: UsersThree,
  },
  {
    value: "2.9B+",
    label: "views",
    description:
      "peak monthly visitors engaging with the websites we build.",
    icon: GlobeHemisphereWest,
  },
  {
    value: "25+",
    label: "projects",
    description: "successfully delivered across multiple industries.",
    icon: Briefcase,
  },
];

function KpiCard({ metric }) {
  const Icon = metric.icon;

  return (
    <article className="relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#111111] p-8 md:min-h-[380px] md:p-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#1f1f1f 1px, transparent 1px), linear-gradient(90deg, #1f1f1f 1px, transparent 1px)",
          backgroundSize: "48px 48px",
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
          {metric.value}
        </p>
        <p className="mt-3 text-lg font-medium text-white md:text-xl">
          {metric.label}
        </p>
        <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-[#86858B]">
          {metric.description}
        </p>
      </div>

      <div className="relative z-10 mt-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#1a1a1a]">
        <Icon size={18} weight="regular" className="text-white/80" />
      </div>
    </article>
  );
}

export default function Kpi() {
  return (
    <section
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
            <KpiCard key={metric.label} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
