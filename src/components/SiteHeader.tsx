import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router';

import { business, navigation } from '@/data/business';
import { useHydrated } from '@/hooks/useHydrated';
import { Container } from '@/components/ui/Container';

export function SiteHeader() {
  const hydrated = useHydrated();
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  return (
    <header className="site-header">
      <Container className="header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/logo.svg" width="46" height="46" alt="" />
          <span>
            canessa
            <span className="brand-sub">
              peluquería canina <span className="brand-location">· Valdemoro</span>
            </span>
          </span>
        </Link>
        <button
          ref={button}
          className="menu-button"
          disabled={!hydrated}
          type="button"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Cerrar menú' : 'Menú'}
          <span aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
        <nav id="main-nav" aria-label="Principal" className="main-nav" data-open={open}>
          {navigation.map((item) => (
            <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <a className="header-phone" href={'tel:' + business.phone}>
          {business.phoneLabel}
        </a>
      </Container>
    </header>
  );
}
