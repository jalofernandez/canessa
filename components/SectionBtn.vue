<template>
  <section class="hero is-small">
    <div class="hero-body">
      <div class="container has-text-centered">
        <NuxtLink
          to="/"
          class="button is-primary is-outlined"
          :title="`${copy} de ${owner.copyright}`"
        >
          <span class="has-text-weight-semibold">{{ copy }}</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionBtn',
  props: {
    copy: {
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
