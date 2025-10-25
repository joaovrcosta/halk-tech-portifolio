"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import halkLogoWhite from "../../public/halk-logo.svg";
import halkLogoDark from "../../public/halk-logo-dark.svg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const logo = isHomePage ? halkLogoWhite : halkLogoDark;
  const textColor = isHomePage ? "text-white" : "text-black";
  const buttonColor = isHomePage ? "text-black" : "text-white";
  const bgColor = isHomePage ? "bg-white" : "bg-black";

  const [hideOnScroll, setHideOnScroll] = useState(false);
  const lastScrollY = useRef(0);

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true); // diminui o padding
      } else {
        setScrolling(false); // volta ao padding original
      }
    };

    window.addEventListener("scroll", handleScroll);

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
        {/* Logo */}
        <Link href={"/"}>
          <Image src={logo} alt="Halk Bankası" height={16} />
        </Link>

        {/* Menu Desktop */}
        <ul
          className={`hidden md:flex space-x-10 text-[16px] ${textColor} font-poppins items-center font-extralight`}
        >
          {/* <Link href="/">
            <li className="hover:text-[#86858B] transition-all duration-150 ease-in cursor-pointer ">
              Home
            </li>
          </Link> */}
          <Link href="/projects">
            <li className="hover:text-[#86858B] transition-all duration-150 ease-in cursor-pointer">
              Work
            </li>
          </Link>
          <li className="hover:text-[#86858B] transition-all duration-150 ease-in cursor-pointer">
            About
          </li>
          <li className="hover:text-white transition-all duration-150 ease-in cursor-pointer">
            Contact
          </li>
          <li>
            {/* Botão Desktop */}
            <button
              className={`hidden md:block text-[16px] ${bgColor} ${buttonColor} px-4 py-[6px] rounded-full border border-[#86858B] hover:bg-[#86858B] cursor-pointer transition-all duration-150 ease-in hover:text-white`}
            >
              Book now
            </button>
          </li>
        </ul>

        {/* Menu Mobile - Sheet */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 text-white cursor-pointer" />
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
