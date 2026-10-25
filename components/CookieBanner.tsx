"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { registerMixpanel, track, withMixpanel } from "@/lib/analytics";
import { OPEN_CONSENT_EVENT } from "@/components/site/CookieSettingsButton";

const CONSENT_KEY = "velociti_cookie_consent";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function loadGoogleAnalytics() {
  if (!GA_ID || document.getElementById("ga4")) return;
  const s = document.createElement("script");
  s.id = "ga4";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  const w = window as unknown as { dataLayer: unknown[]; gtag: (...args: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", GA_ID, { anonymize_ip: true });
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let consent: string | null = null;
    try {
      consent = localStorage.getItem(CONSENT_KEY);
    } catch {}
    if (!consent) setIsVisible(true);
    if (consent === "accepted") loadGoogleAnalytics();

    // Mixpanel is loaded after first paint to keep it off the critical path.
    const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
    let cancelled = false;
    if (token) {
      const load = () =>
        import("mixpanel-browser").then(({ default: mixpanel }) => {
          if (cancelled) return;
          mixpanel.init(token, {
            debug: process.env.NODE_ENV === "development",
            opt_out_tracking_by_default: true,
            persistence: "localStorage",
          });
          if (consent === "accepted") mixpanel.opt_in_tracking();
          registerMixpanel(mixpanel);
        });
      const ric = (window as unknown as { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
      if (ric) ric(load);
      else setTimeout(load, 1500);
    }

    // Delegated click tracking: Calendly links and every [data-track] CTA.
    const handleDocumentClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      if (anchor.href.includes("calendly.com")) {
        track("calendly_link_clicked", {
          url: anchor.href,
          text: anchor.textContent?.trim() || "",
          location: window.location.pathname,
        });
      }
      const label = anchor.getAttribute("data-track");
      if (label) {
        track("cta_clicked", {
          cta_text: label,
          destination: anchor.getAttribute("href") || "",
          location: window.location.pathname,
        });
      }
    };

    const reopen = () => setIsVisible(true);
    document.addEventListener("click", handleDocumentClick);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);

    return () => {
      cancelled = true;
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
    };
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "accepted");
    } catch {}
    withMixpanel((mixpanel) => {
      mixpanel.opt_in_tracking();
      mixpanel.track("consent_granted", {
        consent_type: "cookies",
        platform: "web",
      });
    });
    loadGoogleAnalytics();
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "declined");
    } catch {}
    withMixpanel((mixpanel) => mixpanel.opt_out_tracking());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="card fixed inset-x-4 bottom-4 z-[60] flex flex-col gap-4 p-5 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-[420px]"
    >
      <div>
        <p className="mb-1 text-[15px] font-semibold text-ink">Cookies</p>
        <p className="text-[14px] leading-relaxed">
          We use analytics cookies (Mixpanel, Google Analytics) to understand how the site is used. Nothing is tracked unless you accept. See our{" "}
          <Link href="/legal/cookies" className="link">
            cookie policy
          </Link>
          .
        </p>
      </div>
      <div className="flex justify-end gap-2">
        <button type="button" onClick={handleDecline} className="min-h-11 rounded-full border border-line px-5 text-[14px] font-medium text-ink hover:border-ink">
          Decline
        </button>
        <button type="button" onClick={handleAccept} className="min-h-11 rounded-full bg-ink px-5 text-[14px] font-medium text-white hover:bg-[#262a33]">
          Accept
        </button>
      </div>
    </div>
  );
}
