import React from "react";

const logos = [
  {
    name: "Alera Health",
    svg: (
      <svg viewBox="0 0 100 30" className="h-8 fill-current">
        <rect x="5" y="5" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M10,15 l5,5 l10,-10" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
    )
  },
  {
    name: "OQpin",
    svg: (
      <svg viewBox="0 0 100 30" className="h-8 fill-current">
        <circle cx="15" cy="15" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M35,25 v-20 h15 a5,5 0 0 1 5,5 v10 a5,5 0 0 1 -5,5 h-15 m5,-5 h10" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
    )
  },
  {
    name: "L&M logistics",
    svg: (
      <svg viewBox="0 0 100 30" className="h-8 fill-current">
        <path d="M10,15 L20,5 L30,15 L20,25 Z M35,5 h10 v20 h-10 Z M50,5 h20 v5 h-15 v5 h10 v5 h-10 v5 h-5 Z" />
      </svg>
    )
  },
  {
    name: "Emersn",
    svg: (
      <svg viewBox="0 0 100 30" className="h-8 fill-current">
        <path d="M5,25 l10,-20 l10,20 h-5 l-5,-10 l-5,10 z" />
      </svg>
    )
  },
  {
    name: "JCS info solutions",
    svg: (
      <svg viewBox="0 0 100 30" className="h-8 fill-current">
        <path d="M5,15 a10,10 0 1 1 20,0 h-20" fill="currentColor" />
        <path d="M15,15 v10 a3,3 0 0 0 6,0" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  },
  {
    name: "Bezvada Biomed",
    svg: (
      <svg viewBox="0 0 100 30" className="h-8 fill-current">
        <path d="M5,25 v-20 l10,10 l10,-10 v20" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
    )
  }
];

export function TrustBar() {
  // Duplicate logos array to ensure seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full relative overflow-hidden py-10 flex">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max animate-scroll">
        {duplicatedLogos.map((logo, index) => (
          <div 
            key={`${logo.name}-${index}`} 
            className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 text-cool-gray-400 hover:text-white"
          >
            {logo.svg}
            <span className="ml-3 font-display font-medium text-xl tracking-tight">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
