<template>
  <main :class="$route.name">
    <iframe width="100%" height="350" frameborder="0" style="border:0;" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJiVU04useQg0RA4H40Qdl7jI&amp;key=AIzaSyDMlW8moTM7oB0zzRGfzWGOLSwwEv64t3o" allowfullscreen></iframe>
    <section class="hero is-small">
      <div class="hero-body">
        <div class="container">
          <nav class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Cita previa por <b>teléfono</b>:</p>
                <a
                  class="button is-medium is-success is-outlined"
                  :href="`tel:${owner.phone}`"
                  :title="`Llamar a ${owner.copyright}`"
                >
                  <span class="icon">
                    <i class="mdi mdi-phone"></i>
                  </span>
                  <span class="has-text-weight-semibold">91 248 04 30</span>
                </a>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Cita previa por <b>chat</b>:</p>
                <a
                  class="button is-medium is-success is-outlined"
                  :href="`https://wa.me/34${owner.phone}`"
                  :title="`Llamar o escribir al WhatsApp ${owner.phone} de ${owner.copyright}`"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="icon is-medium">
                    <i class="mdi mdi-whatsapp"></i>
                  </span>
                  <span class="has-text-weight-semibold">WhatsApp</span>
                </a>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Ver <b>mapa</b> completo:</p>
                <a
                  class="button is-medium is-link is-outlined"
                  href="https://goo.gl/maps/Aegzf2qZF4x"
                  :title="`Dirección de ${owner.copyright} en Google Maps`"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="icon">
                    <i class="mdi mdi-map-marker-outline"></i>
                  </span>
                  <span>Google maps</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
    <SectionHero :hero="hero" :page="$route.name" />
    <TheFooter />
  </main>
</template>

<script>
export default {
  data() {
    return {
      owner: this.$store.state.owner,
      pages: this.$store.state.pages,
      hero: {
        subtitle: 
          'Escríbenos, llámanos o visítanos para <span class="has-text-weight-bold">pedir cita previa o preguntar por nuestros servicios</span> de peluquería canina y felina, spa, alimentación canina, complementos...',
      }
    }
  },
  head() {
    const title = 'Contacto de'
    const description =
      'Contacta con ' + this.owner.copyright + ' para perros en la calle Vicente Aleixandre, 5. Valdemoro, Madrid. Cita previa por teléfono y WhatsApp: 91 248 04 30'
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
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>
