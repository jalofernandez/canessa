import { Link, useLoaderData } from 'react-router';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import pages from '@/data/pages.json';
import { getArticles } from '@/lib/articles.server';
import { seo } from '@/lib/seo';
export function loader() {
  return getArticles().map(({ slug, title }) => ({ slug, title }));
}
export const meta = () =>
  seo(
    'Mapa del sitio de Canessa',
    'Encuentra los servicios, la información de contacto y los artículos de Peluquería canina Canessa, Valdemoro.',
    '/sitemap'
  );
export default function Sitemap() {
  const articles = useLoaderData<typeof loader>();
  const links = [
    { path: '/', title: 'Inicio' },
    ...pages,
    { path: '/contacto', title: 'Contacto' },
    { path: '/blog', title: 'Blog' },
    { path: '/legal', title: 'Aviso legal y privacidad' },
  ];
  return (
    <main id="main-content">
      <Container>
        <Breadcrumbs title="Mapa del sitio" />
        <header className="page-heading">
          <p className="eyebrow">Todo Canessa</p>
          <h1>Mapa del sitio</h1>
        </header>
        <div className="sitemap-grid">
          <section>
            <h2>La peluquería</h2>
            <ul>
              {links.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2>El blog</h2>
            <ul>
              {articles.map((article) => (
                <li key={article.slug}>
                  <Link to={'/blog/' + article.slug}>{article.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </main>
  );
}
