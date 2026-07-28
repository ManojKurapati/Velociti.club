"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device is touch or small screen, bypass custom cursor
    if (window.matchMedia("(max-width: 1024px)").matches) return;

    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    
    const onMouseMove = (e: MouseEvent) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
    };

    let animationFrameId: number;

    const animateCursor = () => {
      // Smooth lerp for trailing effect
      currentX += (cursorX - currentX) * 0.18;
      currentY += (cursorY - currentY) * 0.18;

      if (cursorRef.current) {
        // Shift by -12px, -4px so that the apex of the inverted V SVG is exactly under the pointer tip
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-12px, -4px)`;
      }
      animationFrameId = requestAnimationFrame(animateCursor);
    };

    window.addEventListener("mousemove", onMouseMove);
    animationFrameId = requestAnimationFrame(animateCursor);

    // Add glowing hover states for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.cursor-pointer')
      ) {
        gsap.to(iconRef.current, { 
          scale: 1.3, 
          filter: "drop-shadow(0px 0px 8px rgba(0, 240, 255, 1))", 
          duration: 0.2 
        });
      }
    };

    const handleMouseOut = () => {
      gsap.to(iconRef.current, { 
        scale: 1, 
        filter: "drop-shadow(0px 0px 4px rgba(0, 240, 255, 0.6))", 
        duration: 0.2 
      });
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
      style={{ transform: 'translate3d(-100px, -100px, 0)' }}
    >
      <div 
        ref={iconRef}
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

