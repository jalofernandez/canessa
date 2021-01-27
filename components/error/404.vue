<template>
  <main class="error-404">
    <SectionHero :hero="hero" :page="'error'" />
    <section class="hero is-small is-hidden-mobile">
      <div class="hero-body">
        <div class="container has-tips">
          <BoxItem :items="tips" />
        </div>
      </div>
    </section>
    <SectionBtn :copy="btnCopy" />
    <TheFooter />
  </main>
</template>

<script>
export default {
  name: 'error-404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      owner: this.$store.state.owner,
      pages: this.$store.state.pages,
      hero: {
        title: '🔥 Página no encontrada 🔥',
        subtitle:
          'Parece que <span class="has-text-weight-bold">la página que buscas no existe</span>. <br />¡Lo sentimos! <span class="is-hidden-mobile">Podría ser por alguna de estas causas como...</span>',
        img: {
          src: '404-dog.svg',
          width: 200,
          height: 176
        }
      },
      tips: [
        { title: '...Que haya tecleado incorrectamente la dirección URL.' },
        { title: '...Que haya perdido su conexión a internet.' },
        { title: '...Que la página esté obsoleta y haya sido eliminada.' },
        { title: '...Que la página no exista en el idioma que solicita.' },
      ],
      btnCopy: 'Volver a la página de inicio'
    }
  },
  head() {
    const title = '404: ' + this.hero.title + ' en'
    const description =
      'Página de error 404 del sitio web ' + this.owner.copyright + '. Pruebe otra URL o vaya a la página de inicio para encontrar la descripción de nuestros servicios y contacto.'
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
      // IMP! Better remvoe canonical metatags links in order to avoid weird URL generation 
      // link: [
      //   { rel: 'canonical', hid: 'canonical', href: canonical },
      //   { rel: 'alternate', hid: 'alternate', href: canonical+'/#!' },
      //   { rel: 'alternate', hid: 'alternate', href: canonical+'#!' },
      // ]
    }
  }
};
</script>
