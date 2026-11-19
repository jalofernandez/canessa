import { Link } from 'react-router';
import { Container } from '@/components/ui/Container';
import { seo } from '@/lib/seo';
export const meta = () =>
  seo(
    'Página no encontrada | Canessa',
    'Esta dirección no existe. Visita el inicio de Canessa o contacta con la peluquería.',
    '/',
    true
  );
export default function NotFound() {
  return (
    <main id="main-content">
      <Container className="error-page">
        <p className="eyebrow">Nos hemos despistado</p>
        <h1>
          Por aquí no hay
          <br />
          <em>ningún peludo.</em>
        </h1>
        <p>La página que buscas no existe o ha cambiado de dirección.</p>
        <Link className="button" to="/">
          Volver a Canessa
        </Link>
      </Container>
    </main>
  );
}
