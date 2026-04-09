import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function useScrollReveal(ref: React.RefObject<HTMLElement | null>, options = {}) {
  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;
    
    const elements = ref.current.querySelectorAll('.gs-reveal');
    if (elements.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(elements, 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.15, 
          ease: "power3.out", 
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            ...options
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [ref, options]);
}
