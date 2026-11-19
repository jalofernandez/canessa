import { Link } from 'react-router';
import { useHydrated } from '@/hooks/useHydrated';
import { business } from '@/data/business';
import { Hours } from '@/components/Hours';
import { Container } from '@/components/ui/Container';

export function SiteFooter() {
  const hydrated = useHydrated();
  const preferences = () => {
    const dialog = document.getElementById('cookie-preferences');
    if (dialog instanceof HTMLDialogElement) dialog.showModal();
  };
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <div>
            <Link to="/" className="footer-brand">
              canessa<span aria-hidden="true">.</span>
            </Link>
            <p>
              Tu perro es de la familia.
              <br />
              Aquí lo cuidamos como tal.
            </p>
            <a href={business.instagram} target="_blank" rel="noopener noreferrer">
              Instagram de Canessa
            </a>
          </div>
          <div>
            <h2>Ven a vernos</h2>
            <address>
              {business.street}
              <br />
              {business.postcode} {business.city}, {business.region}
            </address>
            <a href={'tel:' + business.phone}>{business.phoneLabel}</a>
            <a href={business.map} target="_blank" rel="noopener noreferrer">
              Cómo llegar
            </a>
          </div>
          <div>
            <h2>Nuestro horario</h2>
            <Hours />
          </div>
        </div>
        <nav className="footer-links" aria-label="Más sobre Canessa">
          {[
            { path: '/instalaciones', label: 'Instalaciones' },
            { path: '/piensos', label: 'Alimentación' },
            { path: '/antiparasitarios', label: 'Antiparasitarios' },
            { path: '/legal', label: 'Aviso legal y privacidad' },
            { path: '/sitemap', label: 'Mapa del sitio' },
          ].map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
          <button type="button" className="link-button" onClick={preferences} disabled={!hydrated}>
            Preferencias de cookies
          </button>
        </nav>
        <p className="copyright">© Canessa · Cuidado, cariño y unas buenas tijeras.</p>
      </Container>
    </footer>
  );
}
