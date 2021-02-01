<template>
  <p class="is-size-5 is-size-6-mobile has-text-centered" v-html="copy"></p>
</template>

<script>
export default {
  props: {
    copy: {
      type: String,
      default: null,
      required: true
    }
  }
}
</script>
