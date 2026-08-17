"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";

type Rect = { top: number; left: number; width: number; height: number };

type OverlayState = {
  slug: string;
  imageSrc?: string;
  videoSrc?: string;
  posterSrc?: string;
  objectFit: "cover" | "contain";
  from: Rect;
  to: Rect | null;
};

type OpenProjectArgs = {
  slug: string;
  href: string;
  mediaElement: HTMLElement;
  imageSrc?: string;
  videoSrc?: string;
  posterSrc?: string;
  objectFit?: "cover" | "contain";
};

type ProjectTransitionContextValue = {
  activeSlug: string | null;
  openProject: (args: OpenProjectArgs) => void;
  registerTarget: (slug: string, element: HTMLElement | null) => void;
};

const ProjectTransitionContext =
  createContext<ProjectTransitionContextValue | null>(null);

function toRect(element: HTMLElement): Rect {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height,
  };
}

export function ProjectTransitionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();
  const [overlay, setOverlay] = useState<OverlayState | null>(null);
  const overlayRef = useRef<OverlayState | null>(null);
  const timeoutRef = useRef<number | null>(null);

  overlayRef.current = overlay;

  const clearOverlay = useCallback(() => {
    setOverlay(null);
    lenis?.start();
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [lenis]);

  const openProject = useCallback(
    ({
      slug,
      href,
      mediaElement,
      imageSrc,
      videoSrc,
      posterSrc,
      objectFit = "cover",
    }: OpenProjectArgs) => {
      lenis?.stop();
      setOverlay({
        slug,
        imageSrc,
        videoSrc,
        posterSrc,
        objectFit,
        from: toRect(mediaElement),
        to: null,
      });
      router.push(href);
      timeoutRef.current = window.setTimeout(() => {
        if (overlayRef.current) clearOverlay();
      }, 1800);
    },
    [clearOverlay, lenis, router]
  );

  const registerTarget = useCallback((slug: string, element: HTMLElement | null) => {
    if (!element) return;

    setOverlay((current) => {
      if (!current || current.slug !== slug || current.to) return current;
      return { ...current, to: toRect(element) };
    });
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!overlay) lenis?.start();
  }, [lenis, overlay, pathname]);

  return (
    <ProjectTransitionContext.Provider
      value={{
        activeSlug: overlay?.slug ?? null,
        openProject,
        registerTarget,
      }}
    >
      {children}

      {overlay ? (
        <>
          <motion.div
            className="pointer-events-none fixed inset-0 z-[70] bg-[#030303]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          />
          <motion.div
            className="pointer-events-none fixed z-[71] overflow-hidden bg-[#030303]"
            initial={overlay.from}
            animate={overlay.to ?? overlay.from}
            transition={{
              duration: overlay.to ? 0.85 : 0,
              ease: [0.65, 0.05, 0.36, 1],
            }}
            onAnimationComplete={() => {
              if (overlayRef.current?.to) clearOverlay();
            }}
          >
            {overlay.videoSrc ? (
              <video
                src={overlay.videoSrc}
                poster={overlay.posterSrc}
                autoPlay
                muted
                loop
                playsInline
                className={`h-full w-full ${
                  overlay.objectFit === "contain"
                    ? "object-contain"
                    : "object-cover"
                }`}
              />
            ) : overlay.imageSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={overlay.imageSrc}
                alt=""
                className={`h-full w-full ${
                  overlay.objectFit === "contain"
                    ? "object-contain"
                    : "object-cover"
                }`}
              />
            ) : null}
          </motion.div>
        </>
      ) : null}
    </ProjectTransitionContext.Provider>
  );
}

export function useProjectTransition() {
  const context = useContext(ProjectTransitionContext);
  const router = useRouter();

  if (!context) {
    return {
      activeSlug: null,
      openProject: ({ href }: OpenProjectArgs) => {
        router.push(href);
      },
      registerTarget: () => {},
    };
  }

  return context;
}
