import { Link } from 'react-router';
import { business } from '@/data/business';
import { Container } from '@/components/ui/Container';
export function ContactStrip() {
  return (
    <section className="contact-strip" aria-labelledby="contact-strip-title">
      <Container className="contact-strip-inner">
        <div>
          <p className="eyebrow">Nos vemos en Valdemoro</p>
          <h2 id="contact-strip-title">
            Un ratito de cuidado.
            <br />
            Un montón de cariño.
          </h2>
          <p>Cuéntanos cómo es tu perro y buscamos su próxima cita.</p>
        </div>
        <div className="contact-strip-actions">
          <a className="button button-light" href={'tel:' + business.phone}>
            Llamar al {business.phoneLabel}
          </a>
          <a
            className="text-link"
            href={business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribir por WhatsApp
          </a>
          <Link to="/contacto">Dirección y horarios</Link>
        </div>
      </Container>
    </section>
  );
}
