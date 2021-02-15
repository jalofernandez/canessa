<template>
  <article :class="$route.name">
    <!-- to print all json data file of each blog post (content .md file) -->
    <!-- <pre> {{ article }} </pre> -->
    <section class="section">
      <div class="container mb-6">
        <div class="columns is-align-items-flex-end content is-medium">
          <div class="column is-8">
            <h1
              :class="[
                'is-size-4-mobile',
                'has-text-primary',
                'is-relative',
                $mq == 'mobile' ? 'has-text-weight-bold' : 'has-text-weight-medium'
              ]"
              v-if="article.title"
            >
              <span class="icon is-large th-quote th-is-open">
                <i class="mdi mdi-48px mdi-format-quote-open"></i>
              </span>
              {{ article.title }}
            </h1>
            <h2 class="subtitle is-size-4 is-size-6-mobile" v-if="article.description">
              {{ article.description }}
              <span class="icon th-quote"><i class="mdi mdi-format-quote-close"></i></span>
            </h2>
            <author
              :author="article.author"
              :createdAt="formatDate(article.createdAt)"
              :updatedAt="formatDate(article.updatedAt)"
            />
          </div>
          <div class="column">
            <figure class="image">
              <picture>
                <source :srcset="require(`~/assets/images/blog/${article.img}?webp`)" type="image/webp" />
                <source :srcset="require(`~/assets/images/blog/${article.img}`)" type="image/jpg" />
                <img
                  class="artwork"
                  :src="require(`~/assets/images/blog/${article.img}`)"
                  :title="article.alt"
                  :alt="article.alt"
                  v-if="article.img"
                >
              </picture>
            </figure>
          </div>
        </div>
      </div>
      <div class="container">
        <nuxt-content :document="article" class="content" />
      </div>
    </section>

    <prev-next :prev="prev" :next="next" />

    <!-- To set a TOC (table of contents): typical aside or navbar with links to scroll between inner sections -->
    <!-- <nav>
      <ul>
        <li
          :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }"
          v-for="link of article.toc"
          :key="link.id"
        >
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav> -->

    <TheFooter />
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params, error }) {
      try {
        const article = await $content('articles', params.slug).fetch()

        const [prev, next] = await $content('articles')
          .only(['title', 'slug', 'img'])
          .sortBy('createdAt', 'asc')
          .surround(params.slug)
          .fetch()

        return {
          article,
          prev,
          next
        }
      } catch (err) {
        error({
          statusCode: 404,
          // TODO: code refactor to enable custom messages in error pages
          message: '🔥 Artículo inexistente 🔥',
        })
      }
    },
    data() {
      return {
        owner: this.$store.state.owner,
        pages: this.$store.state.pages,
        metaDesc: '',
      }
    },
    head() {
      const title = this.article.title + ' |'
      const description =
        this.metaDesc + ' en el blog de ' + this.owner.copyright + ' en Valdemoro, Madrid. Teléfono: 91 248 04 30'
      const canonical = 'https://' + this.owner.url + this.$route.path

      return {
        title,
        meta: [
          { hid: 'description', name: 'description', content: description },
          { hid: 'Classification', name: 'Classification', content: 'Business' },
          { hid: 'subject', name: 'subject', content: description },
          // Open Graph
          { hid: 'og:title', property: 'og:title', content: title + ' Canessa' },
          { hid: 'og:description', property: 'og:description', content: description },
          { hid: 'og:url', property: 'og:url', content: canonical },
          { hid: 'og:image', property: 'og:image', content: 'https://' + this.owner.url + '/blog/' + this.article.img },
          // Twitter Card
          { hid: 'twitter:title', name: 'twitter:title', content: title + ' Canessa' },
          { hid: 'twitter:description', name: 'twitter:description', content: description },
          { hid: 'twitter:url', name: 'twitter:url', content: canonical },
          { hid: 'twitter:image', name: 'twitter:image', content: 'https://' + this.owner.url + '/blog/' + this.article.img }
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
      let desc = this.article.description 
      this.metaDesc = desc.slice(0,65) + '...'
    },
    // mounted() {
    //   // to allow scrollToTop behaviour when page loads cause Nuxt bug...
    //   // ...not necessary if U overwrites "router" in "nuxt.config" file
    //   window.scrollTo(0, 0)
    // },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('es-ES', options)
      }
    }
  }
</script>
