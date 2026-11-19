import { Link } from 'react-router';

import { ContactStrip } from '@/components/ContactStrip';
import { Photo } from '@/components/Photo';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Container } from '@/components/ui/Container';
import { business } from '@/data/business';
import gallery from '@/data/gallery.json';
import { seo } from '@/lib/seo';

export const meta = () =>
  seo(
    'Peluquería canina Canessa en Valdemoro',
    'Peluquería canina en Valdemoro con Vanessa Vizcaya. Baños, corte a tijera y cuidado con cariño. Pide cita: 91 248 04 30.',
    '/'
  );
const services = [
  {
    title: 'Peluquería y cuidado',
    text: 'Un arreglo a su medida. Corte a tijera, a máquina y cuidado del manto, con el tiempo que necesita.',
    image: 'index/canessa-perro--yorkie-tijeras.jpg',
    to: '/peluqueria',
    label: 'Conocer la peluquería',
  },
  {
    title: 'Baño y mucho mimo',
    text: 'Baño, cepillado y secado para que vuelva a casa limpio, cómodo y así de guapo.',
    image: 'index/bano-higiene-westie-peluqueria-canina-canessa.jpg',
    to: '/servicios',
    label: 'Ver nuestros servicios',
  },
  {
    title: 'Su tienda de confianza',
    text: 'Alimentación, higiene, complementos y pequeños premios para su día a día.',
    image: 'index/affinity-piensos-peluqueria-canina-canessa.jpg',
    to: '/piensos',
    label: 'Alimentación y complementos',
  },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <Container className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="tiny-paw" aria-hidden="true">
                ✳
              </span>{' '}
              Peluquería canina en Valdemoro
            </p>
            <h1 id="hero-title">
              Cuidamos de quien
              <br />
              te hace <em>feliz.</em>
            </h1>
            <p className="hero-description">
              Un buen corte, un baño con calma y todo el cariño que se merece. En Canessa, tu perro
              es uno más de la familia.
            </p>
            <div className="hero-actions">
              <ButtonLink to="/contacto">Pedir cita</ButtonLink>
              <ButtonLink className="button-outline" to="/servicios">
                Conocer Canessa
              </ButtonLink>
            </div>
            <p className="hero-note">Con cita previa · {business.street}, Valdemoro</p>
          </div>
          <div className="hero-visual">
            <Photo
              className="hero-photo"
              image="index/canessa-vanessa-vizcaya-perro-secado.jpg"
              alt="Vanessa cuidando y secando a un perro en Canessa"
              priority
              sizes="(max-width: 720px) 100vw, 48vw"
            />
            <div className="hero-stamp" aria-label="Cuidado con cariño, desde 2017">
              <span aria-hidden="true">♡</span>Con cariño
              <br />
              <strong>desde 2017</strong>
            </div>
            <p className="photo-caption">Vanessa y uno de nuestros protagonistas.</p>
          </div>
        </Container>
      </section>
      <div className="values-band">
        <Container>
          <span>Sin prisas</span>
          <span aria-hidden="true">✳</span>
          <span>Con respeto</span>
          <span aria-hidden="true">✳</span>
          <span>Siempre a su medida</span>
        </Container>
      </div>
      <section className="section" aria-labelledby="services-title">
        <Container>
          <div className="section-heading">
            <div>
              <p className="eyebrow">Más que salir guapo</p>
              <h2 id="services-title">
                Todo empieza por
                <br />
                sentirse <em>bien.</em>
              </h2>
            </div>
            <Link className="text-link" to="/servicios">
              Todos los servicios
            </Link>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.to}>
                <Photo
                  image={service.image}
                  alt={service.title + ' en Canessa'}
                  sizes="(max-width: 720px) 100vw, 33vw"
                />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <Link className="text-link" to={service.to}>
                    {service.label}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="section about-section" aria-labelledby="about-title">
        <Container className="split-section">
          <Photo
            image="index/vanessa-vizcaya-dogs-lover-peluqueria-canina-canessa.jpg"
            alt="Vanessa Vizcaya con un perro, en la peluquería Canessa"
          />
          <div>
            <p className="eyebrow">Hola, soy Vanessa</p>
            <h2 id="about-title">
              Buenas manos.
              <br />
              <em>Mejor compañía.</em>
            </h2>
            <p>
              Llevo dedicada a la peluquería canina desde 2009. Me gusta conocer a cada perro,
              entender cómo se siente y hacer de su visita una experiencia cercana.
            </p>
            <p>
              Un trabajo artesanal, con respeto por sus necesidades y por ese vínculo tan especial
              que tenéis.
            </p>
            <ButtonLink to="/vanessavizcaya" className="button-outline">
              Conoce a Vanessa
            </ButtonLink>
          </div>
        </Container>
      </section>
      <section className="section" aria-labelledby="gallery-title">
        <Container>
          <div className="section-heading">
            <div>
              <p className="eyebrow">Clientes que dejan huella</p>
              <h2 id="gallery-title">
                Ellos ponen
                <br />
                la mejor <em>cara.</em>
              </h2>
            </div>
            <p>
              Algunos de los peludos
              <br />
              que pasan por nuestras tijeras.
            </p>
          </div>
          <div className="gallery">
            {gallery.slice(0, 6).map((photo) => (
              <figure key={photo.img}>
                <Photo
                  image={'index/' + photo.img}
                  alt={photo.title}
                  sizes="(max-width: 720px) 50vw, 33vw"
                />
                <figcaption>{photo.title}</figcaption>
              </figure>
            ))}
          </div>
          <details className="gallery-more">
            <summary>Ver más trabajos de Canessa</summary>
            <div className="gallery">
              {gallery.slice(6).map((photo) => (
                <figure key={photo.img}>
                  <Photo
                    image={'index/' + photo.img}
                    alt={photo.title}
                    sizes="(max-width: 720px) 50vw, 33vw"
                  />
                  <figcaption>{photo.title}</figcaption>
                </figure>
              ))}
            </div>
          </details>
        </Container>
      </section>
      <ContactStrip />
    </main>
  );
}
