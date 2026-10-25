"use client";

import { useState, type ComponentType } from "react";
import { chatCopy } from "@/content/chat";
import { track } from "@/lib/analytics";

type PanelProps = { onClose: () => void };

/**
 * Floating "Ask Velociti" button. The chat panel and its search engine are
 * loaded only on first open, so they add nothing to the initial page weight.
 */
export function ChatLauncher() {
  const [open, setOpen] = useState(false);
  const [Panel, setPanel] = useState<ComponentType<PanelProps> | null>(null);

  const toggle = async () => {
    if (open) return setOpen(false);
    if (!Panel) {
      const mod = await import("./ChatPanel");
      setPanel(() => mod.ChatPanel);
    }
    setOpen(true);
    track("chat_opened", { location: window.location.pathname });
  };

  return (
    <>
      {open && Panel && <Panel onClose={() => setOpen(false)} />}
      <button
        type="button"
        onClick={toggle}
        aria-label={open ? "Close chat" : chatCopy.launcherLabel}
        aria-expanded={open}
        className="fixed z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-[0_8px_24px_rgba(15,17,21,0.25)] transition-transform hover:scale-105"
        style={{ right: "max(20px, env(safe-area-inset-right))", bottom: "max(20px, env(safe-area-inset-bottom))" }}
      >
        {open ? (
          <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4h0A1.5 1.5 0 0 1 4 14.5z" strokeLinejoin="round" />
            <circle cx="9" cy="9.5" r="1" fill="currentColor" stroke="none" />
            <circle cx="12" cy="9.5" r="1" fill="currentColor" stroke="none" />
            <circle cx="15" cy="9.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        )}
      </button>
    </>
  );
}
