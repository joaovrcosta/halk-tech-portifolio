import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main
      data-header-theme="dark"
      className="flex min-h-screen flex-col items-start justify-center bg-[#0e0e0e] px-[6vw] text-white"
    >
      <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white/45">
        404
      </p>
      <h1 className="max-w-[12ch] text-5xl font-medium leading-[0.92] tracking-[-0.04em] md:text-7xl">
        Page not found
      </h1>
      <Link
        href="/"
        className="mt-10 text-xs uppercase tracking-[0.18em] text-white underline decoration-white/70 underline-offset-4 transition-opacity hover:opacity-60"
      >
        Back home
      </Link>
    </main>
  );
}
