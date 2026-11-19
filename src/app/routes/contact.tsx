import { Link } from 'react-router';
import { seo } from '@/lib/seo';
export const meta = () =>
  seo(
    'Contacto | Canessa, Valdemoro',
    'Pide cita en Canessa. Calle Vicente Aleixandre, 5, Valdemoro. Teléfono 91 248 04 30.',
    '/contacto'
  );
export default function Contact() {
  return (
    <main>
      <h1>Contacto de Canessa</h1>
      <p>Calle Vicente Aleixandre, 5, Valdemoro</p>
      <a href="tel:+34912480430">91 248 04 30</a>
      <Link to="/">Inicio</Link>
    </main>
  );
}
