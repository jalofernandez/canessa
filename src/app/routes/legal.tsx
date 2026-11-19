import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { business } from '@/data/business';
import { seo } from '@/lib/seo';
export const meta = () =>
  seo(
    'Aviso legal y privacidad | Canessa',
    'Información del titular, condiciones de uso, privacidad y preferencias de cookies del sitio web de Peluquería canina Canessa.',
    '/legal'
  );
export default function Legal() {
  return (
    <main id="main-content">
      <Container>
        <Breadcrumbs title="Aviso legal y privacidad" />
        <header className="page-heading">
          <p className="eyebrow">Con claridad</p>
          <h1>
            Aviso legal
            <br />y privacidad.
          </h1>
        </header>
        <div className="prose legal-content">
          <nav aria-label="Apartados legales">
            <a href="#responsability">Titular</a>
            <a href="#privacy">Privacidad</a>
            <a href="#terms">Condiciones de uso</a>
            <a href="#cookies">Cookies</a>
          </nav>
          <section id="responsability">
            <h2>Titular y contacto</h2>
            <p>
              El sitio web de {business.name} es titularidad de {business.owner}, con domicilio
              comercial en {business.street}, {business.postcode} {business.city}, {business.region}
              , España.
            </p>
            <p>
              NIF: 70057608E. Contacto: <a href={'mailto:' + business.email}>{business.email}</a> y{' '}
              <a href={'tel:' + business.phone}>{business.phoneLabel}</a>.
            </p>
          </section>
          <section id="privacy">
            <h2>Privacidad</h2>
            <p>
              Este sitio ofrece información sobre la peluquería y sus servicios. No dispone de
              registro de usuarios, tienda en línea ni formulario de envío de datos.
            </p>
            <p>
              Si contactas por teléfono, correo o WhatsApp, los datos que facilites se utilizarán
              para atender tu consulta y gestionar la relación con Canessa. Evita enviar información
              personal innecesaria.
            </p>
            <p>
              El alojamiento se presta mediante Firebase Hosting, de Google. La prestación técnica
              puede requerir el tratamiento de datos de conexión, como la dirección IP. Los enlaces
              a WhatsApp, Instagram y Google Maps te llevan a servicios de terceros sujetos a sus
              propias condiciones y políticas de privacidad.
            </p>
            <p>
              Para consultas sobre tus datos o para solicitar el ejercicio de tus derechos de
              protección de datos, puedes dirigirte a{' '}
              <a href={'mailto:' + business.email}>{business.email}</a>. Puedes presentar una
              reclamación ante la{' '}
              <a href="https://www.aepd.es/" target="_blank" rel="noopener noreferrer">
                Agencia Española de Protección de Datos
              </a>
              .
            </p>
          </section>
          <section id="terms">
            <h2>Condiciones de uso</h2>
            <p>
              La información de este sitio tiene carácter informativo. Para confirmar
              disponibilidad, presupuesto y condiciones concretas del servicio, contacta
              directamente con Canessa. La cita se acuerda con la peluquería; navegar por esta web
              no realiza una reserva.
            </p>
            <p>
              Los textos, marca y fotografías tienen sus respectivos titulares. Su uso no concede
              derechos de reproducción o explotación. Las imágenes de nuestros trabajos muestran
              resultados individuales, que varían según el pelo y las necesidades de cada animal.
            </p>
          </section>
          <section id="cookies">
            <h2>Cookies y preferencias</h2>
            <p>
              Actualmente no se carga analítica ni se utilizan cookies opcionales. Puedes consultar
              el estado desde “Preferencias de cookies”, al pie de cualquier página.
            </p>
            <p>
              Si se habilita analítica en el futuro, se solicitará tu permiso antes de cargarla, con
              opciones para aceptar, rechazar y retirar el consentimiento.
            </p>
            <p>
              El mapa no se carga automáticamente: se abre en Google Maps cuando eliges “Cómo
              llegar”.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
