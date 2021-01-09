<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        canessa
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      owner: this.$store.state.owner,
    }
  },
  head() {
    const title = ''
    const description =
      'Peluquería canina Canessa realiza sus servicios profesionales con la mejor atención y el mínimo estrés para tu amigo peludo. 91 248 04 30'
    const canonical = 'https://peluqueriacanessa.com'

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'Classification', name: 'Classification', content: 'Business' },
        { hid: 'subject', name: 'subject', content: description },
        // Facebook verification domain to allow Business Manager & Marketing platforms
        { hid: 'facebook-domain-verification', name: 'facebook-domain-verification', content: 'ewx7qptinl041xcf1o9e1b7x6pj26t' },
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
