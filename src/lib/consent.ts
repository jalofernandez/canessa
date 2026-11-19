export const CONSENT_KEY = 'canessa:consent:v1';
export type Consent = 'accepted' | 'rejected';
const CONTAINER = 'GTM-54RWXDW';
interface DataLayerWindow extends Window {
  dataLayer?: unknown[];
}

export function readConsent(): Consent | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === 'accepted' || value === 'rejected' ? value : memoryConsent;
  } catch {
    return memoryConsent;
  }
}
let memoryConsent: Consent | null = null;
export function saveConsent(value: Consent) {
  memoryConsent = value;
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* Apply this visit's choice even without persistent storage. */
  }
  window.dispatchEvent(new Event('canessa:consent'));
}
export function subscribeConsent(callback: () => void) {
  window.addEventListener('canessa:consent', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('canessa:consent', callback);
    window.removeEventListener('storage', callback);
  };
}
export function startAnalytics() {
  if (document.getElementById('canessa-gtm')) return;
  const target = window as DataLayerWindow;
  target.dataLayer = target.dataLayer ?? [];
  target.dataLayer.push([
    'consent',
    'default',
    {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    },
  ]);
  target.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const script = document.createElement('script');
  script.id = 'canessa-gtm';
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtm.js?id=' + CONTAINER;
  document.head.append(script);
}
export function removeAnalyticsCookies() {
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0].trim();
    if (!/^(_ga($|_)|_gid$|_gat($|_)|_gcl_)/.test(name)) continue;
    const domains = ['', location.hostname, '.' + location.hostname];
    for (const domain of domains)
      document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ' domain=' + domain + ';' : ''} SameSite=Lax`;
  }
}
