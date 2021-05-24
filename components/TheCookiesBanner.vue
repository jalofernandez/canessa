<template>
  <transition name="canessa-transition" appear>
    <article class="media box cta is-cookies-banner" v-if="bannerShow">
      <figure class="media-left mr-2" v-if="!scrolling">
        <p class="image is-64x64">
          <picture>
            <source :srcset="require('~/assets/images/legal/canessa-cookie-bowl.png?webp')" type="image/webp" />
            <source :srcset="require('~/assets/images/legal/canessa-cookie-bowl.png')" type="image/png" />
            <img
              :src="require('~/assets/images/legal/canessa-cookie-bowl.png')"
              :alt="`Aviso de cookies en ${owner.copyright}`"
              :title="`Aviso de cookies en ${owner.copyright}`"
              width="64"
              height="64"
            />
          </picture>
        </p>
      </figure>
      <div class="media-content">
        <div class="content is-normal">
          <p>
            <small>
              <span v-if="!scrolling">Sólo usamos <b>cookies</b> de analítica. Puedes gestionarlas </span>
              <span v-else>🍪 &nbsp;Ver <b>cookies</b> </span>
              <NuxtLink
                class="has-text-link has-underline"
                :to="{ path: '/legal', hash:'#section-cookies'}"
                :title="`Ver y gestionar cookies de ${owner.copyright}`"
              >
              <b>aquí.</b>
              </NuxtLink>
              <span class="tag is-primary ml-2" @click="closeBanner()">
                <span class="icon is-small">
                  <i class="mdi mdi-check"></i>
                </span>
                <b>Aceptar</b>
              </span>
            </small>
          </p>
        </div>
      </div>
    </article>
  </transition>
</template>

<script>
export default {
  name: 'TheCookiesBanner',
  props: {
    scrolling: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data() {
    return {
      bannerShow: true,
      owner: this.$store.state.owner
    }
  },
  methods: {
    closeBanner() {
      this.bannerShow = false
    }
  }
}
</script>
