"use client";

import Link from "next/link";
import { announcement } from "@/content/site";

export const ANNOUNCE_KEY = "vc_announce_dismissed";

export function AnnouncementBar() {
  const dismiss = () => {
    try {
      localStorage.setItem(ANNOUNCE_KEY, announcement.id);
    } catch {}
    document.documentElement.setAttribute("data-announce-dismissed", "");
  };

  return (
    <div data-announcement className="night relative bg-night text-[14px] text-night-body">
      <div className="container-site flex min-h-11 items-center justify-center gap-3 py-2 pr-12 text-center">
        <span className="t-mono rounded-full border border-night-line px-2 py-0.5 text-cobalt-on-night">{announcement.label}</span>
        <p className="leading-snug">
          {announcement.text}{" "}
          <Link href={announcement.href} className="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white" data-track="Announcement bar">
            {announcement.linkText} →
          </Link>
        </p>
      </div>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-night-body hover:text-white"
      >
        <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
