/**
 * Meta Pixel Tracking Utility
 * Provides type-safe event tracking with deduplication support
 * Respects cookie consent preferences
 */
declare global {
  interface Window {
    fbq?: (action: string, event: string, data?: Record<string, any>) => void;
  }
}

function isMarketingConsentGiven(): boolean {
  try {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) return false;
    const consentObj = JSON.parse(consent);
    return consentObj.marketing === true;
  } catch {
    return false;
  }
}

export function trackPixelEvent(eventName: string, eventData?: Record<string, any>): void {
  if (!isMarketingConsentGiven()) return;
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, eventData);
  }
}

export function trackStartTrial(userId?: string, email?: string): void {
  if (!isMarketingConsentGiven()) return;
  const dedupeKey = "meta_pixel_start_trial_fired";
  if (sessionStorage.getItem(dedupeKey)) return;
  sessionStorage.setItem(dedupeKey, "true");
  const eventData: Record<string, any> = {};
  if (userId) eventData.user_id = userId;
  if (email) eventData.email = email;
  trackPixelEvent("StartTrial", eventData);
}
