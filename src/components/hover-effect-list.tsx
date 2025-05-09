import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";

export default function HoverLightEffect() {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const ulRef = useRef<HTMLUListElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
    if (!ulRef.current) return;
    const rect = ulRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoverPosition({ x, y });
  };

  return (
    <div className="relative mt-12">
      {/* camada de luz na borda */}
      <div className="glow-border" />

      <ul
        ref={ulRef}
        className="relative border border-[#86858B] rounded-full flex py-0 px-6 space-x-12 text-white overflow-hidden backdrop-blur-lg transition-all duration-300 ease-in-out z-10 font-thin"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          background: isHovering
            ? `radial-gradient(circle at ${hoverPosition.x}px ${hoverPosition.y}px, rgba(0, 183, 255, 0.3) 0%, rgba(0, 0, 0, 0) 20%)`
            : "transparent",
          transition: "background 0.5s ease-out",
          cursor: "pointer",
        }}
      >
        <li className="relative z-10 px-2 py-2">Design</li>
        <li className="relative z-10 px-0 py-2">
          <ArrowRight color="#00C8FF" />
        </li>
        <li className="relative z-10 px-2 py-2">Development</li>
        <li className="relative z-10 px-0 py-2">
          <ArrowRight color="#00C8FF" />
        </li>
        <li className="relative z-10 px-2 py-2">Growing</li>
      </ul>
    </div>
  );
}
