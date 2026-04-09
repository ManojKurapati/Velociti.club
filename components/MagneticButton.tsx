"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function MagneticButton({ children, className = "", onClick, type = "button" }: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button || window.matchMedia("(max-width: 1024px)").matches) return;

    const hoverHandler = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
      
      gsap.to(button, {
        x: x,
        y: y,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const resetHandler = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    button.addEventListener("mousemove", hoverHandler);
    button.addEventListener("mouseleave", resetHandler);

    return () => {
      button.removeEventListener("mousemove", hoverHandler);
      button.removeEventListener("mouseleave", resetHandler);
    };
  }, []);

  return (
    <button 
      ref={buttonRef} 
      type={type}
      className={`interactive ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
