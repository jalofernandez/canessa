import { Link, useLocation } from 'react-router';

import { business } from '@/data/business';
import { safeJson } from '@/lib/seo';

export function Breadcrumbs({ title, blog = false }: { title: string; blog?: boolean }) {
  const { pathname } = useLocation();
  const items = [
    { name: 'Inicio', path: '' },
    ...(blog ? [{ name: 'Blog', path: '/blog' }] : []),
    { name: title, path: pathname },
  ];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: business.origin + item.path,
    })),
  };
  return (
    <nav className="breadcrumbs" aria-label="Ruta de navegación">
      <ol>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        {blog && (
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        )}
        <li aria-current="page">{title}</li>
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(schema) }} />
    </nav>
  );
}
