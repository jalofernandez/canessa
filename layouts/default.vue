<template>
  <div :class="{ 'is-scrolling': scrolling }">
    <nav class="navbar is-fixed-bottom" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <!-- <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
        </a> -->
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true" v-for="item in 3"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a
            class="navbar-item copyright"
            href="#"
            :title="`Copyright de ${owner.copyright}`"
          >
            © {{ owner.copyright }},&nbsp;<small><b>{{ owner.currentYear }}</b></small>
          </a>
          <NuxtLink class="navbar-item terms" to="/legal" :title="`Condiciones de uso del website de ${owner.copyright}`">
            {{ pages.links[9].name }}
          </NuxtLink>
          <NuxtLink class="navbar-item sitemap" to="/" :title="`Mapa del sitio web de ${owner.copyright}`">
            {{ pages.links[10].name }}
          </NuxtLink>
          <a
            class="navbar-item schedule modal-trigger"
            href="#modal_schedule"
            :title="`Horario comercial de ${owner.copyright}`"
            @click="toggleShow()"
            v-if="!isMenuShown"
          >
            Horario
          </a>
        </div>
        <div class="navbar-end">
          <!-- to big screens -->
          <a
            class="navbar-item phone" 
            href="tel:912480430"
            :title="`Llamar a ${owner.copyright}`"
            v-if="$mq !== 'tablet'"
          >
            <span class="icon-text">
              <span class="icon">
                <i class="mdi mdi-phone"></i>
              </span>
              91 248 04 30
            </span>
          </a>
          <a
            class="navbar-item map" 
            href="https://goo.gl/maps/Aegzf2qZF4x"
            :title="`Dirección de ${owner.copyright} en Google Maps`"
            target="_blank"
            rel="noopener noreferrer"
            v-if="$mq !== 'tablet'"
          >
            <span class="icon-text">
              <span class="icon">
                <i class="mdi mdi-map-marker-outline"></i>
              </span>
              <small>
                Vicente Aleixandre, 5. <span v-if="$mq !== 'laptop'">28341, </span>Valdemoro<span v-if="$mq !== 'laptop'">, Madrid</span>
              </small>
            </span>
          </a>
          <!-- to small screens -->
          <!-- <a class="navbar-item" href="" title="" v-if="$mq == 'tablet'">Contacto</a> -->
          <a
            class="navbar-item whatsapp"
            :href="`https://wa.me/${owner.phone}`"
            :title="`Llamar o escribir al WhatsApp ${owner.phone} de ${owner.copyright}`"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="icon">
              <i class="mdi mdi-36px mdi-whatsapp"></i>
            </span>
          </a>
          <a
            class="navbar-item facebook"
            href="https://www.facebook.com/Peluqueria-Canina-Canessa-113194982084561/"
            :title="`Facebook de ${owner.copyright}`"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="icon">
              <i class="mdi mdi-24px mdi-facebook"></i>
            </span>
          </a>
          <a
            class="navbar-item instagram"
            href="https://www.instagram.com/peluqueriacanessa/"
            :title="`Instagram de ${owner.copyright}`"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="icon">
              <i class="mdi mdi-24px mdi-instagram"></i>
            </span>
          </a>
          <a
            class="navbar-item youtube"
            href="https://www.youtube.com/channel/UCqzf03PPcv5F3u0RAEtwqmw"
            :title="`Canal de YouTube de ${owner.copyright}`"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="icon">
              <i class="mdi mdi-24px mdi-youtube"></i>
            </span>
          </a>
        </div>
      </div>
    </nav>
    <transition name="fade" appear>
      <Nuxt />
    </transition>
    <div :class="['modal', { 'is-active': isMenuShown }]">
      <div class="modal-background" @click="toggleShow()"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" aria-label="close" @click="toggleShow()"></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
        </section>
        <footer class="modal-card-foot">
          <button class="button" @click="toggleShow()">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolling: true,
      isMenuShown: false,
      owner: this.$store.state.owner,
      pages: this.$store.state.pages,
    }
  },
  methods: {
    toggleShow() {
      this.isMenuShown = !this.isMenuShown
    }
  }
}
</script>
