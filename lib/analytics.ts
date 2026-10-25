/**
 * Thin client-side analytics wrapper around the Mixpanel instance that
 * CookieBanner initialises (see AGENTS.md). Mixpanel is only downloaded once
 * the visitor accepts cookies, so without consent events are dropped here;
 * with consent, events fired before it finishes loading are queued.
 */
import type { Mixpanel } from "mixpanel-browser";
import { CONSENT_KEY } from "./storage-keys";

type Props = Record<string, string | number | boolean | string[] | undefined>;

let instance: Mixpanel | null = null;
const queue: Array<(mp: Mixpanel) => void> = [];

export function registerMixpanel(mp: Mixpanel) {
  instance = mp;
  while (queue.length) queue.shift()!(mp);
}

export function hasMixpanel() {
  return instance !== null;
}

function consented() {
  try {
    return localStorage.getItem(CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

export function withMixpanel(fn: (mp: Mixpanel) => void) {
  if (instance) fn(instance);
  else if (consented() && queue.length < 50) queue.push(fn);
}

export function track(event: string, properties?: Props) {
  withMixpanel((mp) => mp.track(event, properties));
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", event, properties);
}

export function identify(id: string, profile: Props) {
  withMixpanel((mp) => {
    mp.identify(id);
    mp.people.set(profile);
  });
}
