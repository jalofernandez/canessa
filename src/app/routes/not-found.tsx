import { Link } from 'react-router';
export default function NotFound() {
  return (
    <main>
      <h1>Página no encontrada</h1>
      <p>Esta dirección no existe. Podemos ayudarte desde el inicio.</p>
      <Link to="/">Volver a Canessa</Link>
    </main>
  );
}
