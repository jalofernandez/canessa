import { useEffect, useRef, useSyncExternalStore } from 'react';
import { Link } from 'react-router';

import {
  readConsent,
  removeAnalyticsCookies,
  saveConsent,
  startAnalytics,
  subscribeConsent,
} from '@/lib/consent';
import type { Consent } from '@/lib/consent';

export function CookieConsent({ enabled = false }: { enabled?: boolean }) {
  const choice = useSyncExternalStore(subscribeConsent, readConsent, () => null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (enabled && choice === 'accepted') startAnalytics();
  }, [enabled, choice]);
  const choose = (value: Consent) => {
    const wasAccepted = choice === 'accepted';
    saveConsent(value);
    dialog.current?.close();
    if (enabled && value === 'accepted') startAnalytics();
    else {
      removeAnalyticsCookies();
      if (wasAccepted) window.location.reload();
    }
  };
  const controls = (
    <div className="cookie-actions">
      <button className="button button-outline" type="button" onClick={() => choose('rejected')}>
        Rechazar analítica
      </button>
      <button className="button" type="button" onClick={() => choose('accepted')}>
        Aceptar analítica
      </button>
    </div>
  );
  return (
    <>
      {enabled && choice === null && (
        <section className="cookie-banner" aria-label="Elección de cookies">
          <div>
            <h2>Tu visita, tu decisión</h2>
            <p>
              Usamos analítica de Google solo si la aceptas. Puedes rechazarla o cambiar tu elección
              en cualquier momento. <Link to="/legal#cookies">Información sobre cookies</Link>.
            </p>
          </div>
          {controls}
        </section>
      )}
      <dialog
        ref={dialog}
        id="cookie-preferences"
        aria-labelledby="cookie-title"
        className="cookie-dialog"
      >
        <h2 id="cookie-title">Preferencias de cookies</h2>
        <p>
          Las preferencias se guardan en este navegador. La analítica de Google es opcional; las
          cookies publicitarias no están autorizadas.
        </p>
        <p>
          Elección actual:{' '}
          {choice === 'accepted'
            ? 'analítica aceptada'
            : choice === 'rejected'
              ? 'analítica rechazada'
              : 'sin elegir'}
          .
        </p>
        {enabled ? (
          controls
        ) : (
          <p>Actualmente la analítica está desactivada y no se cargan cookies opcionales.</p>
        )}
        <button type="button" className="link-button" onClick={() => dialog.current?.close()}>
          Cerrar preferencias
        </button>
      </dialog>
    </>
  );
}
