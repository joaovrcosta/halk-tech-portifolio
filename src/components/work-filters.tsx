"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import {
  parseWorkFilterId,
  workFilters,
  type WorkFilterId,
} from "@/lib/projects-data";
import { useLenis } from "lenis/react";
import { cn } from "@/lib/utils";

function buildWorkHref(filterId: WorkFilterId, query: string) {
  const params = new URLSearchParams();
  if (filterId !== "all") params.set("category", filterId);
  const trimmed = query.trim();
  if (trimmed) params.set("q", trimmed);
  const qs = params.toString();
  return qs ? `/projects?${qs}` : "/projects";
}

export function WorkFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeFilter = parseWorkFilterId(searchParams.get("category"));
  const queryFromUrl = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(queryFromUrl);
  const lenis = useLenis();

  const scrollToTop = () => {
    lenis?.scrollTo(0, { duration: 0.8 });
  };

  useEffect(() => {
    setQuery(queryFromUrl);
  }, [queryFromUrl]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (query.trim() === queryFromUrl.trim()) return;
      router.replace(buildWorkHref(activeFilter, query), { scroll: false });
    }, 250);

    return () => window.clearTimeout(timeout);
  }, [activeFilter, query, queryFromUrl, router]);

  return (
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
      <div className="flex flex-wrap items-center gap-1.5">
        {workFilters.map((filter) => {
          const isActive = activeFilter === filter.id;

          return (
            <Link
              key={filter.id}
              href={buildWorkHref(filter.id, query)}
              scroll={false}
              onClick={scrollToTop}
              className={cn(
                "inline-flex h-8 items-center rounded-full border px-3 text-[10px] font-medium uppercase leading-none tracking-[0.14em] transition-colors",
                isActive
                  ? "border-[#00C8FF] bg-[#00C8FF] text-black"
                  : "border-white/20 text-white/70 hover:border-white hover:text-white"
              )}
            >
              {filter.label}
            </Link>
          );
        })}
      </div>

      <label className="relative flex h-8 w-full max-w-[240px] items-center sm:w-auto sm:min-w-[220px]">
        <Search
          className="pointer-events-none absolute left-3 size-3.5 text-white/40"
          strokeWidth={1.75}
        />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by project or category"
          className="h-8 w-full rounded-full border border-white/20 bg-transparent py-0 pl-9 pr-9 text-[12px] text-white outline-none placeholder:text-white/35 focus:border-[#00C8FF]"
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-2.5 text-white/40 transition-colors hover:text-white"
          >
            <X className="size-3.5" strokeWidth={1.75} />
          </button>
        ) : null}
      </label>
    </div>
  );
}
