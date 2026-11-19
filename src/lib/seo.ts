import type { MetaDescriptor } from 'react-router';

export function seo(title: string, description: string, path: string): MetaDescriptor[] {
  const url = 'https://peluqueriacanessa.com' + (path === '/' ? '' : path);
  return [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: url },
  ];
}
