<template>
  <div :class="[ 'main-wrapper', { 'is-scrolling' : scrolling }]">
    <!-- top Navbar (desktop only) -->
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
            :src="require(`~/assets/images/logos/canessa-logo.svg`)"
            :alt="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
            :title="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
            width="132"
            height="40"
          />
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
            <hr class="navbar-divider"/>
            <a class="navbar-item">
              <small>Version <b>{{ owner.version }}</b></small>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <!-- all Pages content -->
    <transition name="canessa-transition" appear>
      <Nuxt />
    </transition>
    <!-- Aside main Menu (mobile only) -->
    <div :class="['aside-navbar-menu', { 'is-open': isMenuShown }]">
      <div class="aside-logo">
        <img
          class="mr-3"
          :src="require(`~/assets/images/logos/canessa-logo.svg`)"
          :alt="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
          :title="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
          width="99"
          height="30"
        />
        <a
          class="aside-rrss facebook"
          href="https://www.facebook.com/Peluqueria-Canina-Canessa-113194982084561/"
          :title="`Facebook de ${owner.copyright}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="icon is-medium">
            <i class="mdi mdi-24px mdi-facebook"></i>
          </span>
        </a>
        <a
          class="aside-rrss youtube"
          href="https://www.youtube.com/channel/UCqzf03PPcv5F3u0RAEtwqmw"
          :title="`Canal de YouTube de ${owner.copyright}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="icon is-medium">
            <i class="mdi mdi-24px mdi-youtube"></i>
          </span>
        </a>
        <a
          class="aside-rrss instagram"
          href="https://www.instagram.com/peluqueriacanessa/"
          :title="`Instagram de ${owner.copyright}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="icon is-medium">
            <i class="mdi mdi-24px mdi-instagram"></i>
          </span>
        </a>
      </div>
      <div class="aside-nav-list" @click="isMenuShown = false">
        <NuxtLink
          :class="['navbar-item', item.page.substring(1)]"
          :to="item.page"
          :title="`${item.name} de ${owner.copyright}`"
          v-for="(item, index) in pages.links"
          :key="index"
        >
          <span class="icon-text">
            <span class="icon has-text-black">
              <!-- <i :class="`mdi mdi-${item.icon}`"></i> -->
            <span class="mdi mdi-subdirectory-arrow-right"></span>
            </span>
            <span class="pl-2">{{ item.name }}</span>
          </span>
        </NuxtLink>
        <a
          class="navbar-item phone" 
          :href="`tel:${owner.phone}`"
          :title="`Llamar a ${owner.copyright}`"
        >
          <span class="icon-text">
            <span class="icon has-text-primary">
              <i class="mdi mdi-phone"></i>
            </span>
            <span class="has-text-primary pl-2">91 248 04 30</span>
          </span>
        </a>
        <a
          class="navbar-item whatsapp"
          :href="`https://wa.me/34${owner.phone}`"
          :title="`Llamar o escribir al WhatsApp ${owner.phone} de ${owner.copyright}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="icon-text">
            <span class="icon has-text-success">
              <i class="mdi mdi-whatsapp"></i>
            </span>
            <span class="has-text-success pl-2">WhatsApp</span>
          </span>
        </a>
      </div>
    </div>
    <!-- Modal dialog -->
    <div :class="['modal', isModalShown ? 'is-active' : 'not-active' ]">
      <div class="modal-background" @click="toggleShow()"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p
            :class="[
              'modal-card-title',
              'is-size-3',
              'is-size-4-mobile',
              'has-text-primary',
              $mq == 'mobile' ? 'has-text-weight-bold' : 'has-text-weight-medium'
            ]"
          >Horario</p>
          <button class="delete" aria-label="close" @click="toggleShow()"></button>
        </header>
        <section class="modal-card-body pt-0">
          <div class="menu">
            <ul class="menu-list">
              <li class="has-text-link mb-2">
                De <b>lunes</b> a <b>viernes</b>:
              </li>
              <li>
                <span class="icon-text">
                  <span class="icon has-text-grey-light">
                    <i class="mdi mdi-clock-outline"></i>
                  </span>
                  Manañas de <b>10:30</b> a <b>13:30</b> h.
                </span>
              </li>
              <li>
                <span class="icon-text">
                  <span class="icon has-text-grey-light">
                    <i class="mdi mdi-clock-outline"></i>
                  </span>
                  Tardes de <b>16:30</b> a <b>20:00</b> h.
                </span>
              </li>
              <li class="has-text-link mt-3 mb-2">
                <b>Sábados</b> y <b>domingos</b>:
              </li>
              <li>
                <span class="icon-text">
                  <span class="icon has-text-grey-light">
                    <i class="mdi mdi-clock-outline"></i>
                  </span>
                  Mañanas y tardes <b>cerrado</b>.
                </span>
              </li>
            </ul>
          </div>
        </section>
        <footer class="modal-card-foot is-justify-content-space-between">
          <a
            class="button is-success is-outlined"
            :href="`tel:${owner.phone}`"
            :title="`Llamar a ${owner.copyright}`"
          >
            <span class="icon is-small">
              <i class="mdi mdi-phone"></i>
            </span>
            <span><b>Pedir cita</b></span>
          </a>
          <button class="button is-danger is-outlined is-pulled-right" @click="toggleShow()">
            <span>Cerrar</span>
            <span class="icon is-small">
              <i class="mdi mdi-close"></i>
            </span>
          </button>
        </footer>
      </div>
    </div>
    <TheCookiesBanner :scrolling="scrolling" />
    <!-- bottom main Navbar (destop != mobile) -->
    <nav class="navbar is-fixed-bottom bottom-bar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand" v-if="$mq == 'mobile' || $mq == 'smartphone' || $mq == 'tablet'">
        <transition name="canessa-transition" appear>
          <figure class="image is-64x64" v-if="!isMenuShown">
            <img
              class="is-rounded"
              :src="require(`~/assets/images/logos/canessa-circle-logo.svg`)"
              :alt="`Icono de ${owner.nickname} en Valdemoro, Madrid`"
              :title="`Icono de ${owner.nickname} en Valdemoro, Madrid`"
              width="60"
              height="60"
            />
          </figure>
        </transition>
        <transition name="canessa-transition" :duration="{ enter: 500, leave: 800 }" appear>
          <div class="buttons" v-if="!isMenuShown">
            <a
              class="navbar-item schedule"
              href="#modal_schedule"
              :title="`Horario comercial de ${owner.copyright}`"
              @click.prevent="toggleShow()"
            >
              Horario
            </a>
            <NuxtLink
              :class="`navbar-item ${pages.links[4].page}`"
              :to="pages.links[4].page"
              :title="`Contactar con ${owner.copyright}`"
            >
              {{ pages.links[4].name }}
            </NuxtLink>
            <a
              class="navbar-item whatsapp"
              :href="`https://wa.me/34${owner.phone}`"
              :title="`Llamar o escribir al WhatsApp ${owner.phone} de ${owner.copyright}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="icon">
                <i class="mdi mdi-36px mdi-whatsapp"></i>
              </span>
            </a>
          </div>
        </transition>
        <a
          role="button"
          :class="['navbar-burger', 'burger', { 'is-active': isMenuShown }]"
          aria-label="menu"
          aria-expanded="false"
          @click.prevent="isMenuShown = !isMenuShown"
        >
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
          <a
            class="navbar-item schedule modal-trigger"
            href="#modal_schedule"
            :title="`Horario comercial de ${owner.copyright}`"
            @click.prevent="toggleShow()"
            v-if="!isModalShown"
          >
            <span class="icon-text">
              <span class="icon">
                <i class="mdi mdi-clock-outline"></i>
              </span>
              Horario
            </span>
          </a>
        </div>
        <div class="navbar-end">
          <!-- to big screens -->
          <a
            class="navbar-item phone" 
            :href="`tel:${owner.phone}`"
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
          <a
            class="navbar-item whatsapp"
            :href="`https://wa.me/34${owner.phone}`"
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
      isModalShown: false,
      isMenuShown: false,
      owner: this.$store.state.owner,
      pages: this.$store.state.pages,
      linksListBreak: 6,
      navLinks: null,
      dropdownLinks: null
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
      // TODO: check the following code to add "lazy load" in image resources to improve SEO
      // document.addEventListener('DOMContentLoaded', () => {
      //   var observer = new IntersectionObserver(lazyload, { threshold: 0.5 })
      //   var images = document.querySelectorAll('img')
      //   for (var i=0; i<images.length; i++) {
      //     observer.observe(images[i])
      //   }
      // })
    }
    // to load navigation links in top navbar & his dropdown
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
      this.isModalShown = !this.isModalShown
    },
    handleScroll() {
      const top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      this.scrolling = top > 100
    }
  }
}
</script>
