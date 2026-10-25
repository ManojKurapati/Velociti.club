"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import redirects from "@/redirects/redirects.json";

/** Maps old single-page anchors (e.g. /#case-studies) to their new routes. */
export function LegacyAnchorRedirect() {
  const router = useRouter();
  useEffect(() => {
    const target = (redirects.anchors as Record<string, string>)[window.location.hash];
    if (target) router.replace(target);
  }, [router]);
  return null;
}
