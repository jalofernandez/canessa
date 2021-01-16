<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column is-3 is-offset-2">
          <h2><strong>Páginas:</strong></h2>
          <ul>
            <li v-for="(link, index) in pages.links" :key="index">
              <NuxtLink
                :to="{ name: link.page }"
                class=""
                :title="`Ir a la página ${link.name} de ${owner.nickname}`"
                :data-text="`${link.name}`"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="column is-3">
          <h2><strong>Blog:</strong></h2>
          <ul>
            <li><a href="#">Blog post 01</a></li>
            <li><a href="#">Blog post 02</a></li>
            <li><a href="#">Blog post 03</a></li>
            <li><a href="#">Blog post 04</a></li>
            <li><a href="#">Ver todos los post...</a></li>
          </ul>
        </div>
        <div class="column is-4">
          <h2><strong>Términos legales:</strong></h2>
          <ul>
            <li><a href="#">Responsable</a></li>
            <li><a href="#">Política de privacidad</a></li>
            <li><a href="#">Condiciones de uso</a></li>
            <li><a href="#">Política de cookies</a></li>
          </ul>
        </div>
      </div>
      <div class="content has-text-centered">
        <div class="control level-item">
          <NuxtLink to="/">
            <div class="tags has-addons">
              <span class="tag is-dark">© {{ owner.copyright }}</span>
              <span class="tag is-info">{{ owner.currentYear }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      owner: this.$store.state.owner,
      pages: this.$store.state.pages,
    }
  }
}
</script>
