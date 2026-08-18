import React from "react";
import Content from "./content";

export default function Footer() {
  return (
    <div
      id="site-footer"
      className="relative z-0 h-[100svh] min-h-[720px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 z-0 h-[100svh] min-h-[720px] w-full">
        <Content />
      </div>
    </div>
  );
}
