<template>
  <section class="section">
    <div :class="['container', 'th-margin', {'reflected': block.reflected}]" v-for="(block, index) in blocks" :key="index">
      <div class="columns is-vcentered content is-medium">
        <div class="column is-6">
          <h2
            :class="[
              'is-size-4-mobile',
              'has-text-primary',
              'is-relative',
              $mq == 'mobile' ? 'has-text-weight-bold' : 'has-text-weight-medium'
            ]"
          >
            <span class="icon is-large th-quote th-is-open">
              <i class="mdi mdi-48px mdi-format-quote-open"></i>
            </span>
            {{ block.title }}<em v-if="page == 'vanessavizcaya'">...</em>
          </h2>
          <p class="is-size-6-mobile" v-html="block.description"></p>
          <!-- (page) SERVICIOS / ANTIPARASITARIOS -->
          <NuxtLink
            :to="{ name: block.to }"
            :class="['th-link', { 'is-size-6-mobile': $mq == 'mobile' }]"
            :title="`${block.link} en ${owner.copyright}`"
            v-if="page == 'servicios' || page == 'antiparasitarios'"
          >
            {{ block.link }}
            <span class="icon">
              <i class="mdi mdi-arrow-right"></i>
            </span>
          </NuxtLink>
          <!-- (pages) VANESSA -->
          <a
            :class="['th-link', { 'is-size-6-mobile': $mq == 'mobile' }]"
            :href="block.href"
            :title="`${block.link} en ${owner.copyright}`"
            rel="noopener noreferrer"
            v-if="page == 'vanessavizcaya'"
          >
            {{ block.link }}: <span>91 248 04 30</span>
            <span class="icon">
              <i class="mdi mdi-arrow-right"></i>
            </span>
          </a>
        </div>
        <div class="column">
          <figure class="image">
            <picture>
              <source :srcset="require(`~/assets/images/${block.img}?webp`)" type="image/webp" />
              <source :srcset="require(`~/assets/images/${block.img}`)" type="image/png" />
              <source :srcset="require(`~/assets/images/${block.img}`)" type="image/jpg" />
              <img
                class="artwork"
                :src="require(`~/assets/images/${block.img}`)"
                :title="block.alt"
                :alt="block.alt"
                width="200"
                height="200"
              />
            </picture>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionChessBoard',
  props: {
    blocks: {
      type: Array,
      default: null,
      required: true,
    },
    page: {
      type: String,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      owner: this.$store.state.owner
    }
  }
}
</script>
