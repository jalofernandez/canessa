import { useLoaderData } from 'react-router';
import type { LoaderFunctionArgs, MetaFunction } from 'react-router';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactStrip } from '@/components/ContactStrip';
import { Photo } from '@/components/Photo';
import { Container } from '@/components/ui/Container';
import pages from '@/data/pages.json';
import products from '@/data/products.json';
import { seo } from '@/lib/seo';

export function loader({ params }: LoaderFunctionArgs) {
  const page = pages.find((page) => page.path === '/' + params.page);
  if (!page) throw new Response('Página no encontrada', { status: 404 });
  return page;
}
export const meta: MetaFunction<typeof loader> = ({ data }) =>
  data
    ? seo(data.title, data.description, data.path)
    : seo('Página no encontrada', 'Esta página no existe.', '/', true);
export default function ContentPage() {
  const page = useLoaderData<typeof loader>();
  return (
    <main id="main-content">
      <Container>
        <Breadcrumbs title={page.path === '/vanessavizcaya' ? 'Sobre Vanessa' : page.title} />
        <header className="page-heading">
          <p className="eyebrow">Canessa · Valdemoro</p>
          <h1>
            {page.title}
            <span className="title-dot">.</span>
          </h1>
          <p>{page.description}</p>
        </header>
        <div className="content-blocks">
          {page.blocks.map((block, index) => (
            <section className="split-section content-block" key={block.title}>
              <Photo image={block.image} alt={block.alt} priority={index === 0} />
              <div>
                <h2>{block.title}</h2>
                <p>{block.text}</p>
                {block.to && (
                  <a className="text-link" href={block.to}>
                    {block.link || 'Más información'}
                  </a>
                )}
              </div>
            </section>
          ))}
        </div>
        {page.path === '/piensos' && (
          <section aria-labelledby="products-title" className="section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Nuestra tienda</p>
                <h2 id="products-title">Alimentación para cada etapa</h2>
              </div>
              <p>
                Consulta disponibilidad y precio
                <br />
                de cada variedad en la peluquería.
              </p>
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <article key={product.image} className="product-card">
                  <Photo
                    image={product.image}
                    alt={product.brand + ' ' + product.title}
                    sizes="(max-width: 720px) 50vw, 25vw"
                  />
                  <p className="eyebrow">
                    {product.brand === 'Advange' ? 'Advance' : product.brand}
                  </p>
                  <h3>{product.title}</h3>
                </article>
              ))}
            </div>
          </section>
        )}
        {page.path === '/instalaciones' && (
          <section className="section video-section" aria-labelledby="video-title">
            <h2 id="video-title">Una visita a la peluquería</h2>
            <p>Vídeo de nuestras instalaciones. Se descarga al reproducirlo.</p>
            <video
              controls
              preload="none"
              playsInline
              poster="/peluqueria-canina-canessa-valdemoro-servicios.jpg"
              aria-label="Vídeo de las instalaciones de Canessa"
            >
              <source src="/videos/instalaciones.mp4" type="video/mp4" />
              <track kind="captions" src="/instalaciones-es.vtt" srcLang="es" label="Español" />
              Tu navegador no puede reproducir este vídeo.
            </video>
            <p>
              El recorrido muestra la zona de tienda, las mesas de corte y la zona de baño y secado,
              también descritas en esta página.
            </p>
          </section>
        )}
      </Container>
      <ContactStrip />
    </main>
  );
}
