"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "@/components/intro";
import Description from "@/components/description";
import Section from "@/components/section";
import Stacks from "@/components/stacks";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Intro />
      <Description />
      <Section />
      <Stacks />
      <div className="h-screen">
        <h1>Be in movement</h1>
      </div>
    </main>
  );
}
