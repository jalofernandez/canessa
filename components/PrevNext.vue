<template>
  <section class="hero is-small mb-6">
    <div class="hero-body">
      <div class="container">
        <p class="is-size-6 has-text-centered mb-4" v-if="prev || next">
          <span class="tag">Ver más artículos:</span>
        </p>
        <nav class="level is-align-items-flex-start">
          <div :class="['level-item', { 'is-justify-content-flex-start': prev && next }]" v-if="prev">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: prev.slug } }">
              <div class="media is-align-items-center">
                <figure class="media-left">
                  <p class="image is-64x64">
                    <img
                      class="is-rounded"
                      :src="require(`~/assets/images/blog/${prev.img}`)"
                      :title="prev.title"
                      :alt="prev.title"
                      width="64"
                      height="64"
                    />
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <small><em>Anterior:</em></small>
                      <br />
                      <b class="has-text-primary">{{ prev.title }}</b>
                    </p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div :class="['level-item', { 'is-justify-content-flex-end': next && prev }]" v-if="next">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: next.slug } }">
              <div class="media is-align-items-center">
                <div class="media-content has-text-right">
                  <div class="content">
                    <p>
                      <small><em>Posterior:</em></small>
                      <br />
                      <b class="has-text-primary">{{ next.title }}</b>
                    </p>
                  </div>
                </div>
                <figure class="media-right">
                  <p class="image is-64x64">
                    <img
                      class="is-rounded"
                      :src="require(`~/assets/images/blog/${next.img}`)"
                      :title="next.title"
                      :alt="next.title"
                      width="64"
                      height="64"
                    />
                  </p>
                </figure>
              </div>
            </NuxtLink>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'PrevNext',
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>
