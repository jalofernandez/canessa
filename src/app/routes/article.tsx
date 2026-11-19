import { useLoaderData } from 'react-router';
import type { LoaderFunctionArgs } from 'react-router';
import { seo } from '@/lib/seo';
export function loader({ params }: LoaderFunctionArgs) {
  if (params.slug !== 'el-gran-reencuentro')
    throw new Response('Artículo no encontrado', { status: 404 });
  return {
    title: 'El gran reencuentro',
    text: 'Brenda volvió a reunirse con su familia después de nueve años.',
  };
}
export const meta = () =>
  seo(
    'El gran reencuentro | Blog de Canessa',
    'La historia de Brenda, una perra que volvió a reunirse con su familia tras nueve años.',
    '/blog/el-gran-reencuentro'
  );
export default function Article() {
  const article = useLoaderData<typeof loader>();
  return (
    <main>
      <h1>{article.title}</h1>
      <p>{article.text}</p>
    </main>
  );
}
