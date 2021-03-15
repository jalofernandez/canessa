const author = '@jalofernandez para Vanessa Vizcaya, Canessa'
const description = 'Peluquería canina Canessa realiza sus servicios profesionales con la mejor atención y el mínimo estrés para tu perro y amigo. Cita previa: 91 248 04 30'
const url = 'peluqueriacanessa.com'
const dataImage = 'peluqueria-canina-canessa-valdemoro-servicios.jpg'

export default {
  // to deploy static websites in GitHub Pages
  target: 'static',
  // Isomorphic app (server-side rendering + client-side navigation) not SPA one
  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-mode
  mode: 'universal',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'es',
      class: ['has-navbar-fixed-top', 'has-navbar-fixed-bottom']
    },
    bodyAttrs: {
      class: ['canessa'],
    },
    title: process.env.npm_package_name || '',
    titleTemplate: '%s Peluquería canina Canessa, Valdemoro 🐾 ✅',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'author', name: 'author', content: author },
      { hid: 'copyright', name: 'copyright', content: author },
      { hid: 'robots', name: 'robots', content: 'index, follow, archive' },
      { hid: 'generator', name: 'generator', content: 'HTML5, CSS3, Vuejs, Nuxtjs, JavaScript, SASS, PWA, SEO' },
      { hid: 'google', name: 'google', content: 'nositelinkssearchbox' },
      { hid: 'lang', name: 'lang', content: 'es-ES' },
      { hid: 'rating', name: 'rating', content: 'General' },
      { hid: 'coverage', name: 'coverage', content: 'Worldwide' },
      //- (metas) to customize (all browsers) top navbar
      { hid: 'theme-color', name: 'theme-color', content: '#ff4081' },
      //- (metas) to Webkit (iOS Safari) browsers
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: author },
      //- (metas) IE (windows phone) browsers
      // { hid: 'msapplication-TileImage', name: 'msapplication-TileImage', content: '/src/images/icons/app-icon-144x144.png' },
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#232323' },
      //- (metas) Open Graph + TW Cards loads globally per page. Rest ones placed in each page
      // Docs on: https://ogp.me
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:locale', property: 'og:locale', content: 'es-ES' },
      { hid: 'og:site_name', property: 'og:site_name', content: url },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: 'https://' + url + '/' + dataImage },
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://' + url + '/' + dataImage },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/jpeg' },
      { hid: 'og:image:width', property: 'og:image:width', content: '960' },
      { hid: 'og:image:height', property: 'og:image:height', content: '540' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: description },
      // Docs on: https://nuxtjs.org/examples/seo-twitter-og
      // Test on: https://cards-dev.twitter.com/validator 
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: url },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://' + url + '/' + dataImage },
    ],
    link: [
      { rel: 'author', type: 'text/plain', href: 'https://' + url + '/humans.txt' },
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: '//www.youtube.com/channel/UCqzf03PPcv5F3u0RAEtwqmw' },
      { rel: 'dns-prefetch', href: '//www.facebook.com/Peluqueria-Canina-Canessa-113194982084561' },
      { rel: 'dns-prefetch', href: '//www.instagram.com/peluqueriacanessa' },
      { rel: 'dns-prefetch', href: '//goo.gl/maps/Aegzf2qZF4x' },
    ]
  },
  // to overwrite "router" by default to allow better scroll behaviour & fix some bugs.
  // https://zachcardoza.com/post/nuxtjs-smooth-scrolling-with-hash-links/
  router: {
    // base: '/canessa/', // to change base URL
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          })
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }
      // to go on top of the page if there is no hash anchor
      return { x: 0, y: 0 }
    }
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  css: [
    // https://sass-lang.com
    '@/assets/styles.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  transition: {
    name: 'canessa-transition',
    mode: 'out-in'
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://pwa.nuxtjs.org
    '@nuxtjs/pwa'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://bulma.io
    // '@nuxtjs/bulma', // commented in order to avoid loads Bulma twice
    // https://www.npmjs.com/package/nuxt-webfontloader
    'nuxt-webfontloader',
    // https://www.npmjs.com/package/nuxtjs-mdi-font
    'nuxtjs-mdi-font',
    // https://nuxtjs.org/blog/creating-blog-with-nuxt-content
    '@nuxt/content',
    // https://www.npmjs.com/package/nuxt-mq
    'nuxt-mq',
    // https://www.npmjs.com/package/vue-scrollto
    'vue-scrollto/nuxt',
    // https://marquez.co/es/docs/nuxt-optimized-images
    // All image packages: "imagemin-mozjpeg imagemin-pngquant imagemin-gifsicle imagemin-svgo webp-loader img-loader"
    '@aceforth/nuxt-optimized-images',
    // https://www.npmjs.com/package/@nuxtjs/gtm
    '@nuxtjs/gtm',
    // https://www.npmjs.com/package/nuxt-purgecss
    "nuxt-purgecss",
    // https://www.npmjs.com/package/@nuxtjs/robots
    '@nuxtjs/robots',
    // https://www.npmjs.com/package/@nuxtjs/sitemap
    // IMP!: always declare the sitemap module at end of array
    '@nuxtjs/sitemap',
  ],

  webfontloader: {
    google: {
      families: ['Roboto:ital,wght@0,300;0,400;0,700;1,400&display=swap'],
    },
  },

  mq: {
    defaultBreakpoint: "desktop",
    breakpoints: {
      mobile: 600,
      smartphone: 768,
      tablet: 1024,
      laptop: 1280,
      desktop: 1400,
      desktopWide: 2000,
      desktopUltraWide: Infinity
    }
  },

  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
    defaultImageLoader: 'img-loader'
  },

  pwa: {
    manifest: {
      name: 'peluquería canina canessa',
      short_name: 'canessa',
      description: description,
      // start_url: 'index.html?launcher=true', // value by default ("/?standalone=true")
      lang: 'es', 
      // display: 'standalone', // value by default
      background_color: '#111111',
      theme_color: '#ff4081',
      lang: 'es-ES',
      // dir: 'ltr', // value by default
      // useWebmanifestExtension: false, // value by default. With true the file extension will be ".webmanifest" instead ".json"
    },
    workbox: {
      // enabled: true, // check it asap!
    },
  },

  gtm: {
    id: 'GTM-54RWXDW',
    enabled: true,
    scriptDefer: true,
    pageTracking: true,
  },

  purgeCSS: {
    // Overrides the default settings here
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: `https://` + url + `/sitemap.xml`,
  },

  sitemap: {
    hostname: `https://` + url,
    gzip: true,
    // exclude: ['/perretes', '/blog', '/blog/', '/blog/**'],
    routes: [
      '/blog/el-gran-reencuentro',
      '/blog/como-pixar-capta-la-personalidad-animal',
      '/blog/como-publicar-post-aqui'
    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true,
    },
  },

  generate: {
    subFolders: false,
    fallback: '404.html'
    // dir: 'public' // to deploy in Google Firebase ('dist' by default)
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  }
}
