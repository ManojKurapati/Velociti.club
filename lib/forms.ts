/**
 * Form submission for a static site. Forms POST JSON to an endpoint set at
 * build time (Formspree, a HubSpot/Zoho webhook, or a serverless function
 * that forwards to Resend + CRM). See .env.example.
 */
export class FormEndpointMissingError extends Error {}

export async function postForm(endpoint: string | undefined, data: Record<string, unknown>) {
  if (!endpoint) throw new FormEndpointMissingError("Form endpoint is not configured");
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ ...data, submitted_at: new Date().toISOString(), page: window.location.pathname }),
  });
  if (!res.ok) throw new Error(`Submission failed (${res.status})`);
}

const FREE_MAIL = new Set([
  "gmail.com", "googlemail.com", "yahoo.com", "yahoo.co.uk", "hotmail.com", "outlook.com", "live.com", "msn.com",
  "icloud.com", "me.com", "aol.com", "proton.me", "protonmail.com", "gmx.com", "mail.com", "yandex.com", "zoho.com",
]);

export function isFreeEmail(email: string) {
  const domain = email.split("@")[1]?.toLowerCase().trim();
  return !!domain && FREE_MAIL.has(domain);
}
