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
    name: "L&M Energy",
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
  return (
    <div className="w-full py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-6">
        <p className="text-sm text-cool-gray-500 shrink-0">Trusted by operations teams at</p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6">
          {logos.map((logo) => (
            <li key={logo.name} className="font-display font-medium text-lg text-cool-gray-400 whitespace-nowrap">
              {logo.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
