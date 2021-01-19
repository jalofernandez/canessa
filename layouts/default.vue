<template>
  <div :class="scrolling ? 'is-scrolling' : null">
    <!-- top Navbar (desktop) or top Logo (mobile) -->
    <nav
      class="navbar is-fixed-top top-bar"
      role="navigation"
      aria-label="main navigation"
      v-if="$mq !== 'mobile' && $mq !== 'smartphone' && $mq !== 'tablet'"
    >
      <div class="navbar-brand has-text-centered">
        <NuxtLink
          class="navbar-item has-logo"
          to="/"
          :title="`Ir a la página de inicio de ${owner.nickname}`"
        >
          <img
            :src="require(`~/assets/artworks/logos/canessa-logo.svg`)"
            :alt="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
            :title="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
            width="132"
            height="40"
          >
        </NuxtLink>
      </div>
      <div class="navbar-end">
        <NuxtLink
          :class="['navbar-item', item.page]"
          :to="item.page"
          :title="`${item.name} de ${owner.copyright}`"
          v-for="(item, index) in navLinks"
          :key="index"
        >
          {{ item.name }}
        </NuxtLink>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Más...
          </a>
          <div class="navbar-dropdown is-right">
            <NuxtLink
              :class="['navbar-item', item.page]"
              :to="item.page"
              :title="`${item.name} de ${owner.copyright}`"
              v-for="(item, index) in dropdownLinks"
              :key="index"
            >
              {{ item.name }}
            </NuxtLink>
            <hr class="navbar-divider">
            <a class="navbar-item">
              <small>Version <b>2.0.0</b></small>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <!-- all Pages content -->
    <transition name="fade" appear>
      <Nuxt />
    </transition>
    <!-- Modal dialog -->
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
    <!-- bottom main Navbar -->
    <nav class="navbar is-fixed-bottom bottom-bar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
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
          <NuxtLink class="navbar-item sitemap" to="/sitemap" :title="`Mapa del sitio web de ${owner.copyright}`">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolling: false,
      isMenuShown: false,
      owner: this.$store.state.owner,
      pages: this.$store.state.pages,
      linksListBreak: 5,
      navLinks: null,
      dropdownLinks: null
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
    }
    let navs = this.pages.links 
    this.navLinks = navs.slice(0,this.linksListBreak)
    this.dropdownLinks = navs.slice(this.linksListBreak,11)
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    toggleShow() {
      this.isMenuShown = !this.isMenuShown
    },
    handleScroll() {
      const top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      this.scrolling = top > 150
    },
  }
}
</script>
