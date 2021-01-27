<template>
  <div class="box-list">
    <div class="box" v-for="(item, index) in items" :key="index">
      <figure class="image block" v-if="item.img">
        <img
          :src="require(`~/assets/images/piensos/${item.img}`)"
          :alt="`Advance ${item.title} de Affinity`"
          :title="`Advance ${item.title} de Affinity`"
          width="222"
          height="222"
        >
      </figure>
      <p class="is-size-6 block" v-if="item.title">
        {{ item.title }}
      </p>
      <p
        class="is-size-6 block"
        v-for="(detail, index) in item.details"
        :key="index"
        v-if="item.details"
      >
        <span class="">Bolsa de <b>{{ detail.weight }}</b></span>
        <span class="tag is-link is-medium">{{ detail.price }} €</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoxItem',
  props: {
    items: {
      type: Array,
      default: null,
      required: true,
    },
  }
}
</script>
