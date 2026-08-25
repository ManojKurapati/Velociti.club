"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device is touch or small screen, bypass custom cursor
    if (window.matchMedia("(max-width: 1024px)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Shift by -12px, -4px so that the apex of the inverted V SVG is exactly under the pointer tip
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-12px, -4px)`;
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
      style={{ transform: 'translate3d(-100px, -100px, 0)' }}
    >
      <div 
        className="origin-center"
        style={{ filter: "drop-shadow(0px 0px 4px rgba(0, 240, 255, 0.6))" }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M12 4L3 18H6L12 8L18 18H21L12 4Z" 
            fill="#00f0ff"
          />
        </svg>
      </div>
    </div>
  );
}


