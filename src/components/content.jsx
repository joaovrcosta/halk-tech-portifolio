"use client";

import Link from "next/link";
import { Instagram, Linkedin, Send } from "lucide-react";

function XIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

const menuLinks = [
  { href: "/projects", label: "Work" },
  { href: "#", label: "About" },
  { href: "#", label: "Contact" },
  { href: "/", label: "Home" },
];

const socials = [
  { href: "https://x.com/halksolutions", label: "X", icon: XIcon },
  { href: "https://www.linkedin.com/company/halksolutions", label: "LinkedIn", icon: Linkedin },
  { href: "https://instagram.com/halksolutions", label: "Instagram", icon: Instagram },
];

export default function Content() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-[#030303] px-[6vw] py-10 text-[#e8e8e8] md:py-14">
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
        <div>
          <p className="mb-5 text-[11px] uppercase tracking-[0.18em] text-white/45">
            Menu/
          </p>
          <nav className="flex flex-col gap-2.5">
            {menuLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[13px] uppercase tracking-[0.14em] text-white/85 transition-opacity hover:opacity-55"
              >
                [ {item.label} ]
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="mb-5 text-[11px] uppercase tracking-[0.18em] text-white/45">
            Studio/
          </p>
          <p className="text-[13px] leading-relaxed text-white/80">
            Digital product studio
          </p>
          <p className="mt-1 text-[13px] text-white/80">Brazil</p>
        </div>

        <div className="col-span-2 md:col-span-1">
          <p className="mb-5 text-[11px] uppercase tracking-[0.18em] text-white/45">
            Newsletter/
          </p>
          <form
            className="flex items-stretch gap-2"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              placeholder="EMAIL"
              className="h-10 min-w-0 flex-1 border border-white/20 bg-white/5 px-3 text-[11px] uppercase tracking-[0.16em] text-white outline-none placeholder:text-white/35"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="grid size-10 place-items-center border border-white/20 bg-white/5 text-white transition-colors hover:bg-white hover:text-black"
            >
              <Send className="size-3.5" strokeWidth={1.75} />
            </button>
          </form>
          <p className="mt-4 max-w-[28ch] text-[12px] leading-relaxed text-white/45">
            Receive occasional insights on product, design and digital experiences.
          </p>
        </div>

        <div>
          <p className="mb-5 text-[11px] uppercase tracking-[0.18em] text-white/45">
            Socials/
          </p>
          <div className="flex gap-2">
            {socials.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center border border-white/20 bg-white/5 text-white transition-colors hover:bg-white hover:text-black"
              >
                <Icon className="size-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <h2 className="mt-16 select-none text-[22vw] font-medium leading-[0.8] tracking-[-0.06em] text-white md:mt-10 md:text-[20vw]">
        HALK
      </h2>

      <div className="mt-8 flex flex-col gap-3 text-[10px] uppercase tracking-[0.16em] text-white/45 md:mt-4 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-6">
          <Link href="#" className="transition-opacity hover:text-white">
            Privacy policy
          </Link>
          <Link href="#" className="transition-opacity hover:text-white">
            Support
          </Link>
        </div>
        <p>© {new Date().getFullYear()} Halk Solutions. All rights reserved.</p>
      </div>
    </div>
  );
}
