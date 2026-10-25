"use client";

export const OPEN_CONSENT_EVENT = "velociti:open-consent";

export function CookieSettingsButton() {
  return (
    <button type="button" className="min-h-9 hover:text-ink" onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}>
      Cookie settings
    </button>
  );
}
