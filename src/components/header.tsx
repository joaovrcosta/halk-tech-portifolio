"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import halkLogo from "../../public/halk-logo.svg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [scrolling, setScrolling] = useState(false);

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
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        scrolling
          ? "backdrop-brightness-90 lg:py-2 lg:px-16 p-6"
          : "backdrop-blur lg:py-4 lg:px-8 p-4"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <Image src={halkLogo} alt="Halk Bankası" />
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-10 text-[10px] text-[#787878]">
          <Link href="/">
            <li className="hover:text-white transition-all duration-150 ease-in cursor-pointer">
              HOME
            </li>
          </Link>
          <li className="hover:text-white transition-all duration-150 ease-in cursor-pointer">
            ABOUT
          </li>
          <Link href="/projects">
            <li className="hover:text-white transition-all duration-150 ease-in cursor-pointer">
              WORK
            </li>
          </Link>
          {/* <li className="hover:text-white transition-all duration-150 ease-in cursor-pointer">
            CONTACT
          </li> */}
        </ul>

        {/* Botão Desktop */}
        <button className="hidden md:block text-sm bg-transparent text-white px-4 py-2 rounded-full border border-[#86858B] hover:bg-[#86858B] cursor-pointer transition-all duration-150 ease-in">
          Book now
        </button>

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
