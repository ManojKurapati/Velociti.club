import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  withText?: boolean;
}

export const Logo = ({ className, withText = true }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2.5 ${className || ""}`}>
      <div className="relative w-7 h-7 flex items-center justify-center shrink-0">
        <Image
          src="/logo.png"
          alt="Velociti Logo"
          width={40}
          height={40}
          className="w-full h-full object-contain"
          priority
        />
      </div>
      {withText && (
        <span className="font-display font-semibold text-base text-white select-none">
          Velociti
        </span>
      )}
    </div>
  );
};
