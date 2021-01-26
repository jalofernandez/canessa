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
            Blog posts
          </h1>
          <h4 class="subtitle is-size-6-mobile">
            Para noticias ya están las redes sociales pero para <span class="has-text-weight-bold">artículos verdaderamente interesantes</span> tenemos nuestro propio blog. <span class="has-text-weight-bold">¡A disfrutar!</span>
          </h4>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="card-list container">
        <div class="card" v-for="article of articles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
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
                <div class="media-content">
                  <p class="title is-4">{{ article.author.name }}</p>
                  <!-- <p class="subtitle is-6">@johnsmith</p> -->
                </div>
              </div>

              <div class="content">
                {{ article.description }}
                <!-- <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
    <!-- <ul class="container">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img :src="article.img" />
          <div>
            <h2>{{ article.title }}</h2>
            <p>by {{ article.author.name }}</p>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul> -->
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
    }
  }
</script>
