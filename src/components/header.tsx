"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import halkLogo from "../../public/halksolutions.svg";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { cn } from "@/lib/utils";
import { WorkFilters } from "@/components/work-filters";
import { useContactModal } from "@/components/contact-modal";

type MenuEntry =
  | { kind: "link"; href: string; label: string }
  | { kind: "label"; label: string }
  | { kind: "contact"; label: string };

const menuEntries: MenuEntry[] = [
  { kind: "link", href: "/", label: "Home" },
  { kind: "link", href: "/#about", label: "About" },
  { kind: "link", href: "/projects", label: "Work" },
  { kind: "label", label: "Projects" },
  { kind: "link", href: "/projects/the-truth-lies", label: "The Truth Lies" },
  { kind: "link", href: "/projects/isadora-online", label: "Isadora Online" },
  { kind: "link", href: "/projects/farmrio", label: "Farm Rio" },
  { kind: "link", href: "/projects/vans", label: "Vans" },
  { kind: "contact", label: "Contact" },
];

const menuContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Header() {
  const pathname = usePathname();
  const { toggle: toggleContact, isOpen: isContactOpen } = useContactModal();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const hiddenRef = useRef(false);
  const hideEnabledRef = useRef(false);

  hideEnabledRef.current = pathname === "/projects" && !menuOpen;
  const isWorkCatalog = pathname === "/projects";

  useLenis(({ scroll, direction }) => {
    let nextHidden = hiddenRef.current;

    if (!hideEnabledRef.current || scroll < 96) {
      nextHidden = false;
    } else if (direction > 0) {
      nextHidden = true;
    } else if (direction < 0) {
      nextHidden = false;
    }

    if (hiddenRef.current !== nextHidden) {
      hiddenRef.current = nextHidden;
      setHidden(nextHidden);
    }
  });

  useEffect(() => {
    hiddenRef.current = false;
    setHidden(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("header-hidden", hidden);

    return () => {
      document.documentElement.classList.remove("header-hidden");
    };
  }, [hidden]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-[80] w-full",
        isWorkCatalog
          ? "border-b border-white/10 bg-[#0e0e0e]/70 backdrop-blur-xl"
          : "mix-blend-difference",
        !isWorkCatalog && hidden && "-translate-y-[120%] pointer-events-none"
      )}
    >
      <div
        className={cn(
          isWorkCatalog && "overflow-hidden transition-[grid-template-rows] duration-300 grid",
          isWorkCatalog && (hidden ? "grid-rows-[0fr]" : "grid-rows-[1fr]")
        )}
      >
        <div className={cn(isWorkCatalog && "min-h-0 overflow-hidden")}>
          <div className="flex h-12 items-center justify-between px-[6vw] pb-3 pt-6 md:h-auto md:pt-8">
            <Link href="/" className="flex items-center">
              <Image
                src={halkLogo}
                alt="Halk Solutions"
                height={24}
                className="block h-5 w-auto md:h-6"
              />
            </Link>

            <ul className="hidden items-center space-x-10 text-[16px] font-extralight text-white md:flex">
              <Link href="/projects">
                <li className="cursor-pointer transition-all duration-150 ease-in hover:opacity-70">
                  [WORK]
                </li>
              </Link>
              <Link href="/#about">
                <li className="cursor-pointer transition-all duration-150 ease-in hover:opacity-70">
                  [ABOUT]
                </li>
              </Link>
              <li>
                <button
                  type="button"
                  data-contact-trigger
                  onPointerDown={(event) => event.stopPropagation()}
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    toggleContact();
                  }}
                  aria-expanded={isContactOpen}
                  className="hidden cursor-pointer rounded-full bg-white px-4 font-normal py-[6px] text-[16px] text-black transition-all duration-150 ease-in hover:bg-[#e8e8e8] md:block"
                >
                  GET IN TOUCH
                </button>
              </li>
            </ul>

            <div className="flex items-center md:hidden">
              <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                <SheetTrigger
                  aria-label="Open menu"
                  className="inline-flex size-8 shrink-0 items-center justify-center p-0 text-white outline-none"
                >
                  <Menu className="size-5" strokeWidth={1.75} />
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="z-[211] w-[90%] max-w-none border-none bg-[#0e0e0e] p-0 gap-0 sm:max-w-full [&>button:last-child]:hidden"
                >
                  <div className="flex h-full flex-col px-8 py-10">
                    <motion.div
                      className="mb-16 flex items-center gap-3"
                      initial={{ opacity: 0, y: -16 }}
                      animate={
                        menuOpen
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: -16 }
                      }
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <SheetClose className="rounded-sm opacity-80 transition-opacity hover:opacity-100 focus:outline-none">
                        <X className="size-5 text-white" strokeWidth={1.5} />
                        <span className="sr-only">Close menu</span>
                      </SheetClose>
                      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                        Menu
                      </span>
                    </motion.div>

                    <motion.nav
                      className="flex flex-col gap-8"
                      variants={menuContainerVariants}
                      initial="hidden"
                      animate={menuOpen ? "visible" : "hidden"}
                    >
                      {menuEntries.map((entry) =>
                        entry.kind === "label" ? (
                          <motion.span
                            key={entry.label}
                            variants={menuItemVariants}
                            className="text-xs font-medium uppercase tracking-[0.18em] text-[#9B9B9B]"
                          >
                            {entry.label}
                          </motion.span>
                        ) : entry.kind === "contact" ? (
                          <motion.div key={entry.label} variants={menuItemVariants}>
                            <SheetClose asChild>
                              <button
                                type="button"
                                onClick={() => {
                                  window.setTimeout(toggleContact, 200);
                                }}
                                className="text-left text-md font-normal uppercase tracking-wide text-white"
                              >
                                {entry.label}
                              </button>
                            </SheetClose>
                          </motion.div>
                        ) : (
                          <motion.div key={entry.label} variants={menuItemVariants}>
                            <SheetClose asChild>
                              <Link
                                href={entry.href}
                                className="text-md font-normal uppercase tracking-wide text-white"
                              >
                                {entry.label}
                              </Link>
                            </SheetClose>
                          </motion.div>
                        )
                      )}
                    </motion.nav>

                    <motion.div
                      className="mt-auto pt-16"
                      initial={{ opacity: 0, y: 24 }}
                      animate={
                        menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: menuOpen ? 0.55 : 0,
                        ease: "easeOut",
                      }}
                    >
                      <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-[#9B9B9B]">
                        @halksolutions
                      </p>
                      <p className="max-w-[280px] text-[2rem] font-light leading-[1.15] text-white">
                        Grow your brand, think different
                      </p>
                    </motion.div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {isWorkCatalog ? (
        <div className="px-[6vw] py-3">
          <Suspense fallback={<div className="h-10" />}>
            <WorkFilters />
          </Suspense>
        </div>
      ) : null}
    </header>
  );
}
