"use client";

import { useEffect } from "react";
import redirects from "@/redirects/redirects.json";

/** Maps old single-page anchors (e.g. /#case-studies) to their new routes. */
export function LegacyAnchorRedirect() {
  useEffect(() => {
    const target = (redirects.anchors as Record<string, string>)[window.location.hash];
    if (target) window.location.replace(target);
  }, []);
  return null;
}
