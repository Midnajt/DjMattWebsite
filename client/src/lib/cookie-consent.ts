export const COOKIE_CONSENT_KEY = "cookie-consent";
export const COOKIE_SETTINGS_EVENT = "cookie-settings-open";

export type CookieConsent = "accepted" | "necessary";

export function readCookieConsent(): CookieConsent | null {
  try {
    const value = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (value === "accepted" || value === "necessary") return value;
  } catch {
    /* ignore */
  }
  return null;
}

export function writeCookieConsent(value: CookieConsent) {
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event("cookie-consent-change"));
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
}

export function hasSoundcloudConsent() {
  return readCookieConsent() === "accepted";
}
