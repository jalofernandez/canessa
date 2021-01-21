<template>
  <main :class="$route.name">
    <SectionHero :hero="hero" :page="$route.name" />
    <section class="hero is-small">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div
              class="column is-9 is-offset-3 is-three-quarters-tablet is-offset-one-quarter-tablet is-offset-one-fifth-mobile"
            >
              <p class="is-size-5 is-size-6-mobile" v-for="(tip, index) in tips" :key="index">
                ...{{ tip }}.
              </p>
            </div>
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
    return {
      owner: this.$store.state.owner,
      pages: this.$store.state.pages,
      hero: {
        title: 'Page not found',
        subtitle:
          'Parece que <span class="has-text-weight-bold">la página que buscas no existe</span>. Lo sentimos. Podría ser por alguna de estas causas como...',
        img: {
          src: '404-dog.svg',
          width: 300,
          height: 300
        }
      },
      tips: [
        'Que haya tecleado incorrectamente la dirección URL',
        'Que haya perdido su conexión a internet',
        'Que la página esté obsoleta y haya sido eliminada',
        'Que la página no exista en el idioma que solicita'
      ]
    }
  },
  head() {
    const title = '404: ' + this.hero.title + ' en'
    const description =
      'Página de error del sitio web ' + this.owner.copyright + '. Pruebe otra URL o vaya a la página de inicio para encontrar la descripción de nuestros servicios y contacto.'
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
