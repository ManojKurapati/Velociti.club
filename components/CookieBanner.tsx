"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { hasMixpanel, registerMixpanel, track, withMixpanel } from "@/lib/analytics";
import { OPEN_CONSENT_EVENT } from "@/components/site/CookieSettingsButton";
import { CONSENT_KEY } from "@/lib/storage-keys";

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

function loadMixpanel(onReady?: () => void) {
  const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
  if (!token) return;
  import("mixpanel-browser").then(({ default: mixpanel }) => {
    if (!hasMixpanel()) {
      mixpanel.init(token, {
        debug: process.env.NODE_ENV === "development",
        opt_out_tracking_by_default: true,
        persistence: "localStorage",
      });
      registerMixpanel(mixpanel);
    }
    onReady?.();
  });
}

/**
 * Consent banner. Server-rendered so it paints with the page; a pre-paint
 * script hides it (html[data-consent]) for visitors who already chose.
 * Mixpanel and GA4 are only downloaded after the visitor accepts.
 */
export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let consent: string | null = null;
    try {
      consent = localStorage.getItem(CONSENT_KEY);
    } catch {}
    if (consent === "accepted") {
      loadGoogleAnalytics();
      const ric = (window as unknown as { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
      const load = () => loadMixpanel(() => withMixpanel((mp) => mp.opt_in_tracking()));
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

    const reopen = () => {
      document.documentElement.removeAttribute("data-consent");
      setIsVisible(true);
    };
    document.addEventListener("click", handleDocumentClick);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
    };
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "accepted");
    } catch {}
    loadMixpanel(() =>
      withMixpanel((mixpanel) => {
        mixpanel.opt_in_tracking();
        mixpanel.track("consent_granted", {
          consent_type: "cookies",
          platform: "web",
        });
      }),
    );
    loadGoogleAnalytics();
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "declined");
    } catch {}
    // Only reachable if Mixpanel was loaded by an earlier "accept".
    if (hasMixpanel()) withMixpanel((mixpanel) => mixpanel.opt_out_tracking());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      data-consent-banner
      className="card fixed inset-x-4 bottom-4 z-40 flex flex-col gap-4 p-5 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-[420px]"
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
