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
          <NuxtLink class="navbar-item terms" to="/" :title="`Condiciones de uso del website de ${owner.copyright}`">
            {{ pages.links[8].name }}
          </NuxtLink>
          <NuxtLink class="navbar-item sitemap" to="/" :title="`Mapa del sitio web de ${owner.copyright}`">
            {{ pages.links[9].name }}
          </NuxtLink>
          <a class="navbar-item schedule modal-trigger" href="#modal_schedule" :title="`Horario comercial de ${owner.copyright}`">
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
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolling: true,
      owner: this.$store.state.owner,
      pages: this.$store.state.pages,
    }
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
