"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device is touch or small screen, bypass cursor
    if (window.matchMedia("(max-width: 1024px)").matches) return;

    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;
    
    const onMouseMove = (e: MouseEvent) => {
      cursorX = e.clientX;
      cursorY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${cursorX}px`;
        dotRef.current.style.top = `${cursorY}px`;
      }
    };

    const animateCursor = () => {
      if (cursorRef.current) {
        const currentX = parseFloat(cursorRef.current.style.left) || cursorX;
        const currentY = parseFloat(cursorRef.current.style.top) || cursorY;
        
        // Fast lerp for smooth trailing effect
        const dx = cursorX - currentX;
        const dy = cursorY - currentY;
        
        cursorRef.current.style.left = `${currentX + dx * 0.2}px`;
        cursorRef.current.style.top = `${currentY + dy * 0.2}px`;
      }
      requestAnimationFrame(animateCursor);
    };

    window.addEventListener("mousemove", onMouseMove);
    requestAnimationFrame(animateCursor);

    // Add glowing hover states for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' || 
          target.closest('a') || 
          target.closest('button')) {
        gsap.to(cursorRef.current, { scale: 2.5, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "transparent", duration: 0.3 });
      }
    };

    const handleMouseOut = () => {
      gsap.to(cursorRef.current, { scale: 1, backgroundColor: "transparent", borderColor: "rgba(0, 240, 255, 0.5)", duration: 0.3 });
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neon-cyan/50 pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{ left: '-100px', top: '-100px' }}
      />
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-neon-cyan rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{ left: '-100px', top: '-100px' }}
      />
    </>
  );
}
