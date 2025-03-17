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
    <div className="relative">
      <ul
        ref={ulRef}
        className="relative border border-[#86858B] rounded-full flex py-0 px-6 mt-12 space-x-12 text-white overflow-hidden backdrop-blur-lg transition-all duration-300 ease-in-out"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          position: "relative",
          background: isHovering
            ? `radial-gradient(circle at ${hoverPosition.x}px ${hoverPosition.y}px, rgba(0, 183, 255, 0.3) 0%, rgba(0, 0, 0, 0) 20%) `
            : "transparent",
          transition: "background 0.5s ease-out",
          cursor: "pointer",
        }}
      >
        <li className="relative z-10 px-4 py-2">Design</li>
        <li className="relative z-10 px-4 py-2">Desenvolvimento</li>
        <li className="relative z-10 px-4 py-2">Business</li>
      </ul>
    </div>
  );
}
