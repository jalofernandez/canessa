import { Link } from 'react-router';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { seo } from '@/lib/seo';
export const meta = () =>
  seo(
    'Bono Canessa Club: campaña finalizada',
    'La campaña Bono Canessa Club ha finalizado. Consulta directamente con Canessa los servicios y las condiciones actuales.',
    '/bono-canessa-club',
    true
  );
export default function Retired() {
  return (
    <main id="main-content">
      <Container>
        <Breadcrumbs title="Bono Canessa Club" />
        <header className="page-heading">
          <p className="eyebrow">Campaña finalizada</p>
          <h1>Bono Canessa Club</h1>
          <p>
            Esta promoción ya no está vigente. Los descuentos y condiciones de la campaña antigua
            han dejado de aplicarse.
          </p>
          <Link className="button" to="/contacto">
            Consultar los servicios actuales
          </Link>
        </header>
      </Container>
    </main>
  );
}
