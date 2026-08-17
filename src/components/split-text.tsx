"use client";

import { motion } from "framer-motion";

const revealEase = [0.22, 1, 0.36, 1] as const;

export function SplitText({
  text,
  by = "letter",
  delay = 0,
  stagger = 0.028,
}: {
  text: string;
  by?: "letter" | "word";
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, wordIndex) => {
        const chars = by === "word" ? [word] : Array.from(word);
        const previousChars = words
          .slice(0, wordIndex)
          .reduce((total, item) => total + (by === "word" ? 1 : item.length), 0);

        return (
          <span
            key={`${word}-${wordIndex}`}
            className="inline-flex whitespace-nowrap"
          >
            {chars.map((char, charIndex) => (
              <span key={`${char}-${charIndex}`} className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", opacity: 0.12, filter: "blur(8px)" }}
                  animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.85,
                    delay: delay + (previousChars + charIndex) * stagger,
                    ease: revealEase,
                  }}
                >
                  {char}
                </motion.span>
              </span>
            ))}
            {wordIndex < words.length - 1 ? (
              <span className="inline-block w-[0.32em]">&nbsp;</span>
            ) : null}
          </span>
        );
      })}
    </>
  );
}
