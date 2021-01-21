<template>
  <main :class="$route.name">
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
        title: 'Mapa del sitio web',
        subtitle: 
          'Sitemap o <span class="has-text-weight-bold">listado de todos los enlaces</span> internos disponibles en este sitio web.',
        img: {
          src: 'sitemap-dog.svg',
          width: 300,
          height: 168
        }
      }
    }
  },
  head() {
    const title = this.hero.title + ' de'
    const description =
      'Mapa del sitio web de ' + this.owner.copyright + ' en la calle Vicente Aleixandre, 5 - 28341 - Valdemoro, Madrid. Tlf: 91 248 04 30'
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
