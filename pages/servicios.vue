<template>
  <main :class="$route.name">
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
          title: 'La peluquería canina...',
          description: '...No es solo una cuestión de estética, sino también de <b>higiene</b>, <b>salud</b>, y lo más importante, <b>bienestar</b> del animal porque sabemos lo importante que es para ti tu perro y lo mimaremos como se merece, con los mejores métodos y técnicas no invasivas garantizando un resultado final impecable y sin molestias para él. ¡Se merecen un trato especial!' + closeQuote,
          link: 'Más sobre peluquería',
          to: 'peluqueria',
          img: this.$route.name + '/corte-a-maquina-02-peluqueria-canina-canessa.jpg',
          alt: 'Corte a máquina de mestizo de yorkshire en ' + this.$store.state.owner.copyright + ', Madrid',
          reflected: false
        },
        {
          title: 'Baños al mejor precio',
          description: 'Nosotros bañamos a tu mascota <b>evitándote las molestias</b> derivadas de este proceso en tu hogar como la limpieza posterior, los pelos en suspensión, los olores... Nosotros, gracias a nuestra <b>bañera hidráulica</b>, toallas gigantes y explusadores (secadores de alta potencia) bañaremos a tu amigo peludo por ti ofreciéndote un perro sano y feliz.' + closeQuote,
          link: 'Más sobre baños y servicios',
          to: 'peluqueria',
          img: this.$route.name + '/bano-precorte-02-peluqueria-canina-canessa.jpg',
          alt: 'Baño tras precorte en ' + this.$store.state.owner.copyright + ', Madrid',
          reflected: true
        },
        {
          title: 'Pienso y alimentos caninos',
          description: 'Sabemos muy bien que la alimentación de nuestro perro es la <b>base de su bienestar y su comportamiento</b>. Por ello, en la peluquería canina Canessa no hemos dudado a la hora de decidir qué productos vamos a vender y con qué marcas queremos trabajar.' + closeQuote,
          link: 'Todos nuestros piensos',
          to: 'piensos',
          img: this.$route.name + '/affinity-gama-piensos-peluqueria-canina-canessa.jpg',
          alt: 'Piensos y alimento canino en ' + this.$store.state.owner.copyright + ', Madrid',
          reflected: false
        },
        {
          title: 'Complementos para los peludos',
          description: 'Hay razas que requieren un mayor mantenimiento que otras pero todas necesitan baño para estar limpios y aseados además de cepillado para retirar pelo muerto y evitar los nudos. En la peluquería canina Canessa te ofrecemos <b>amplia variedad de productos</b> para estas tareas.' + closeQuote,
          link: 'Todos nuestros productos',
          // TODO: change the following key to "to: 'Complementos'" when the page exist
          to: 'piensos',
          img: this.$route.name + '/bubbles-champu-perfume-peluqueria-canina-canessa.jpg',
          alt: 'Champú y perfume Bubbles disponibles en ' + this.$store.state.owner.copyright + ', Madrid',
          reflected: true
        },
        {
          title: 'Paseamos y entrenamos a tu mascota',
          description: 'Servicio exclusivo de: guardería canina, paseos relajantes, entrenamiento físico, adiestramiento y gestión emocional por <b>Rafa Cros</b>, nuestro especialista en </b>psicología y entrenamiento canino</b>.' + closeQuote,
          link: 'Servicios de Mascotactiva',
          to: 'mascotactiva',
          img: this.$route.name + '/paseador-canino-mascotactiva-peluqueria-canina-canessa.jpg',
          alt: 'Psicología y entrenamiento canino de Mascotactiva en ' + this.$store.state.owner.copyright + ', Madrid',
          reflected: false
        },
        {
          title: 'Vanessa Vizcaya: Canessa',
          description: 'Tras ' + this.yearsOfExperience(2009) + ' años de experiencia y formación continuada, Canessa asume la dirección y gerencia de su propio salón de peluquería canina en la localidad madrileña de Valdemoro para poder seguir desarrollándose en su pasión por la belleza animal...' + closeQuote,
          link: 'Saber más sobre mi',
          to: 'vanessavizcaya',
          img: this.$route.name + '/vanessa-vizcaya-peluqueria-canina-canessa.jpg',
          alt: 'Más sobre ' + this.$store.state.owner.name + ' en' + this.$store.state.owner.copyright + ', Madrid',
          reflected: true
        },
      ]
    }
  },
  head() {
    const title = 'Servicios de'
    const description =
      'Servicios de ' + this.owner.copyright + ' con cortes de pelo comerciales, de exposición, higiénicos, arreglos, stripping a tijera y máquina. Baños para perros'
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
  },
  // mounted() {
  //   // to allow scrollToTop behaviour when page loads cause Nuxt bug...
  //   // ...not necessary if U overwrites "router" in "nuxt.config" file
  //   window.scrollTo(0, 0)
  // },
  methods: {
    yearsOfExperience(since) {
      let currentYear = new Date().getFullYear()
      return currentYear - since
    }
  }
}
</script>
