"use client";

import { useState, useEffect } from "react";
import mixpanel from "mixpanel-browser";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initialize Mixpanel client-side
    const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || "dd9626abae8f1a7c91052bf7f765f5b8";
    const debug = process.env.NODE_ENV === "development";
    
    mixpanel.init(MIXPANEL_TOKEN, {
      debug,
      opt_out_tracking_by_default: true,
      persistence: "localStorage",
    });

    const consent = localStorage.getItem("velociti_cookie_consent");
    if (consent === "accepted") {
      mixpanel.opt_in_tracking();
    } else if (!consent) {
      setIsVisible(true);
    }

    // Set up auto-tracking for Calendly links globally on the document
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.href.includes("calendly.com")) {
        // Track the click event
        mixpanel.track("calendly_link_clicked", {
          url: anchor.href,
          text: anchor.textContent?.trim() || "",
          location: window.location.pathname
        });
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem("velociti_cookie_consent", "accepted");
    mixpanel.opt_in_tracking();
    
    // Track the consent grant event
    mixpanel.track("consent_granted", {
      consent_type: "cookies",
      platform: "web"
    });
    
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("velociti_cookie_consent", "declined");
    mixpanel.opt_out_tracking();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md bg-surface border border-line rounded-lg p-5 shadow-2xl shadow-black/50 z-[9999] backdrop-blur-md flex flex-col gap-4">
      <div>
        <h4 className="text-white font-semibold mb-1 text-sm">Cookies</h4>
        <p className="text-sm text-cool-gray-400 leading-relaxed">
          We use analytics cookies to understand how the site is used. Nothing is tracked unless you accept.
        </p>
      </div>
      <div className="flex gap-3 justify-end">
        <button 
          onClick={handleDecline} 
          className="h-8 px-3 rounded-md text-sm text-cool-gray-400 hover:text-white hover:bg-raised transition-colors cursor-pointer"
        >
          Decline
        </button>
        <button 
          onClick={handleAccept} 
          className="h-8 px-3 rounded-md bg-white text-black text-sm font-medium hover:bg-cool-gray-200 transition-colors cursor-pointer"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
