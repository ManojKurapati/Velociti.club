"use client";

import { useEffect } from "react";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/**
 * Calendly inline embed as a plain iframe (no third-party widget script).
 * Name and email are prefilled via URL params; bookings are tracked from
 * Calendly's postMessage events.
 */
export function CalendlyEmbed({ name, email, className }: { name?: string; email?: string; className?: string }) {
  const params = new URLSearchParams({
    embed_type: "Inline",
    embed_domain: site.domain,
    hide_gdpr_banner: "1",
    primary_color: "2b4bff",
  });
  if (name) params.set("name", name);
  if (email) params.set("email", email);
  const src = `${site.calendlyUrl}?${params.toString()}`;

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;
      const event = (e.data as { event?: string } | undefined)?.event;
      if (event === "calendly.event_scheduled") {
        track("meeting_booked", { meeting_type: "workflow_audit", location: window.location.pathname });
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className={cn("overflow-hidden rounded-[20px] border border-line bg-surface", className)}>
      <iframe src={src} title="Book a 30-minute workflow audit with a Velociti engineer" className="h-[720px] w-full" loading="lazy" />
    </div>
  );
}
