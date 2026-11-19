import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { CookieConsent } from './CookieConsent';
import { CONSENT_KEY } from '@/lib/consent';

vi.mock('@/lib/consent', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/lib/consent')>();
  return { ...actual, startAnalytics: vi.fn(), removeAnalyticsCookies: vi.fn() };
});
import { removeAnalyticsCookies, startAnalytics } from '@/lib/consent';

vi.mock('react-router', () => ({
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
}));

beforeEach(() => {
  localStorage.clear();
  vi.clearAllMocks();
  // A deliberate fresh non-accepted choice also resets the in-memory storage fallback.
  localStorage.setItem(CONSENT_KEY, 'rejected');
});
describe('optional analytics choice', () => {
  it('does not load tags by default or when the integration is disabled', async () => {
    render(<CookieConsent />);
    expect(screen.queryByRole('region', { name: 'Elección de cookies' })).not.toBeInTheDocument();
    expect(startAnalytics).not.toHaveBeenCalled();
  });
  it('offers equal reject/accept actions and persists rejection without loading tags', async () => {
    localStorage.removeItem(CONSENT_KEY);
    render(<CookieConsent enabled />);
    await userEvent.click(screen.getByRole('button', { name: 'Rechazar analítica' }));
    expect(localStorage.getItem(CONSENT_KEY)).toBe('rejected');
    expect(startAnalytics).not.toHaveBeenCalled();
    expect(removeAnalyticsCookies).toHaveBeenCalled();
  });
  it('loads optional tags only after explicit acceptance and retains the choice', async () => {
    localStorage.setItem(CONSENT_KEY, 'rejected');
    render(<CookieConsent enabled />);
    const dialog = screen.getByRole('dialog', { hidden: true });
    act(() => {
      dialog.setAttribute('open', '');
    });
    fireEvent.click(screen.getByRole('button', { name: 'Aceptar analítica' }));
    expect(localStorage.getItem(CONSENT_KEY)).toBe('accepted');
    expect(startAnalytics).toHaveBeenCalled();
  });
  it('revokes a previous acceptance, removes measurement cookies and reloads', async () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    const reload = vi.spyOn(window.location, 'reload').mockImplementation(() => {});
    render(<CookieConsent enabled />);
    const dialog = screen.getByRole('dialog', { hidden: true });
    act(() => {
      dialog.setAttribute('open', '');
    });
    fireEvent.click(screen.getByRole('button', { name: 'Rechazar analítica' }));
    expect(localStorage.getItem(CONSENT_KEY)).toBe('rejected');
    expect(removeAnalyticsCookies).toHaveBeenCalled();
    expect(reload).toHaveBeenCalledOnce();
    reload.mockRestore();
  });
});
