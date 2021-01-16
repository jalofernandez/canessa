<template>
  <main :class="$route.name">
    <section class="section">
      <div :class="['container', {'reflected': block.reflected}]" v-for="(block, index) in blocks" :key="index">
        <div class="columns is-vcentered content is-medium">
          <div class="column is-6">
            <h2 class="has-text-primary has-text-weight-medium is-relative">
              <span class="icon is-large th-quote th-is-open">
                <i class="mdi mdi-48px mdi-format-quote-open"></i>
              </span>
              {{ block.title }}<em class="ml-1">...</em>
            </h2>
            <p v-html="block.description"></p>
            <a
              class="th-link"
              href="tel:912480430"
              :title="`${block.link} en ${owner.copyright}`"
              :alt="`${block.link} en ${owner.copyright}`"
              rel="noopener noreferrer"
            >
              {{ block.link }}: 91 248 04 30
              <span class="icon">
                <i class="mdi mdi-arrow-right"></i>
              </span>
            </a>
          </div>
          <div class="column">
            <figure class="image">
              <img
                class="artwork"
                :src="require(`~/assets/artworks/aboutme/${block.img}`)"
                :title="block.alt"
                :alt="block.alt"
                width="200"
                height="200"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
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
          title: 'Vanessa Vizcaya',
          description: '...Es una amante incondicional de los animales desde su infancia. <b>Empática como nadie con los sentimientos y las necesidades animales</b> pronto descubrió que tenía que dedicarse profesionalmente a ellos. Además siempre ha tenido perros y gatos como compañeros de vida asi que <b>sabe entenderlos a la perfección</b>.' + closeQuote,
          link: 'Prueba nuestros servicios',
          img: 'vanessa-peluqueria-canina-canessa.png',
          alt: this.$store.state.owner.name + ' de ' + this.$store.state.owner.copyright + ', Madrid',
          reflected: false
        },
        {
          title: this.yearsOfExperience(2009) + ' años de experiencia',
          description: '...Le avalan profesionalmente. En 2009 empieza a formarse como peluquera canina en la ISED. Tras este decidió completar <b>su formación con Mónica Calderón</b>, toda una institución en el sector de la peluquería canina. Los comienzos fueron servicios a domicilio pero pronto avanzó a centros veterinarios y peluquerías caninas.' + closeQuote,
          link: 'Pide cita conmigo',
          img: 'vanessa-tijeras-peluqueria-canina-canessa.png',
          alt: 'Ilustración tijeras en ' + this.$store.state.owner.copyright + ', Valdemoro, Madrid',
          reflected: true
        },
        {
          title: 'Peluquería Canessa',
          description: '...Comienza a funcionar como reemplazo de la antigua KTC en Marzo de 2017 siendo la principal tarea como peluquera canina <b>cuidar el pelaje de los perros, mejorar su higiene y procurarles un fantástico corte de pelo</b>. Esta es una tarea manual y artesana realizada con el máximo cariño y respeto en la que lo más importante es el bienestar de los animales a los que cuida y que le resulta tan gratificante.' + closeQuote,
          link: 'Reserva hora en',
          img: 'vanessa-canessa-peluqueria-canina-canessa.png',
          alt: 'Ilustración Canessa en ' + this.$store.state.owner.copyright + ', Madrid',
          reflected: false
        }
      ]
    }
  },
  head() {
    const title = this.owner.name + ' de'
    const description =
      'Sobre ' + this.owner.name + ' de ' + this.owner.copyright + ', Valdemoro, Madrid'
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
  methods: {
    yearsOfExperience(since) {
      let currentYear = new Date().getFullYear()
      return currentYear - since
    }
  }
}
</script>
