<template>
  <div class="box-list">
    <div class="box" v-for="(item, index) in items" :key="index">
      <figure class="image block" v-if="item.img">
        <picture>
          <source :srcset="require(`~/assets/images/${page}/${item.img}?webp`)" type="image/webp" />
          <source :srcset="require(`~/assets/images/${page}/${item.img}`)" type="image/png" />
          <source :srcset="require(`~/assets/images/${page}/${item.img}`)" type="image/jpg" />
          <img
            :src="require(`~/assets/images/${page}/${item.img}`)"
            :alt="`Advance ${item.title} de Affinity`"
            :title="item.title"
            width="222"
            height="222"
          >
        </picture>
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
    page: {
      type: String,
      default: null
    },
  }
}
</script>
