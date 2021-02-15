<template>
  <footer class="footer">
    <div class="container">
      <div class="content column is-8 is-offset-2" v-if="!isDisabledCurrentPage">
        <span class="icon th-quote"><i class="mdi mdi-format-quote-open"></i></span>
        Sabemos lo importante que es para ti tu perro, un miembro más de la familia, y lo mimaremos como se merece, no sólo garantizando su <b>higiene y salud</b>, 
        sino también ofreciéndole un <b>trato cariñoso para hacer que su experiencia sea gratificante y divertida</b> evitando los clásicos traumas de las sesiones de peluquería canina.
        <span class="icon th-quote"><i class="mdi mdi-format-quote-close"></i></span>
      </div>
      <div class="content has-text-centered" v-if="!isDisabledCurrentPage">
        <picture>
          <source :srcset="require('~/assets/images/logos/canessa-bone-logo.png?webp')" type="image/webp" />
          <source :srcset="require('~/assets/images/logos/canessa-bone-logo.png')" type="image/png" />
          <img
            :src="require(`~/assets/images/logos/canessa-bone-logo.png`)"
            :alt="`Creatividad de ${owner.nickname} en Valdemoro, Madrid`"
            :title="`Creatividad de ${owner.nickname} en Valdemoro, Madrid`"
            width="200"
            height="67"
          >
        </picture>
      </div>
      <div class="columns">
        <div class="menu column is-3 is-offset-1 is-10-mobile is-offset-2-mobile">
          <p class="is-size-6 has-text-grey-darker mb-2">
            <b>Páginas:</b>
          </p>
          <ul class="menu-list">
            <li v-for="(link, index) in pages.links" :key="index">
              <NuxtLink
                :to="link.page"
                :title="`Ir a la página ${link.name} de ${owner.copyright}`"
              >
                <span class="icon-text">
                  <span class="icon has-text-grey-light">
                    <i :class="`mdi mdi-${link.icon}`"></i>
                  </span>
                  <span>{{ link.name }}</span>
                </span>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="menu column is-3 is-10-mobile is-offset-2-mobile">
          <p class="is-size-6 has-text-grey-darker mb-2">
            <b>Artículos:</b>
          </p>
          <ul class="menu-list">
            <li v-for="(post, index) in blog" :key="index">
              <NuxtLink
                :to="post.page"
                :title="`Ir al post: ${post.name} de ${owner.nickname}`"
              >
                <span class="icon-text">
                  <span class="icon has-text-grey-light">
                    <i class="mdi mdi-subdirectory-arrow-right"></i>
                  </span>
                  <small>{{ post.name }}</small>
                </span>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="menu column is-4 is-10-mobile is-offset-2-mobile">
          <p class="is-size-6 has-text-grey-darker mb-2">
            <b>Nuestros amigos:</b>
          </p>
          <ul class="menu-list">
            <li v-for="(partner, index) in partnership" :key="index">
              <a
                :href="partner.url"
                :title="`${partner.name} colabora con ${owner.copyright}`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="icon-text">
                  <span class="icon has-text-grey-light">
                    <i class="mdi mdi-subdirectory-arrow-right"></i>
                  </span>
                  <small>{{ partner.name }}</small>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="content has-text-centered">
        <div class="control level-item">
          <NuxtLink to="/">
            <div class="tags are-medium has-addons">
              <span class="tag is-dark">© {{ owner.copyright }}</span>
              <span class="tag is-link">{{ owner.version }}</span>
            </div>
          </NuxtLink>
        </div>
        <div class="control level-item mt-3">
          <a
            :class="`author ${owner.author}`"
            :href="`https://${owner.author}.com`"
            :title="`${developBy} @${owner.author}: diseñador gráfico y desarrollador web / frontend`"
            target="_blank"
            rel="noopener noreferrer"
          >
            <small class="has-text-grey-darker">{{ developBy }}:</small> <br v-if="$mq == 'mobile'"/><span>{{ owner.author }}.com</span>
          </a>
        </div>
        <div class="control level-item">
          <a
            :class="`author ${owner.partner}`"
            :href="`https://${owner.partner}.com`"
            :title="`${owner.partner}: únete a la transformación digital y aumenta las ventas con tu negocio en internet`"
            target="_blank"
            rel="noopener noreferrer"
          >
            <small class="has-text-grey-darker">
              En colaboración con:
            </small>
            <br v-if="$mq == 'mobile'"/>
            <small>#<b>HazTuNegocioDigital</b></small>
          </a>
        </div>
        <div class="control level-item mt-3 mb-1">
          <small class="has-text-grey-dark">Tecnología utilizada:</small>
        </div>
        <div class="control level-item">
          <span
            class="icon is-medium"
            :title="item"
            v-for="(item, index) in tech"
            :key="index"
          >
            <i :class="`mdi mdi-24px mdi-${item}`"></i>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {
    isDisabledCurrentPage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      owner: this.$store.state.owner,
      pages: this.$store.state.pages,
      developBy: 'Website diseñado y desarrollado por',
      blog: [
        { name: '"El gran reencuentro"', page: '/blog/el-gran-reencuentro' },
        { name: '"Como Pixar capta la personalidad animal"', page: '/blog/como-pixar-capta-la-personalidad-animal' },
        { name: '"¿Quieres publicar artículos en nuestro blog?"', page: '/blog/como-publicar-post-aqui' },
        { name: 'Ver todos los artículos...', page: '/blog' }
      ],
      partnership: [
        { name: 'Protectora AiBa Madrid', url: 'http://www.aibamadrid.com' },
        { name: 'Haz tu negocio digital', url: 'https://haztunegociodigital.com' },
        { name: 'Restaurante La Antigua Bodeguita', url: 'https://haztunegociodigital.com/horeca/la-antigua-bodeguita' },
        { name: 'Bar Galicia', url: 'https://haztunegociodigital.com/horeca/bar-galicia' },
        { name: '@jalofernandez: designer + coder', url: 'https://jalofernandez.com' }
      ],
      tech: [ 'nodejs', 'vuejs', 'nuxt', 'language-html5', 'sass', 'firebase' ]
    }
  },
  head() {
    return {
      link: [
        { rel: 'dns-prefetch', href: '//' + this.$store.state.owner.author + '.com' },
        { rel: 'dns-prefetch', href: '//' + this.$store.state.owner.partner + '.com' },
        { rel: 'dns-prefetch', href: '//www.aibamadrid.com' },
      ]
    }
  }
}
</script>
