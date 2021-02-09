<template>
  <section class="hero is-small">
    <div class="hero-body">
      <div class="container has-text-centered">
        <!-- ARTWORK -->
        <img
          class="artwork"
          :src="require(`~/assets/images/${page}/${hero.img.src}`)"
          :title="`Creatividad del ${hero.title} de ${owner.nickname}`"
          :alt="`${hero.title} de ${owner.nickname}, Valdemoro, Madrid`"
          :width="hero.img.width"
          :height="hero.img.height"
          v-if="hero.img"
        />
        <!-- (main) TITLE -->
        <h1
          :class="[
            'title',
            'is-size-1',
            'is-size-4-mobile',
            'has-text-primary',
            $mq == 'mobile' ? 'has-text-weight-bold' : 'has-text-weight-medium',
            'is-spaced'
          ]"
          v-if="hero.title && page != 'legal'"
        >
          {{ hero.title }}
        </h1>
        <h1
          class="title is-size-1 is-size-2-mobile has-text-primary has-text-weight-bold"
          v-if="hero.title && page == 'legal'"
        >
          {{ hero.title }}
        </h1>
        <!-- Description or Subtitle -->
        <h4
          class="subtitle is-size-6-mobile"
          v-html="hero.subtitle"
          v-if="hero.subtitle"
        ></h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionHero',
  props: {
    hero: {
      type: Object,
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
