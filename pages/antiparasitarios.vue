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
          title: '¿No me vas a proteger?',
          description: 'En las estaciones del año calurosas proliferan los insectos y mosquitos que <b>transmiten enfermedades a nuestras mascotas</b>. No hace falta comentar que la salud de nuestros amigos peludos es lo principal así que... ¡<b>Protégelos</b>  de insectos voladores y parásitos externos con los <b>mejores productos del mercado</b>!' + closeQuote,
          link: '¿Dónde comprar antiparasitarios?',
          to: 'contacto',
          img: this.$route.name + '/antiparasitarios-peluqueria-canina-canessa.jpg',
          alt: 'Productos Antiparasitarios en ' + this.$store.state.owner.copyright + ', Valdemoro, Madrid',
          reflected: false
        },
        {
          title: 'Collares antiparásitos de Scalibor',
          description: 'El collar Scalibor protege a tu perro de la <b>leishmaniasis</b> gracias a que funciona como un <b>potente repelente contra los mosquitos</b> flebotomos. Su innovador diseño libera la deltametrina de manera constante que se expande por toda la superficie del cuerpo. También es efectivo <b>contra pulgas y garrapatas</b>.' + closeQuote,
          link: '¿Dónde comprar collares Scalibor?',
          to: 'contacto',
          img: this.$route.name + '/scalibor-collar-antiparasitario-peluqueria-canina-canessa.jpg',
          alt: 'Scalibor collares antiparasitarios en ' + this.$store.state.owner.copyright + ', Valdemoro, Madrid',
          reflected: true
        },
        {
          title: 'Collares antiparásitos de Fletcare',
          description: 'Collar <b>natural sin insecticida</b> protector contra parásitos externos (mosquitos, pulgas, garrapatas, etc..). Puede <b>utilizarse en cachorros</b> a partir de 3 meses de edad. Producto nacional del laboratorio veterinario Farbiol de Salamanca.' + closeQuote,
          link: '¿Dónde comprar collares Fletcare?',
          to: 'contacto',
          img: this.$route.name + '/fletcare-collar-antiparasitario-peluqueria-canina-canessa.jpg',
          alt: 'Fletcare collares naturales antiparasitarios en ' + this.$store.state.owner.copyright + ', Valdemoro, Madrid',
          reflected: false
        },
        {
          title: 'Collares antiparásitos de Francodex',
          description: 'Collar <b>repelente natural</b> para deshacerte de parásitos de fácil colocación y ajuste. Contiene extracto de margosa que es un efectivo repelente natural que evita la proliferación de ácaros, pulgas y garrapatas. También <b>previene contra la picadura de mosquitos</b>.' + closeQuote,
          link: '¿Dónde comprar collares Francodex?',
          to: 'contacto',
          img: this.$route.name + '/francodex-collar-antiparasitario-peluqueria-canina-canessa.jpg',
          alt: 'Francodex collares con repelente natural en ' + this.$store.state.owner.copyright + ', Valdemoro, Madrid',
          reflected: true
        },
        {
          title: 'Pipetas antiparásitos de Fletcare',
          description: '<b>Repelente natural</b> ahuyentador de mosquitos, pulgas y garrapatas <b>para perros y gatos</b>. Para razas grandes o muy grandes, administrar el contenido completo de una pipeta pero para razas medianas y pequeñas, administrar sólo la mitad del contenido de una pipeta.' + closeQuote,
          link: '¿Dónde comprar pipetas Fletcare?',
          to: 'contacto',
          img: this.$route.name + '/fletcare-pipetas-antiparasitarias-peluqueria-canina-canessa.jpg',
          alt: 'Fletcare pipetas antiparasitarias en ' + this.$store.state.owner.copyright + ', Valdemoro, Madrid',
          reflected: false
        }
      ]
    }
  },
  head() {
    const title = 'Antiparasitarios en'
    const description =
      'Collares, pipetas y antiparasitarios para perros y evitar enfermedades e infecciones caninas en ' + this.owner.copyright + ' de Valdemoro. Tlf: 91 248 04 30'
    const canonical = 'https://' + this.owner.url + this.$route.path

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'Classification', name: 'Classification', content: 'Business' },
        { hid: 'subject', name: 'subject', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title + ' ' + this.owner.copyright },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:url', property: 'og:url', content: canonical },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title + ' ' + this.owner.copyright },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
        { hid: 'twitter:url', name: 'twitter:url', content: canonical }
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
  // }
}
</script>
