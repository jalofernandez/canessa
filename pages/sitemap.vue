<template>
  <main :class="$route.name">
    <SectionHero :hero="hero" :page="$route.name" />
    <TheFooter :isDisabledCurrentPage="true" />
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
          src: 'canessa-slash-gafotas.png',
          width: 200,
          height: 257
        }
      }
    }
  },
  head() {
    const title = 'Mapa sitio de'
    const description =
      'Mapa del sitio web de ' + this.owner.copyright + ' en la calle Vicente Aleixandre, 5. 28341. Valdemoro, Madrid. Citas por teléfono y WhatsApp: 91 248 04 30'
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
