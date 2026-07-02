"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { XIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export interface ProjectPreviewItem {
  alt: string;
  title: string;
  description: string;
  url: string;
  fit?: "cover" | "contain";
  src?: StaticImageData;
  video?: string;
  poster?: StaticImageData;
  videoCrop?: "left" | "right";
}

interface ProjectPreviewModalProps {
  item: ProjectPreviewItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function SeeWorkButton({
  href,
  onClick,
}: {
  href: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative inline-flex h-12 items-center overflow-hidden rounded-full border border-black/10 px-8"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-[#f3f3f3] transition-transform duration-500 ease-out group-hover:scale-[12]"
      />
      <span className="relative z-10 text-sm font-medium tracking-wide text-black">
        See Work
      </span>
    </Link>
  );
}

export default function ProjectPreviewModal({
  item,
  open,
  onOpenChange,
}: ProjectPreviewModalProps) {
  if (!item) return null;

  const fit = item.fit ?? "contain";
  const objectClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-[1012px] overflow-hidden rounded-2xl border-0 bg-white p-0 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
        <DialogClose className="absolute top-5 right-5 z-20 flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-white text-black transition-colors hover:bg-[#f3f3f3]">
          <XIcon className="size-4" strokeWidth={1.5} />
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className="relative flex min-h-[420px] flex-col md:aspect-[1012/598] md:min-h-0 md:flex-row">
          <div className="relative h-[240px] w-full shrink-0 md:absolute md:inset-y-0 md:left-0 md:h-full md:w-[58.7%]">
            {item.video ? (
              <video
                src={item.video}
                poster={item.poster?.src}
                autoPlay
                muted
                loop
                playsInline
                className={`absolute inset-0 h-full w-full ${objectClass} bg-[#f4f4f4]`}
              />
            ) : item.src ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className={`${objectClass} bg-[#f4f4f4]`}
                sizes="(max-width: 768px) 100vw, 594px"
                priority
              />
            ) : null}
          </div>

          <div className="flex flex-1 flex-col justify-between px-8 py-8 md:absolute md:top-9 md:right-0 md:h-[calc(100%-4.5rem)] md:w-[38.2%] md:px-0 md:pr-10 md:py-0">
            <div className="space-y-5 md:max-w-[386px]">
              <DialogTitle className="text-[1.75rem] font-medium leading-tight tracking-[-0.02em] text-black md:text-[2rem]">
                {item.title}
              </DialogTitle>
              <DialogDescription className="text-[15px] leading-[1.65] text-black/65 md:text-base">
                {item.description}
              </DialogDescription>
            </div>

            <div className="mt-8 md:mt-0">
              <SeeWorkButton
                href={item.url}
                onClick={() => onOpenChange(false)}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
