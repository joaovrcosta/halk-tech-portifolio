"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();

  useEffect(() => {
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const timeout = window.setTimeout(() => {
      lenisRef.current?.lenis?.scrollTo(hash, { duration: 1.2 });
    }, 80);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href?.includes("#")) return;

      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      if (url.pathname !== window.location.pathname || !url.hash) return;

      event.preventDefault();
      lenisRef.current?.lenis?.scrollTo(url.hash, { duration: 1.2 });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
