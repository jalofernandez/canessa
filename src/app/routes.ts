import { index, route } from '@react-router/dev/routes';
import type { RouteConfig } from '@react-router/dev/routes';
export default [
  index('routes/home.tsx'),
  route('contacto', 'routes/contact.tsx'),
  route('blog', 'routes/blog.tsx'),
  route('blog/:slug', 'routes/article.tsx'),
  route('legal', 'routes/legal.tsx'),
  route('sitemap', 'routes/sitemap.tsx'),
  route('bono-canessa-club', 'routes/retired.tsx'),
  route(':page', 'routes/page.tsx'),
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig;
