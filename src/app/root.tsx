import type { ReactNode } from 'react';
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from 'react-router';

import { CookieConsent } from '@/components/CookieConsent';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { business } from '@/data/business';
import { localBusinessSchema, safeJson } from '@/lib/seo';
import '@/main.css';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#b81760" />
        <link rel="icon" href="/icon.png" />
        <Meta />
        <Links />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Saltar al contenido
        </a>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
export default function App() {
  return (
    <>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <CookieConsent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJson({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: business.name,
            url: business.origin,
            inLanguage: 'es-ES',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(localBusinessSchema()) }}
      />
    </>
  );
}
export function ErrorBoundary() {
  const error = useRouteError();
  const notFound = isRouteErrorResponse(error) && error.status === 404;
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="container error-page">
        <h1>{notFound ? 'Página no encontrada' : 'No hemos podido cargar esta página'}</h1>
        <p>
          {notFound
            ? 'Esta dirección no existe.'
            : 'Puedes volver al inicio e intentarlo de nuevo.'}
        </p>
        <a className="button" href="/">
          Volver a Canessa
        </a>
      </main>
      <SiteFooter />
      <CookieConsent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJson({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: business.name,
            url: business.origin,
            inLanguage: 'es-ES',
          }),
        }}
      />
    </>
  );
}
