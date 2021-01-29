<template>
  <h2
    :class="[
      'is-size-3',
      'is-size-5-mobile',
      'has-text-primary',
      $mq == 'mobile' ? 'has-text-weight-bold' : 'has-text-weight-medium',
      'is-relative'
    ]"
  >
    <span class="icon is-large th-quote th-is-open">
      <i class="mdi mdi-48px mdi-format-quote-open"></i>
    </span>
    {{ title }}
  </h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => null
    }
  }
}
</script>
