import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  withText?: boolean;
}

export const Logo = ({ className, withText = true }: LogoProps) => {
  return (
    <div className={`flex items-center gap-3 ${className || ""}`}>
      <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shrink-0">
        {/* Subtle glassmorphic gold & deep blue glow to match the new logo */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-600/10 rounded-full blur-[6px]"></div>
        <Image
          src="/logo.png"
          alt="Velociti Logo"
          width={40}
          height={40}
          className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_6px_rgba(234,179,8,0.2)]"
          priority
        />
      </div>
      {withText && (
        <span className="font-display font-bold text-xl tracking-tight text-white select-none">
          Velociti<span className="text-neon-cyan">.</span>
        </span>
      )}
    </div>
  );
};
