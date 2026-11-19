import { index, route } from '@react-router/dev/routes';
import type { RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('contacto', 'routes/contact.tsx'),
  route('blog/:slug', 'routes/article.tsx'),
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig;
