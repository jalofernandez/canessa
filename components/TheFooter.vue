<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="menu column is-3 is-offset-2 is-four-fifths-mobile is-offset-one-fifth-mobile">
          <p class="is-size-6 has-text-grey-darker mb-2">
            <b>Páginas:</b>
          </p>
          <ul class="menu-list">
            <li v-for="(link, index) in pages.links" :key="index">
              <NuxtLink
                :to="{ name: link.page }"
                :title="`Ir a la página ${link.name} de ${owner.nickname}`"
              >
                <span class="icon-text">
                  <span class="icon has-text-grey-light">
                    <i :class="`mdi mdi-${link.icon}`"></i>
                  </span>
                  {{ link.name }}
                </span>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="menu column is-3 is-four-fifths-mobile is-offset-one-fifth-mobile">
          <p class="is-size-6 has-text-grey-darker mb-2">
            <b>Blog:</b>
          </p>
          <ul class="menu-list">
            <li v-for="(post, index) in blog" :key="index">
              <NuxtLink
                :to="{ name: post.page }"
                :title="`Ir al post: ${post.name} de ${owner.nickname}`"
              >
                <span class="icon-text">
                  <span class="icon has-text-grey-light">
                    <i class="mdi mdi-subdirectory-arrow-right"></i>
                  </span>
                  {{ post.name }}
                </span>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="menu column is-4 is-four-fifths-mobile is-offset-one-fifth-mobile">
          <p class="is-size-6 has-text-grey-darker mb-2">
            <b>Términos legales:</b>
          </p>
          <ul class="menu-list">
            <li v-for="(term, index) in terms" :key="index">
              <NuxtLink
                :to="{ name: term.page }"
                :title="`Ir al post: ${term.name} de ${owner.nickname}`"
              >
                <span class="icon-text">
                  <span class="icon has-text-grey-light">
                    <i class="mdi mdi-subdirectory-arrow-right"></i>
                  </span>
                  {{ term.name }}
                </span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="content has-text-centered">
        <div class="control level-item">
          <NuxtLink to="/">
            <div class="tags has-addons">
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
            :alt="`Ir al website de ${owner.author}`"
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
            :alt="`Ir al website de ${owner.partner}.com`"
            target="_blank"
            rel="noopener noreferrer"
          >
            <small class="has-text-grey-darker">
              En colaboración con: <br v-if="$mq == 'mobile'"/><span>#<b>HazTuNegocioDigital</b></span>
            </small>
          </a>
        </div>
        <div class="control level-item mt-3 mb-1">
          <small class="has-text-grey-dark">Tecnología utilizada:</small>
        </div>
        <div class="control level-item">
          <span class="icon is-medium" v-for="(item, index) in tech" :key="index">
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
  data() {
    return {
      owner: this.$store.state.owner,
      pages: this.$store.state.pages,
      developBy: 'Website diseñado y desarrollado por',
      blog: [
        { name: "Blog post uno", page: "legal"},
        { name: "Blog post dos", page: "legal"},
        { name: "Blog post tres", page: "legal"},
        { name: "Blog post cuatro", page: "legal"},
        { name: "Ver todos los post...", page: "legal"}
      ],
      terms: [
        { name: "Responsable", page: "legal"},
        { name: "Política de privacidad", page: "legal"},
        { name: "Condiciones de uso", page: "legal"},
        { name: "Política de cookies", page: "legal"}
      ],
      tech: [ 'nodejs', 'vuejs', 'nuxt', 'language-html5', 'language-css3' ]
    }
  },
  head() {
    return {
      link: [
        { rel: 'dns-prefetch', href: '//' + this.$store.state.owner.author + '.com' },
        { rel: 'dns-prefetch', href: '//' + this.$store.state.owner.partner + '.com' },
      ]
    }
  }
}
</script>
