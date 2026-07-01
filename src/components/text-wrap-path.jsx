"use client";

import { useId } from "react";
import { motion } from "framer-motion";

const WINDING_PATH =
  "M -40 190 C 80 30, 220 250, 380 70 C 480 10, 560 210, 700 90 C 820 0, 900 180, 1040 110";

export default function TextWrapPath({
  pathLength,
  pathOpacity,
  children,
  className = "",
}) {
  const gradientId = `text-path-${useId().replace(/:/g, "")}`;

  return (
    <div className={`relative inline-block ${className}`}>
      <svg
        className="pointer-events-none absolute -left-[12%] -top-[55%] z-0 h-[210%] w-[124%]"
        viewBox="0 0 1000 280"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <linearGradient
            id={gradientId}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="140"
            x2="1000"
            y2="140"
          >
            <stop offset="0%" stopColor="#004E63" stopOpacity="0.35" />
            <stop offset="45%" stopColor="#00C8FF" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#00C8FF" stopOpacity="1" />
          </linearGradient>
        </defs>
        <motion.path
          d={WINDING_PATH}
          stroke={`url(#${gradientId})`}
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="0 1"
          style={{ pathLength, opacity: pathOpacity }}
        />
      </svg>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
