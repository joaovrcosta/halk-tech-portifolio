"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import halkLogoWhite from "../../public/halk-logo.svg";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

type MenuEntry =
  | { kind: "link"; href: string; label: string }
  | { kind: "label"; label: string };

const menuEntries: MenuEntry[] = [
  { kind: "link", href: "/", label: "Home" },
  { kind: "link", href: "#", label: "About" },
  { kind: "link", href: "/projects", label: "Work" },
  { kind: "label", label: "Projects" },
  { kind: "link", href: "/projects/the-truth-lies", label: "The Truth Lies" },
  { kind: "link", href: "/projects/isadora-online", label: "Isadora Online" },
  { kind: "link", href: "/projects/use-sneakers", label: "Use Sneakers" },
  { kind: "link", href: "#", label: "Contact" },
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
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-[80] w-full px-[6vw] mix-blend-difference transition-all duration-300 ${
        scrolling ? "pb-4 pt-8" : "pb-4 pt-8 lg:pb-6 lg:pt-10"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image src={halkLogoWhite} alt="Halk" height={24} />
        </Link>

        <ul className="hidden items-center space-x-10 text-[16px] font-extralight text-white md:flex">
          <Link href="/projects">
            <li className="cursor-pointer transition-all duration-150 ease-in hover:opacity-70">
              [WORK]
            </li>
          </Link>
          <li className="cursor-pointer transition-all duration-150 ease-in hover:opacity-70">
            [ABOUT]
          </li>
          <li className="cursor-pointer transition-all duration-150 ease-in hover:opacity-70">
            [CONTACT]
          </li>
          <li>
            <button className="hidden cursor-pointer rounded-full bg-white px-4 font-normal py-[6px] text-[16px] text-black transition-all duration-150 ease-in hover:bg-[#e8e8e8] md:block">
              BOOK NOW
            </button>
          </li>
        </ul>

        <div className="md:hidden">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger aria-label="Open menu">
              <Menu className="h-6 w-6 cursor-pointer text-white" />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[90%] max-w-none border-none bg-black p-0 gap-0 sm:max-w-full [&>button:last-child]:hidden"
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
    </header>
  );
}
