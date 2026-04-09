import React from "react";

interface LogoProps {
  className?: string;
  withText?: boolean;
}

export const Logo = ({ className, withText = true }: LogoProps) => {
  return (
    <div className={`flex items-center gap-3 ${className || ""}`}>
      <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shrink-0">
        {/* Glassmorphic 3D rendering representation with SVG */}
        <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/20 to-neon-violet/20 rounded-full blur-[4px]"></div>
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]"
        >
          {/* Infinity Loop */}
          <path
            d="M 22,32 C 22,22 10,22 10,32 C 10,42 22,42 32,32 C 42,22 54,22 54,32 C 54,42 42,42 32,32 C 22,22 10,22 10,32 Z"
            stroke="url(#infinity-grad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-90"
          />
          {/* Arrow breaking through */}
          <path
            d="M 28,32 L 40,20 M 40,20 L 30,20 M 40,20 L 40,30"
            stroke="#00F0FF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-100 drop-shadow-[0_0_5px_rgba(0,240,255,1)]"
          />

          <defs>
            <linearGradient id="infinity-grad" x1="10" y1="32" x2="54" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00F0FF" />
              <stop offset="1" stopColor="#9D4EDD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {withText && (
        <span className="font-display font-bold text-xl tracking-tight text-white select-none">
          Velociti<span className="text-neon-cyan">.</span>
        </span>
      )}
    </div>
  );
};
