import Mixpanel from "mixpanel";

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || "dd9626abae8f1a7c91052bf7f765f5b8";

// Initialize Mixpanel for server-side logging/tracking
export const mixpanelServer = Mixpanel.init(MIXPANEL_TOKEN);

/**
 * Track events from the Next.js server side.
 * @param distinctId - The user identifier (stable ID/email)
 * @param eventName - The name of the event (snake_case past-tense)
 * @param properties - Custom properties to pass with the event
 */
export const trackServerEvent = (
  distinctId: string,
  eventName: string,
  properties?: Record<string, any>
) => {
  try {
    mixpanelServer.track(eventName, {
      distinct_id: distinctId,
      ...properties,
      $insert_id: Math.random().toString(36).substring(2, 15), // deduplication key
    });
  } catch (err) {
    console.error("Failed to track server event in Mixpanel:", err);
  }
};

/**
 * Set user profile properties from the server side.
 * @param distinctId - The user identifier (stable ID/email)
 * @param properties - User profile attributes
 */
export const setServerUserProfile = (
  distinctId: string,
  properties: Record<string, any>
) => {
  try {
    mixpanelServer.people.set(distinctId, properties);
  } catch (err) {
    console.error("Failed to set user profile properties in Mixpanel:", err);
  }
};
