const author = '@jalofernandez para Vanessa Vizcaya, Canessa'

export default {
  // Isomorphic app (server-side rendering + client-side navigation) not SPA one
  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-mode
  mode: 'universal',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'es',
    },
    bodyAttrs: {
      class: ['canessa'],
    },
    title: process.env.npm_package_name || '',
    titleTemplate: "%s Peluquería canina Canessa Valdemoro 🐾  ✅",
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
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#232323' }
    ],
    link: [
      { rel: 'author', type: 'text/plain', href: 'https://peluqueriacanessa.com/humans.txt' },
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      { rel: 'dns-prefetch', href: '//www.youtube.com/channel/UCqzf03PPcv5F3u0RAEtwqmw' },
      { rel: 'dns-prefetch', href: '//www.facebook.com/Peluqueria-Canina-Canessa-113194982084561' },
      { rel: 'dns-prefetch', href: '//www.instagram.com/peluqueriacanessa' },
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  css: [
    // https://sass-lang.com
    '@/assets/styles.sass'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://bulma.io
    '@nuxtjs/bulma',
    // https://www.npmjs.com/package/nuxt-webfontloader
    'nuxt-webfontloader',
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
  robots: {
    UserAgent: "*",
    Allow: "/",
    Sitemap: `https://peluqueriacanessa/sitemap.xml`,
  },
  sitemap: {
    hostname: `https://peluqueriacanessa.com`,
    gzip: true,
    // exclude: ['/perretes', '/blog', '/blog/', '/blog/**'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true,
    },
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
