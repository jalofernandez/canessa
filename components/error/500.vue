<template>
  <main class="error-500">
    <SectionHero :hero="hero" :page="'error'" />
    <section class="hero is-small is-hidden-mobile">
      <div class="hero-body">
        <div class="container">
          <BoxItem class="has-tips" :items="tips" />
        </div>
      </div>
    </section>
    <SectionBtn :copy="btnCopy" />
    <TheFooter />
  </main>
</template>

<script>
export default {
  name: 'error-500',
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
        title: '🔥 Internal Server Error 🔥',
        subtitle:
          'Parece que ha sucedido un <span class="has-text-weight-bold">error al intentar acceder al servidor</span>. <br />¡Lo sentimos! <span class="is-hidden-mobile">Prueba alguna de estas formas para solucionar este error...</span>',
        img: null
      },
      tips: [
        { title: '...Recargar la página con F5 o cntrl + R.' },
        { title: '...Dejar un margen de tiempo para volver intentar entrar a la página ya que es posible que haya alguna tarea del servidor que impida entrar a la web por el momento.' },
        { title: '...Entrar en una pestaña de incógnito o borrar la cache de tu navegador.' },
        { title: '...Eliminar las Cookies, cerrar el navegador y volver abrirlo.' },
      ],
      btnCopy: 'Volver a la página de inicio'
    }
  },
  head() {
    const title = '500: ' + this.hero.title + ' en'
    const description =
      'Página de error 500 del sitio web ' + this.owner.copyright + '. Pruebe otra URL o vaya a la página de inicio para encontrar la descripción de nuestros servicios y contacto.'
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
