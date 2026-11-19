import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Hours } from '@/components/Hours';
import { Container } from '@/components/ui/Container';
import { business } from '@/data/business';
import { seo } from '@/lib/seo';

export const meta = () =>
  seo(
    'Contacto | Canessa, Valdemoro',
    'Pide cita en Canessa por teléfono o WhatsApp: 91 248 04 30. Calle Vicente Aleixandre, 5, 28342 Valdemoro. Consulta cómo llegar y nuestros horarios.',
    '/contacto'
  );
export default function Contact() {
  return (
    <main id="main-content">
      <Container>
        <Breadcrumbs title="Contacto" />
        <header className="page-heading">
          <p className="eyebrow">Estamos cerquita</p>
          <h1>
            La próxima cita
            <br />
            <em>empieza aquí.</em>
          </h1>
          <p>
            Cuéntanos qué necesita tu compañero. Te atenderemos por teléfono o WhatsApp para
            organizar su visita.
          </p>
        </header>
        <div className="contact-grid">
          <section className="contact-card" aria-labelledby="appointment-title">
            <p className="eyebrow">Con cita previa</p>
            <h2 id="appointment-title">Hablemos de tu perro</h2>
            <a className="phone-display" href={'tel:' + business.phone}>
              {business.phoneLabel}
            </a>
            <a
              className="button"
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribir por WhatsApp
            </a>
            <p>
              También puedes escribirnos a <a href={'mailto:' + business.email}>{business.email}</a>
              .
            </p>
          </section>
          <section className="contact-card" aria-labelledby="address-title">
            <p className="eyebrow">Tu peluquería en Valdemoro</p>
            <h2 id="address-title">Ven a vernos</h2>
            <address>
              {business.street}
              <br />
              {business.postcode} {business.city}, {business.region}
            </address>
            <a
              className="button button-outline"
              href={business.map}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cómo llegar en Google Maps
            </a>
            <p>El mapa se abre solo cuando pulsas el enlace.</p>
          </section>
          <section className="contact-card contact-hours" aria-labelledby="hours-title">
            <p className="eyebrow">Nos encontrarás</p>
            <h2 id="hours-title">Horario de la peluquería</h2>
            <Hours />
            <p>Para festivos o cambios puntuales, consúltanos antes de venir.</p>
          </section>
        </div>
      </Container>
    </main>
  );
}
