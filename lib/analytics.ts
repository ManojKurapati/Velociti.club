/**
 * Thin client-side analytics wrapper around the Mixpanel instance that
 * CookieBanner initialises (see AGENTS.md). Events fired before Mixpanel has
 * loaded are queued; Mixpanel itself drops them unless the visitor opted in.
 */
import type { Mixpanel } from "mixpanel-browser";

type Props = Record<string, string | number | boolean | string[] | undefined>;

let instance: Mixpanel | null = null;
const queue: Array<(mp: Mixpanel) => void> = [];

export function registerMixpanel(mp: Mixpanel) {
  instance = mp;
  while (queue.length) queue.shift()!(mp);
}

export function withMixpanel(fn: (mp: Mixpanel) => void) {
  if (instance) fn(instance);
  else queue.push(fn);
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
