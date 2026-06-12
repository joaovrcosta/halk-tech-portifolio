"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import halkLogoWhite from "../../public/halk-logo.svg";
import halkLogoDark from "../../public/halk-logo-dark.svg";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type HeaderTheme = "light" | "dark";

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

function detectThemeAt(x: number, y: number): HeaderTheme {
  const elements = document.elementsFromPoint(x, y);

  for (const el of elements) {
    if (el.closest("header")) continue;

    let element = el as HTMLElement;

    while (element && element !== document.documentElement) {
      const dataTheme = element.dataset.headerTheme;
      if (dataTheme === "light" || dataTheme === "dark") {
        return dataTheme;
      }

      const { backgroundColor } = window.getComputedStyle(element);
      const match = backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);

      if (
        match &&
        !backgroundColor.includes(", 0)") &&
        backgroundColor !== "transparent"
      ) {
        const r = Number(match[1]);
        const g = Number(match[2]);
        const b = Number(match[3]);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminance > 0.6 ? "light" : "dark";
      }

      element = element.parentElement as HTMLElement;
    }
  }

  return "dark";
}

function detectHeaderThemes() {
  const logoX = 120;
  const navX = Math.max(window.innerWidth - 160, logoX + 1);
  const y = 72;

  return {
    logo: detectThemeAt(logoX, y),
    nav: detectThemeAt(navX, y),
  };
}

export function Header() {
  const pathname = usePathname();
  const [scrolling, setScrolling] = useState(false);
  const [logoTheme, setLogoTheme] = useState<HeaderTheme>(
    pathname === "/projects" ? "light" : "dark"
  );
  const [navTheme, setNavTheme] = useState<HeaderTheme>("dark");
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  const logo = logoTheme === "light" ? halkLogoDark : halkLogoWhite;
  const textColor = navTheme === "light" ? "text-black" : "text-white";
  const buttonColor = navTheme === "light" ? "text-white" : "text-black";
  const bgColor = navTheme === "light" ? "bg-black" : "bg-white";
  const menuColor = navTheme === "light" ? "text-black" : "text-white";
  const linkHoverColor = "hover:text-[#86858B]";
  const contactHoverColor =
    navTheme === "light" ? "hover:text-black" : "hover:text-white";

  useLayoutEffect(() => {
    const updateThemes = () => {
      const themes = detectHeaderThemes();
      setLogoTheme(themes.logo);
      setNavTheme(themes.nav);
    };

    updateThemes();
    window.addEventListener("scroll", updateThemes, { passive: true });
    window.addEventListener("resize", updateThemes);

    return () => {
      window.removeEventListener("scroll", updateThemes);
      window.removeEventListener("resize", updateThemes);
    };
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHideOnScroll(true);
      } else {
        setHideOnScroll(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 transform ${hideOnScroll ? "-translate-y-full" : "translate-y-0"
        } ${scrolling
          ? "backdrop-brightness-90 lg:py-2 lg:px-16 p-6"
          : "backdrop-blur lg:py-6 lg:px-28 p-4"
        }`}
    >
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <Image src={logo} alt="Halk Bankası" height={16} />
        </Link>

        <ul
          className={`hidden md:flex space-x-10 text-[16px] ${textColor} font-poppins items-center font-extralight`}
        >
          <Link href="/projects">
            <li
              className={`${linkHoverColor} transition-all duration-150 ease-in cursor-pointer`}
            >
              Work
            </li>
          </Link>
          <li
            className={`${linkHoverColor} transition-all duration-150 ease-in cursor-pointer`}
          >
            About
          </li>
          <li
            className={`${contactHoverColor} transition-all duration-150 ease-in cursor-pointer`}
          >
            Contact
          </li>
          <li>
            <button
              className={`hidden md:block text-[16px] ${bgColor} ${buttonColor} px-4 py-[6px] rounded-full border border-[#86858B] hover:bg-[#86858B] cursor-pointer transition-all duration-150 ease-in hover:text-white`}
            >
              Book now
            </button>
          </li>
        </ul>

        <div className="md:hidden">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger aria-label="Open menu">
              <Menu className={`w-6 h-6 ${menuColor} cursor-pointer`} />
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
                  <p className="max-w-[280px] font-serif text-[2rem] font-light leading-[1.15] text-white">
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
