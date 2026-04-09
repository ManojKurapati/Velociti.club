import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const initGSAP = () => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    
    // Default configuration for smooth performance
    gsap.config({
      autoSleep: 60,
      force3D: true,
    });
    
    // Remove default gsap smoothing if Lenis is taking over
    gsap.ticker.lagSmoothing(0);
  }
};
