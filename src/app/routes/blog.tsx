import { Link, useLoaderData } from 'react-router';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Photo } from '@/components/Photo';
import { Container } from '@/components/ui/Container';
import { getArticles } from '@/lib/articles.server';
import { seo } from '@/lib/seo';

export function loader() {
  return getArticles().map(({ slug, title, description, image, alt, author }) => ({
    slug,
    title,
    description,
    image,
    alt,
    author,
  }));
}
export const meta = () =>
  seo(
    'Blog de Canessa',
    'Historias, animales y la vida en Canessa. Lee nuestros artículos y descubre cómo colaborar en el blog de la peluquería.',
    '/blog'
  );
export default function Blog() {
  const articles = useLoaderData<typeof loader>();
  return (
    <main id="main-content">
      <Container>
        <Breadcrumbs title="Blog" />
        <header className="page-heading">
          <p className="eyebrow">Historias que merecen un ratito</p>
          <h1>
            Entre pelos
            <br />y <em>otras historias.</em>
          </h1>
          <p>De animales, de sus personas y de todo lo que nos une.</p>
        </header>
        <div className="blog-grid">
          {articles.map((article) => (
            <article className="blog-card" key={article.slug}>
              <Link to={'/blog/' + article.slug} tabIndex={-1} aria-hidden="true">
                <Photo image={article.image} alt="" sizes="(max-width: 720px) 100vw, 33vw" />
              </Link>
              <div>
                <p className="eyebrow">{article.author}</p>
                <h2>
                  <Link to={'/blog/' + article.slug}>{article.title}</Link>
                </h2>
                <p>{article.description}</p>
                <Link className="text-link" to={'/blog/' + article.slug}>
                  Leer artículo<span className="sr-only">: {article.title}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
