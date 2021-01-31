<template>
  <main :class="$route.name">
    <!-- IMP! You cannot use self closing tags in markdown files -->
    <section class="hero is-small">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1
            :class="[
              'title',
              'is-size-1',
              'is-size-4-mobile',
              'has-text-primary',
              $mq == 'mobile' ? 'has-text-weight-bold' : 'has-text-weight-medium',
              'is-spaced'
            ]"
          >
            {{ blog }}
          </h1>
          <h4 class="subtitle is-size-6-mobile">
            Para noticias ya están las redes sociales pero <br/>para <span class="has-text-weight-bold">artículos verdaderamente interesantes</span> tenemos nuestro propio blog. <span class="has-text-weight-bold">¡A disfrutar!</span>
          </h4>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="card-list container">
        <div class="card" v-for="article of articles" :key="article.slug">
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            :title="`Leer artículo: ${article.title}`"
          >
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="require(`~/assets/images/blog/${article.img}`)" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      :src="require(`~/assets/images/authors/${article.author.image}`)"
                      :title="article.author.name"
                      :alt="article.author.name"
                      width="48"
                      height="48"
                    />
                  </figure>
                </div>
                <div class="media-content has-text-dark">
                  <p class="is-size-5 has-text-primary">
                    <b>{{ article.title }}</b></p>
                  <p>
                    <small>
                      <!-- por <span :class="['tag', 'is-light', article.author.name == 'jalofernandez' ? 'is-warning' : 'is-link']">{{ article.author.name }}</span> -->
                      por <b>{{ article.author.name }}</b>
                    </small>
                  </p>
                </div>
              </div>
              <div class="content has-text-dark">
                {{ article.description }}...
                <br />
                <div class="button is-small is-text">
                  <span class="icon">
                    <i class="mdi mdi-plus"></i>
                  </span>
                  <span>Seguir leyendo</span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
    <TheFooter />
  </main>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    },
    data() {
      return {
        owner: this.$store.state.owner,
        blog: 'Blog'
      }
    },
    head() {
      const title = this.blog + ' de'
      const description =
        this.blog + ' de artículos de interés sobre perros, grooming, eventos caninos y el mundo animal de ' + this.owner.copyright + ' en Valdemoro, Madrid. Tlf: 91 248 04 30'
      const canonical = 'https://' + this.owner.url + this.$route.path

      return {
        title,
        meta: [
          { hid: 'description', name: 'description', content: description },
          { hid: 'Classification', name: 'Classification', content: 'Business' },
          { hid: 'subject', name: 'subject', content: description },
          // Open Graph
          { hid: 'og:title', property: 'og:title', content: title },
          { hid: 'og:description', property: 'og:description', content: description },
          // Twitter Card
          { hid: 'twitter:title', name: 'twitter:title', content: title },
          { hid: 'twitter:description', name: 'twitter:description', content: description }
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
    mounted() {
      window.scrollTo(0, 0)
    }
  }
</script>
