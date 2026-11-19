import type { MetaDescriptor } from 'react-router';
import { business } from '@/data/business';

export function seo(
  title: string,
  description: string,
  path: string,
  noindex = false,
  image = '/peluqueria-canina-canessa-valdemoro-servicios.jpg'
): MetaDescriptor[] {
  const url = business.origin + (path === '/' ? '' : path);
  const fullTitle = title.includes('Canessa') ? title : title + ' | Canessa, Valdemoro';
  return [
    { title: fullTitle },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: url },
    { name: 'robots', content: noindex ? 'noindex, follow' : 'index, follow' },
    { property: 'og:type', content: path.startsWith('/blog/') ? 'article' : 'website' },
    { property: 'og:locale', content: 'es_ES' },
    { property: 'og:site_name', content: business.name },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:image', content: business.origin + image },
    { property: 'og:image:alt', content: business.name + ' en Valdemoro' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: business.origin + image },
  ];
}
export function safeJson(value: unknown) {
  return JSON.stringify(value)
    .replace(/</g, '\u003c')
    .replace(/>/g, '\u003e')
    .replace(/&/g, '\u0026');
}
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': business.origin + '/#business',
    name: business.name,
    url: business.origin,
    telephone: business.phone,
    image: business.origin + '/peluqueria-canina-canessa-valdemoro-servicios.jpg',
    logo: business.origin + '/logo.svg',
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.street,
      postalCode: business.postcode,
      addressLocality: business.city,
      addressRegion: business.region,
      addressCountry: 'ES',
    },
    hasMap: business.map,
    sameAs: [business.instagram],
    openingHoursSpecification: business.hours.flatMap((row) => [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: row.days.map((day) => 'https://schema.org/' + day),
        opens: row.opens,
        closes: '13:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: row.days.map((day) => 'https://schema.org/' + day),
        opens: '16:30',
        closes: '20:00',
      },
    ]),
  };
}
