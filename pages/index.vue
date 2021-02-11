<template>
  <main :class="$route.name">
    <!-- <section class="hero is-fullheight is-dark is-bold video">
      <div class="hero-video">
        <video
          id="bgvid"
          :poster="require(`~/assets/videos/afgano.jpg`)"
          :title="`Servicios ofrecidos en ${owner.copyright} en Valdemoro, Madrid`" 
          playsinline autoplay muted loop
        >
          <source src="~/assets/videos/canessa_web-promo-video_2018-09-15.mp4" type="video/mp4">
        </video>
      </div>
      <div class="hero-body">
        <div class="container">
          <h1 class="video-header-title">
            Tu perro merece:
            <span>{{ owner.copyright }}</span>
          </h1>
        </div>
      </div>
      <div class="hero-foot">
        <div class="has-text-centered">
          // Scroll down arrow here!!
        </div>
      </div>
    </section> -->
    <header class="video-header">
      <video
        id="bgvid"
        :poster="require(`~/assets/videos/afgano.jpg`)"
        :title="`Servicios ofrecidos en ${owner.copyright} en Valdemoro, Madrid`" 
        playsinline autoplay muted loop
      >
        <source src="~/assets/videos/canessa_web-promo-video_2018-09-15.mp4" type="video/mp4">
      </video>
      <div class="viewport-header">
        <h1 class="video-header-title" :style="`transform: scale(${headerScale}); opacity: ${headerOpacity}`">
          Tu perro merece:
          <span>{{ owner.copyright }}</span>
          <ScrollDownItem v-scroll-to="{ el: '#section-cta', offset: getOffset() }" />
        </h1>
      </div>
    </header>

    <div class="is-below-video">

      <div id="section-cta" class="box cta is-radiusless">
        <p class="is-size-5 is-size-6-mobile has-text-centered">
          Servicios de peluquería canina <b>profesionales y de confianza</b> para que tu fiel amigo esté tan agusto como en casa. 
          <br class="is-hidden-touch" />Así lo demuestran las <b class="has-text-primary">{{ reviews.totalReviewCount }}</b> <b>opiniones de nuestros clientes</b>:
        </p>
      </div>

      <section class="container box-list">
        <article class="media box" v-for="review in reviews.reviews" :key="review.name">
          <figure class="media-left">
            <p class="image is-32x32">
              <picture>
                <source :srcset="require(`~/assets/images/reviewers/${review.reviewer.profilePhotoUrl}.png?webp`)" type="image/webp" />
                <source :srcset="require(`~/assets/images/reviewers/${review.reviewer.profilePhotoUrl}.png`)" type="image/png" />
                <img
                  class="is-rounded"
                  :src="require(`~/assets/images/reviewers/${review.reviewer.profilePhotoUrl}.png`)"
                  :title="`Foto de usuario de Google de: ${review.name}`"
                  :alt="`Foto de usuario de Google de: ${review.name}`"
                  width="32"
                  height="32"
                >
              </picture>
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <b>{{ review.name }}</b>
                <br>
                <span class="icon has-text-warning" v-for="item in review.starRating">
                  <i class="mdi mdi-18px mdi-star"></i>
                </span>
                <br>
                <small>{{ review.comment }}</small>
              </p>
            </div>
            <!-- <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-reply"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                </a>
              </div>
            </nav> -->
          </div>
        </article>
        <!-- <div class="columns features">
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-image has-text-centered">
                <i class="fa fa-paw"></i>
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>{{ reviews.reviews[0].name }}</h4>
                  <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                  <p><a href="#">Learn more</a></p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-image has-text-centered">
                <i class="fa fa-empire"></i>
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>Opinión 2</h4>
                  <p>Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem
                  sed risus.</p>
                  <p><a href="#">Learn more</a></p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-image has-text-centered">
                <i class="fa fa-apple"></i>
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>Opinión 3</h4>
                  <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                  <p><a href="#">Learn more</a></p>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </section>

      <section class="hero">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h3
              :class="[
                'title',
                'is-size-3',
                'is-size-4-mobile',
                'has-text-primary',
                $mq == 'mobile' ? 'has-text-weight-bold' : 'has-text-weight-medium',
                'is-spaced',
                'has-text-centered'
              ]"
            >
              Nuestros clientes nos avalan por <br class="is-hidden-mobile" />cortes profesionales como estos:
            </h3>
            <BoxItem class="is-small-grid" :items="doggies" :page="$route.name" />
          </div>
        </div>
      </section>

      <section class="hero is-small">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h3
              :class="[
                'title',
                'is-size-2',
                'is-size-4-mobile',
                'has-text-primary',
                $mq == 'mobile' ? 'has-text-weight-bold' : 'has-text-weight-medium',
                'is-spaced',
                'has-text-centered',
                'mb-5'
              ]"
            >
              Nuestro compromiso
            </h3>
          </div>
          <!-- TODO: code refactor asap because can use "SectionChessBoard" comp. -->
          <div :class="['container', 'mb-6', {'reflected': block.reflected}]" v-for="(block, index) in blocks" :key="index">
            <div class="columns is-vcentered content is-medium">
              <div class="column is-8">
                <p class="is-size-6-mobile" v-html="block.description"></p>
                <NuxtLink
                  :to="{ name: block.to }"
                  :class="['th-link', { 'is-size-6-mobile': $mq == 'mobile' }]"
                  :title="`${block.link} en ${owner.copyright}`"
                >
                  {{ block.link }}
                  <span class="icon">
                    <i class="mdi mdi-arrow-right"></i>
                  </span>
                </NuxtLink>
              </div>
              <div class="column">
                <figure class="image">
                  <picture>
                    <source :srcset="require(`~/assets/images/index/${block.img}?webp`)" type="image/webp" />
                    <source :srcset="require(`~/assets/images/index/${block.img}`)" type="image/jpg" />
                    <img
                      class="artwork"
                      :src="require(`~/assets/images/index/${block.img}`)"
                      :title="block.alt"
                      :alt="block.alt"
                      width="200"
                      height="200"
                    >
                  </picture>
                </figure>
              </div>
            </div>
          </div>
          <div class="container has-text-centered">
            <!-- <div class="sandbox">
              <div class="tile is-ancestor">
                <div class="tile is-parent is-shady">
                  <article class="tile is-child notification is-white">
                    <figure class="image">
                      <img src="~assets/images/index/canessa-perretes--index-01.jpg" alt="Description" width="" height=""/>
                    </figure>
                  </article>
                </div>
                <div class="tile is-parent is-shady">
                  <article class="tile is-child notification is-white">
                    <figure class="image">
                      <img src="~assets/images/index/canessa-perretes--index-02.jpg" alt="Description" width="" height=""/>
                    </figure>
                  </article>
                </div>
                <div class="tile is-parent is-shady">
                  <article class="tile is-child notification is-white">
                    <figure class="image">
                      <img src="~assets/images/index/canessa-perretes--index-03.jpg" alt="Description" width="" height=""/>
                    </figure>
                  </article>
                </div>
              </div>
              <div class="tile is-ancestor">
                <div class="tile is-vertical is-8">
                  <div class="tile">
                    <div class="tile is-parent is-vertical">
                      <article class="tile is-child notification is-white">
                        <p class="title">Vertical tiles</p>
                        <p class="subtitle">Top box</p>
                      </article>
                      <article class="tile is-child notification is-white">
                        <p class="title">Vertical tiles</p>
                        <p class="subtitle">Bottom box</p>
                      </article>
                    </div>
                    <div class="tile is-parent">
                      <article class="tile is-child notification is-white">
                        <p class="title">Middle box</p>
                        <p class="subtitle">With an image</p>
                        <figure class="image">
                          <img src="~assets/images/index/canessa-perretes--index-01.jpg" alt="Description" width="" height=""/>
                        </figure>
                      </article>
                    </div>
                  </div>
                  <div class="tile is-parent is-shady">
                    <article class="tile is-child notification is-white">
                      <p class="title">Wide column</p>
                      <p class="subtitle">Aligned with the right column</p>
                      <div class="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                      </div>
                    </article>
                  </div>
                </div>
                <div class="tile is-parent is-shady">
                    <article class="tile is-child notification is-white">
                        <div class="content">
                            <p class="title">Tall column</p>
                            <p class="subtitle">With even more content</p>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula
                                eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                                <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet
                                felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                                <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam
                                ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                            </div>
                        </div>
                    </article>
                </div>
              </div>
              <div class="tile is-ancestor">
                <div class="tile is-parent is-shady">
                  <article class="tile is-child notification is-white">
                    <p class="title">Side column</p>
                    <p class="subtitle">With some content</p>
                    <div class="content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                    </div>
                  </article>
                </div>
                <div class="tile is-parent is-8 is-shady">
                  <article class="tile is-child notification is-white">
                    <p class="title">Main column</p>
                    <p class="subtitle">With some content</p>
                    <div class="content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                    </div>
                  </article>
                </div>
              </div>
              <div class="tile is-ancestor">
                <div class="tile is-parent is-8 is-shady">
                    <article class="tile is-child notification is-white">
                        <p class="title">Murphy's law</p>
                        <p class="subtitle">Anything that can go wrong will go wrong</p>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                    </article>
                </div>
                <div class="tile is-parent is-shady">
                    <article class="tile is-child notification is-white">
                        <p class="title">Main column</p>
                        <p class="subtitle">With some content</p>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                    </article>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </section>

      <TheFooter />
    </div>
  </main>
</template>

<script>
import reviews from '~/data/reviews'
import doggies from '~/data/doggies'

export default {
  data() {
    return {
      headerScale: 1,
      headerOpacity: 1,
      owner: this.$store.state.owner,
      pages: this.$store.state.pages,
      reviews: reviews,
      doggies: doggies,
      blocks: [
        {
          description: 'En Peluquería canina Canessa ponemos todo nuestro empeño y conocimientos en dejar precioso a tu fiel amigo con la mejor atención y el mínimo estrés, <b>dedicándole el tiempo que merece y necesite sin servicios express</b>. Además del baño y el corte de pelo, siempre incluimos el recorte de uñas, el vaciado de plantares y glándulas perianales, la limpieza de oídos y la retirada del exceso de vello en el pabellón auditivo.',
          link: 'Ir a servicios de peluquería',
          to: 'peluqueria',
          img: 'secado-pastor-aleman-feliz-peluqueria-canina-canessa.jpg',
          alt: 'Yorkshire terrier en ' + this.$store.state.owner.copyright + ', Madrid',
          reflected: false
        },
        {
          description: 'También tenemos servicios de <b>baño</b> y <b>SPA canino</b> los cuales, además de mantener limpios y aseados a nuestros perros, <b>previenen la formación de grandes nudos</b>. Esto es fundamental para evitar la aparición de hongos, urticarias y enfermedades dérmicas, además de ser molestos para nuestros amigos caninos, claro.',
          link: 'Ver todos nuestros servicios',
          to: 'servicios',
          img: 'bano-higiene-westie-peluqueria-canina-canessa.jpg',
          alt: 'Yorkshire terrier en ' + this.$store.state.owner.copyright + ', Madrid',
          reflected: true
        },
        {
          description: 'Además tenemos servicios de <b>guardería canina</b>, gestión emocional, <b>paseos</b> relajantes o <b>entrenamiento</b> físico de sus <em class=”has-line-through”>mascotas</em> amigos caninos a través de nuestro compañero <em>Rafael Cros</em> y su servicio exclusivo: <b>Mascotactiva</b>.',
          link: 'Saber más de Mascotactiva',
          to: 'mascotactiva',
          img: 'paseador-canino-mascotactiva-peluqueria-canina-canessa.jpg',
          alt: 'Mascotactiva en ' + this.$store.state.owner.copyright + ', Madrid',
          reflected: false
        },
        {
          description: 'Disponemos de <b>tienda</b> física dentro de nuestras instalaciones de peluquería canina donde adquirir <b>pienso</b> (trabajamos con <em>Affinity</em>, <em>Libra</em>, <em>Pedigree</em>...), chuches y recompensas, productos de higiene animal, <b>antiparasitarios</b>, arneses, correas, camas, juguetes, trajecitos y abrigos…',
          link: 'Ver alimentación y complementos',
          to: 'piensos',
          img: 'affinity-piensos-peluqueria-canina-canessa.jpg',
          alt: 'Yorkshire terrier en ' + this.$store.state.owner.copyright + ', Madrid',
          reflected: true
        },
        {
          description: 'Como nuestros fieles amigos caninos no merecen menos, las <b>instalaciones</b> de Peluquería canina Canessa están convenientemente adaptadas para garantizar la <b>mejor calidad</b> de servicio gracias a nuestros <b>productos y equipo de primeras marcas</b>: mesas y bañeras hidráulicas, tijeras de acero suizo, expulsadores de aire de última generación, ionizador de aire para desinfección ambiental...',
          link: 'Conocer nuestras instalaciones',
          to: 'instalaciones',
          img: 'equipo-profesional-peluqueria-canina-canessa.jpg',
          alt: 'Yorkshire terrier en ' + this.$store.state.owner.copyright + ', Madrid',
          reflected: false
        },
        {
          description: 'Vanessa tiene algo especial con todos los animales. Un vínculo emocional único con el que transmite paz y relax a todos sus clientes peludos. Gracias a juegos para positivizar <b>consigue que las sesiones de peluquería canina sean divertidas</b> para cualquier <em class=”has-line-through”>mascota</em> animal. Como profesional cuenta con ' + this.yearsOfExperience(2009) + ' años de experiencia en el sector.',
          link: 'Sobre Vanessa Vizacaya',
          to: 'vanessavizcaya',
          img: 'vanessa-vizcaya-dogs-lover-peluqueria-canina-canessa.jpg',
          alt: 'Secado en ' + this.$store.state.owner.copyright + ', Madrid',
          reflected: true
        },
      ]
    }
  },
  head() {
    const title = ''
    const description =
      this.owner.copyright + ' realiza sus servicios profesionales con la mayor calidad, mejor atención y el mínimo estrés para tu perro en Madrid. 91 248 04 30'
    const canonical = 'https://' + this.owner.url

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'Classification', name: 'Classification', content: 'Business' },
        { hid: 'subject', name: 'subject', content: description },
        // Facebook verification domain to allow Business Manager & Marketing platforms
        { hid: 'facebook-domain-verification', name: 'facebook-domain-verification', content: 'ewx7qptinl041xcf1o9e1b7x6pj26t' },
        // Open Graph (carefully here: in Index page cannot use "title" constant cause is empty)
        { hid: 'og:title', property: 'og:title', content: this.owner.copyright },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:url', property: 'og:url', content: canonical },
        // Twitter Card (carefully here: in Index page cannot use "title" constant cause is empty)
        { hid: 'twitter:title', name: 'twitter:title', content: this.owner.copyright },
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
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.headerTitleAnim)
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('scroll', this.headerTitleAnim)
    }
  },
  // mounted() {
  //   // to allow scrollToTop behaviour when page loads cause Nuxt bug...
  //   // ...not necessary if U overwrites "router" in "nuxt.config" file
  //   window.scrollTo(0, 0)
  // },
  methods: {
    headerTitleAnim() {
      let target, calcOpacity, calcScale, opacity, scale
      target = document.documentElement
      calcOpacity = target.scrollTop * 20
      calcScale = target.scrollTop * 10
      opacity = (target.offsetHeight - calcOpacity) / target.offsetHeight
      scale = (target.offsetHeight - calcScale) / target.offsetHeight
      // console.log(opacity +  ' : ' + scale) // to output values in console
      this.headerOpacity = opacity
      this.headerScale = scale
    },
    getOffset() {
      let mq = this.$mq
      if (mq === 'mobile' || mq === 'smartphone' || mq === 'tablet') {
        return 0 // layout without top navbar (small screens)
      }
      return -53 // layout with top navbar (big screens)
    },
    yearsOfExperience(since) {
      let currentYear = new Date().getFullYear()
      return currentYear - since
    }
  }
}
</script>
