<template>
  <article class="media">
    <figure class="media-left is-marginless">
      <p class="image is-64x64 mr-4">
        <img
          :src="require(`~/assets/images/authors/${author.image}`)"
          :title="author.name"
          :alt="author.name"
          width="64"
          height="64"
        />
      </p>
    </figure>
    <div class="media-content">
      <div class="content is-size-6">
        <p class="is-marginless">
          <span
            :class="[
              'tag',
              author.name == 'jalofernandez' ? 'is-warning' : 'is-link',
            ]"
          >
            <b>{{ author.name }}</b>
          </span> <small>{{ author.bio }}</small>
        </p>
        <p>
          <small v-if="createdAt !== updatedAt"><em class="is-size-7">Actualizado:</em> {{ updatedAt }}</small>
          <small v-else><em class="is-size-7">Creado:</em> {{ createdAt }}</small>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'Author',
    props: {
      author: {
        type: Object,
        required: true
      },
      createdAt: {
        type: String,
        required: true
      },
      updatedAt: {
        type: String,
        required: true,
      }
    }
  }
</script>
