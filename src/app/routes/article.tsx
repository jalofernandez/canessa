import { Link, useLoaderData } from 'react-router';
import type { LoaderFunctionArgs, MetaFunction } from 'react-router';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Photo } from '@/components/Photo';
import { Container } from '@/components/ui/Container';
import { business } from '@/data/business';
import { getArticles } from '@/lib/articles.server';
import { safeJson, seo } from '@/lib/seo';

export function loader({ params }: LoaderFunctionArgs) {
  const article = getArticles().find((article) => article.slug === params.slug);
  if (!article) throw new Response('Artículo no encontrado', { status: 404 });
  return article;
}
export const meta: MetaFunction<typeof loader> = ({ data }) =>
  data
    ? seo(data.title, data.description, '/blog/' + data.slug)
    : seo('Artículo no encontrado', 'Este artículo no existe.', '/blog', true);
export default function Article() {
  const article = useLoaderData<typeof loader>();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    author: { '@type': 'Person', name: article.author },
    mainEntityOfPage: business.origin + '/blog/' + article.slug,
    image: business.origin + '/peluqueria-canina-canessa-valdemoro-servicios.jpg',
  };
  return (
    <main id="main-content">
      <Container>
        <Breadcrumbs title={article.title} blog />
        <article className="article">
          <header className="page-heading">
            <p className="eyebrow">El blog de Canessa</p>
            <h1>{article.title}</h1>
            <p className="article-byline">
              Por {article.author}
              {article.authorBio && <span> · {article.authorBio}</span>}
            </p>
          </header>
          <Photo
            className="article-image"
            image={article.image}
            alt={article.alt}
            priority
            sizes="(max-width: 900px) 100vw, 900px"
          />
          <div className="prose" dangerouslySetInnerHTML={{ __html: article.html }} />
          <footer className="article-footer">
            <Link className="text-link" to="/blog">
              Volver a todas las historias
            </Link>
          </footer>
        </article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(schema) }} />
      </Container>
    </main>
  );
}
