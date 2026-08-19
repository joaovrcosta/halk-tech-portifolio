"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useLenis } from "lenis/react";
import {
  Dialog,
  DialogClose,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { getCalendlyEmbedUrl } from "@/lib/site";

type ContactModalContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(
  null
);

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return context;
}

function CalendlyDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const lenis = useLenis();
  const embedUrl = useMemo(() => getCalendlyEmbedUrl(), []);

  useEffect(() => {
    if (!lenis) return;
    if (open) lenis.stop();
    else lenis.start();

    return () => {
      lenis.start();
    };
  }, [lenis, open]);

  return (
    <Dialog modal={false} open={open} onOpenChange={onOpenChange}>
      <DialogPortal forceMount>
        <AnimatePresence>
          {open ? (
            <DialogPrimitive.Overlay asChild forceMount key="calendly-overlay">
              <motion.div
                className="fixed inset-0 z-[200] bg-black/45"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => onOpenChange(false)}
              />
            </DialogPrimitive.Overlay>
          ) : null}
          {open ? (
            <DialogPrimitive.Content
              forceMount
              asChild
              aria-describedby={undefined}
              key="calendly-content"
              onPointerDownOutside={(event) => {
                const target = event.target as HTMLElement | null;
                if (target?.closest("[data-contact-trigger]")) {
                  event.preventDefault();
                }
              }}
              onInteractOutside={(event) => {
                const target = event.target as HTMLElement | null;
                if (target?.closest("[data-contact-trigger]")) {
                  event.preventDefault();
                }
              }}
            >
              <motion.div
                className="pointer-events-none fixed inset-0 z-[201] flex items-center justify-center outline-none"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 56, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="pointer-events-auto flex w-[calc(100%-1.5rem)] max-w-[430px] flex-col items-center">
                  <DialogTitle className="sr-only">Get in touch</DialogTitle>
                  <div className="h-[min(700px,calc(100vh-9rem))] w-full overflow-hidden rounded-[20px] bg-[#1a1a1a]">
                    <iframe
                      title="Schedule a call with Halk Solutions"
                      src={embedUrl}
                      className="h-full w-full border-0"
                    />
                  </div>
                  <DialogClose
                    aria-label="Close"
                    className="mt-5 flex size-12 items-center justify-center rounded-full border border-white/15 bg-[#1a1a1a] text-white transition-colors hover:bg-[#242424]"
                  >
                    <X className="size-5" strokeWidth={1.5} />
                  </DialogClose>
                </div>
              </motion.div>
            </DialogPrimitive.Content>
          ) : null}
        </AnimatePresence>
      </DialogPortal>
    </Dialog>
  );
}

export function ContactModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);
  const toggleModal = useCallback(() => setOpen((current) => !current), []);
  const value = useMemo(
    () => ({
      isOpen: open,
      open: openModal,
      close: closeModal,
      toggle: toggleModal,
    }),
    [closeModal, open, openModal, toggleModal]
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <CalendlyDialog open={open} onOpenChange={setOpen} />
    </ContactModalContext.Provider>
  );
}

export function ContactModalBlur({ children }: { children: ReactNode }) {
  const { isOpen } = useContactModal();

  return (
    <div
      className={
        isOpen
          ? "pointer-events-none blur-[20px] brightness-[0.55] transition-[filter] duration-500"
          : "transition-[filter] duration-500"
      }
    >
      {children}
    </div>
  );
}
