"use client";
import { useState } from "react";

export default function MotionButton({ label = "Get started" }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Corner brackets — negative offset to sit ON the border */}
      <span className={`absolute -top-1 -left-1 w-[11px] h-[11px] border-t-[2.5px] border-l-[2.5px] pointer-events-none transition-all duration-200 ${hovered ? "border-[#000000]" : "border-transparent"}`} />
      <span className={`absolute -top-1 -right-1 w-[11px] h-[11px] border-t-[2.5px] border-r-[2.5px] pointer-events-none transition-all duration-200 ${hovered ? "border-[#000000]" : "border-transparent"}`} />
      <span className={`absolute -bottom-1 -left-1 w-[11px] h-[11px] border-b-[2.5px] border-l-[2.5px] pointer-events-none transition-all duration-200 ${hovered ? "border-[#000000]" : "border-transparent"}`} />
      <span className={`absolute -bottom-1 -right-1 w-[11px] h-[11px] border-b-[2.5px] border-r-[2.5px] pointer-events-none transition-all duration-200 ${hovered ? "border-[#000000]" : "border-transparent"}`} />

      <button
        className={`relative flex items-center gap-2 px-8 py-5 text-[15px] font-bold rounded-none overflow-hidden transition-all duration-200 ${
          hovered
            ? "bg-[#edc336] text-[#000000] border-[1.9px] border-dashed border-[#000000]"
            : "bg-[#0a0a0a] text-[#F5C300] border-none"
        }`}
      >
        <span
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: hovered
              ? "repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(0,0,0,0.08) 5px, rgba(0,0,0,0.08) 10px)"
              : "repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(245,195,0,0.13) 5px, rgba(245,195,0,0.13) 10px)",
          }}
        />
        <span className="relative z-10">{label}</span>
        <span
          className="relative z-10 transition-transform duration-200"
          style={{ transform: hovered ? "translate(3px, -3px)" : "translate(0,0)" }}
        >
          ↗
        </span>
      </button>
    </div>
  );
}