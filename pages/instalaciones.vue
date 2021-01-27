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
        Instalaciones y equipo profesional de primera para realizar nuestros servicios de peluquería y estética canina <br class="is-hidden-touch" />
        con la <b>mayor eficacia y mejor comodidad</b> para tu amigo peludo.
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
          title: 'Bañeras hidráulicas...',
          description: '...Con puerta lateral y altura regulable para poder subir y bajar a nuestros clientes peludos con la <b>máxima comodidad para ellos</b> (y para nosotros:) El fondo de la bañera presenta relieve para evitar el deslizamiento del perro.' + closeQuote,
          img: this.$route.name + '/asistencia-profesional-autolavado-peluqueria-canina-canessa.jpg',
          alt: 'Bañera hidráulica de ' + this.$store.state.owner.copyright + ', Valdemoro, Madrid',
          reflected: true
        },
        {
          title: 'Expulsadores de aire...',
          description: '...De nueva generación con dos motores para secar a tu animal de compañía <b>más rápidamente minificando el estrés</b> que este pueda sufrir durante el proceso de secado. Además no genera un calor por resistencia, como los secadores de mano, que en largas exposiciones pueden provocar dermatitis y otras enfermedades cutáneas.' + closeQuote,
          img: this.$route.name + '/secador-tornado-autolavado-peluqueria-canina-canessa.jpg',
          alt: 'Expulsadores de aire de ' + this.$store.state.owner.copyright + ', Valdemoro, Madrid',
          reflected: false
        },
        {
          title: 'Tijeras profesionales...',
          description: '...De corte y para esculpir de aleación de acero suizo siempre de las mejores marcas asegurando la precisión en el corte. Las cuidamos con un afilado recurrente así como una <b>limpieza y desinfección diaria</b> con aceite Oil fresh.' + closeQuote,
          img: this.$route.name + '/yorkshire-en-mesa-de-corte.jpg',
          alt: 'Tijeras de ' + this.$store.state.owner.copyright + ', Valdemoro, Madrid',
          reflected: true
        },
        // {
        //   title: 'Bañera...',
        //   description: '...Con.' + closeQuote,
        //   img: this.$route.name + '/yorkshire-en-mesa-de-corte.jpg',
        //   alt: 'Baño en ' + this.$store.state.owner.copyright + ', Valdemoro, Madrid',
        //   reflected: false
        // },
      ]
    }
  },
  head() {
    const title = 'Instalaciones de'
    const description =
      'Instalaciones y equipo profesional en ' + this.owner.copyright + ' para realizar nuestros servicios con la mayor eficacia y mejor comodidad para tu amigo peludo. Cita previa en el: 91 248 04 30'
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
