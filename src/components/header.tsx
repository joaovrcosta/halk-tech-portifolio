"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import halkLogoWhite from "../../public/halk-logo.svg";
import halkLogoDark from "../../public/halk-logo-dark.svg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderTheme = "light" | "dark";

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
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 transform ${
        hideOnScroll ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolling
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
          <Sheet>
            <SheetTrigger>
              <Menu className={`w-6 h-6 ${menuColor} cursor-pointer`} />
            </SheetTrigger>
            <SheetContent side="left">
              <ul className="space-y-6 text-lg text-gray-800">
                <li className="hover:text-blue-500 transition-all duration-150 ease-in cursor-pointer">
                  HOME
                </li>
                <li className="hover:text-blue-500 transition-all duration-150 ease-in cursor-pointer">
                  ABOUT
                </li>
                <li className="hover:text-blue-500 transition-all duration-150 ease-in cursor-pointer">
                  PROJECTS
                </li>
                <li className="hover:text-blue-500 transition-all duration-150 ease-in cursor-pointer">
                  CONTACT
                </li>
              </ul>
              <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md">
                Book now
              </button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
