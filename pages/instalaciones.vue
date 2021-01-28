<template>
  <main :class="$route.name">
    <section class="hero is-fullheight video is-dark is-bold">
      <div class="hero-video">
        <video
          id="bgvid"
          :poster="require(`~/assets/videos/afgano.jpg`)"
          :title="`Servicios ofrecidos en ${owner.copyright} en Valdemoro, Madrid`" 
          playsinline autoplay muted loop
        >
          <source src="~/assets/videos/canessa_web-promo-video_2018-09-15.mp4" type="video/mp4">
        </video>
      </div>
      <!-- <div class="hero-body">
        <div class="container">
          Text content goes here (h1 and call to action etc...)
        </div>
      </div>
      <div class="hero-foot">
        <div class="has-text-centered">
          Scroll down arrow here?
        </div>
      </div> -->
    </section>
    <div class="box cta">
      <p class="is-size-5 is-size-6-mobile has-text-centered">
        Instalaciones y equipo profesional de primera para realizar nuestros servicios de peluquería y estética canina <br class="is-hidden-touch" /> con la <b>mayor eficacia</b>, <b>menor estrés</b> y <b>mejor comodidad</b> para tu amigo peludo.
      </p>
    </div>
    <SectionChessBoard :blocks="blocks" :page="$route.name"/>
    <TheFooter />
  </main>
</template>

<script>
export default {
  data() {
    const closeQuote = '<span class="icon th-quote"><i class="mdi mdi-format-quote-close"></i></span>'
    return {
      owner: this.$store.state.owner,
      pages: this.$store.state.pages,
      blocks: [
        {
          title: 'Instalaciones...',
          description: '...a pie de calle perfectamente acondicionadas para poder realizar nuestro trabajo en las condiciones óptimas para nosotros y para vuestros perros. Dividido en dos áreas: <b>tienda y peluquería canina</b>, ambos espacios se comunican entre sí facilitando la correcta ventilación. El local se desinfecta a diario incluyendo <b>limpieza ambiental por ionizador de ozono antibacteriana</b>. Contamos con amplia zona de <b>parking gratuito</b> para hacer más cómoda la entrega y recogida de clientes peludos.' + closeQuote,
          img: this.$route.name + '/yorkshire-en-mesa-de-corte.jpg',
          alt: 'Instalaciones de ' + this.$store.state.owner.copyright + ', Valdemoro, Madrid',
          reflected: true
        },
        {
          title: 'Bañeras hidráulicas...',
          description: '...Eléctricas activadas con pedal, permiten regular la altura inmediatamente <b>facilitando así que nuestros clientes caninos suban o bajen cómodamente y sin riesgo de lesiones</b> para ellos y para nuestros profesionales. Se trata de variar la altura según el tamaño de los perros y también en función de la parte del perro que se trabaje. Con suelo antideslizante y banqueta para las razas mini.' + closeQuote,
          img: this.$route.name + '/asistencia-profesional-autolavado-peluqueria-canina-canessa.jpg',
          alt: 'Bañera hidráulica de ' + this.$store.state.owner.copyright + ', Valdemoro, Madrid',
          reflected: false
        },
        {
          title: 'Expulsadores de aire...',
          description: '...Y <b>cabina de secado</b> de última generación con dos motores para secar a tu <em>mascota</em> animal de compañía <b>más rápidamente minificando el estrés</b> que este pueda sufrir durante el proceso de secado. Además no generan calor por resistencia, como los secadores de mano, que en largas exposiciones pueden provocar dermatitis y otras enfermedades cutáneas y no son recomendables para secar animales domésticos.' + closeQuote,
          img: this.$route.name + '/secador-tornado-autolavado-peluqueria-canina-canessa.jpg',
          alt: 'Expulsadores de aire de ' + this.$store.state.owner.copyright + ', Valdemoro, Madrid',
          reflected: true
        },
        {
          title: 'Mesas hidráulicas...',
          description: '...Eléctricas activadas con pedal, permiten regular la altura inmediatamente <b>facilitando así que nuestros clientes caninos suban y bajen cómodamente y sin riesgo de lesiones</b> para ellos y para nuestros profesionales. No solo se trata de variar la altura en función del tamaño de los perros sino también en función de la parte del perro que se trabaje.' + closeQuote,
          img: this.$route.name + '/asistencia-profesional-autolavado-peluqueria-canina-canessa.jpg',
          alt: 'Mesa hidráulica de ' + this.$store.state.owner.copyright + ', Valdemoro, Madrid',
          reflected: false
        },
        {
          title: 'Tijeras profesionales...',
          description: '...Rectas de corte y curvas para esculpir todas ellas de aleación de acero suizo siempre de las mejores marcas asegurando la <b>precisión en el corte</b>. Perfectas para todo tipo de corte: higiénicos, comerciales, de exposición, de mantenimiento… Las cuidamos con un <b>afilado recurrente</b> así como una <b>limpieza y desinfección diaria</b> con aceite Oil fresh.' + closeQuote,
          img: this.$route.name + '/yorkshire-en-mesa-de-corte.jpg',
          alt: 'Tijeras de ' + this.$store.state.owner.copyright + ', Valdemoro, Madrid',
          reflected: true
        },
        {
          title: 'Máquinas de corte...',
          description: '...Trabajamos con la <b>marca de mayor prestigio y más valorada</b> mundialmente en máquinas de baterías profesionales: Heiniger. De fabricación Suiza destacan por su máxima calidad, resistencia y potencia para peluquería de perros y gatos. Como con las tijeras, cuidamos las cuchillas de nuestras máquinas con un <b>afilado recurrente</b> así como una <b>limpieza y desinfección diaria</b> con aceite Oil fresh.' + closeQuote,
          img: this.$route.name + '/yorkshire-en-mesa-de-corte.jpg',
          alt: 'Máquinas de ' + this.$store.state.owner.copyright + ', Valdemoro, Madrid',
          reflected: false
        },
        // {
        //   title: 'Bañera...',
        //   description: '...Con.' + closeQuote,
        //   img: this.$route.name + '/yorkshire-en-mesa-de-corte.jpg',
        //   alt: 'Baño en ' + this.$store.state.owner.copyright + ', Valdemoro, Madrid',
        //   reflected: true
        // },
      ]
    }
  },
  head() {
    const title = 'Instalaciones de'
    const description =
      'Instalaciones y equipo en ' + this.owner.copyright + ': nuestros servicios con la mayor eficacia, menor estrés y mejor comodidad para tu amigo peludo'
    const canonical = 'https://' + this.owner.url + this.$route.path

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'Classification', name: 'Classification', content: 'Business' },
        { hid: 'subject', name: 'subject', content: description },
      ],
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { innerHTML: JSON.stringify(this.owner.schema), type: 'application/ld+json' },
      ],
      link: [
        { rel: 'canonical', hid: 'canonical', href: canonical },
        { rel: 'alternate', hid: 'alternate', href: canonical+'/#!' },
        { rel: 'alternate', hid: 'alternate', href: canonical+'#!' },
      ]
    }
  }
}
</script>
