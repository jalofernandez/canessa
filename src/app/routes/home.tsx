import { Link } from 'react-router';
import { seo } from '@/lib/seo';
export const meta = () =>
  seo(
    'Peluquería canina Canessa en Valdemoro',
    'Cuidado y peluquería para tu perro en Valdemoro. Conoce Canessa y pide cita por teléfono.',
    '/'
  );
export default function Home() {
  return (
    <main>
      <h1>Peluquería canina Canessa en Valdemoro</h1>
      <p>Su bienestar, en buenas manos.</p>
      <Link to="/contacto">Pedir cita</Link>
      <Link to="/blog/el-gran-reencuentro">El gran reencuentro</Link>
    </main>
  );
}
