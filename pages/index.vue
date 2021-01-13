<template>
  <main>
    <section class="hero is-fullheight video is-dark is-bold">
      <div class="hero-video">
          <video
            id="bgvid"
            :poster="require(`~/assets/video/afgano.jpg`)"
            :title="`Servicios ofrecidos en ${owner.copyright} en Valdemoro, Madrid`" 
            playsinline autoplay muted loop
          >
            <source src="~/assets/video/canessa_web-promo-video_2018-09-15.mp4" type="video/mp4">
          </video>
      </div>
      <div class="hero-body">
          <div class="container">
              // Text content goes here (h1 and call to action etc...)
          </div>
      </div>
      <div class="hero-foot">
          <div class="has-text-centered">
              // Scroll down arrow here?
          </div>
      </div>
    </section>

    <div class="box cta">
      <p class="has-text-centered">
        <span class="tag is-primary">New</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>

    <section class="container">
      <div class="columns features">
        <div class="column is-4">
          <div class="card is-shady">
            <div class="card-image has-text-centered">
              <i class="fa fa-paw"></i>
            </div>
            <div class="card-content">
              <div class="content">
                <h4>Tristique senectus et netus et. </h4>
                <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                <p><a href="#">Learn more</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="card is-shady">
            <div class="card-image has-text-centered">
              <i class="fa fa-empire"></i>
            </div>
            <div class="card-content">
              <div class="content">
                <h4>Tempor orci dapibus ultrices in.</h4>
                <p>Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem
                sed risus.</p>
                <p><a href="#">Learn more</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="card is-shady">
            <div class="card-image has-text-centered">
              <i class="fa fa-apple"></i>
            </div>
            <div class="card-content">
              <div class="content">
                <h4> Leo integer malesuada nunc vel risus. </h4>
                <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <p><a href="#">Learn more</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="intro column is-8 is-offset-2">
        <h2 class="title">Perfect for developers or designers!</h2><br>
        <p class="subtitle">Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi nullam vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus.</p>
      </div>
      <div class="sandbox">
        <div class="tile is-ancestor">
          <div class="tile is-parent is-shady">
            <article class="tile is-child notification is-white">
              <p class="title">Hello World</p>
              <p class="subtitle">What is up?</p>
            </article>
          </div>
          <div class="tile is-parent is-shady">
            <article class="tile is-child notification is-white">
              <p class="title">Foo</p>
              <p class="subtitle">Bar</p>
            </article>
          </div>
          <div class="tile is-parent is-shady">
            <article class="tile is-child notification is-white">
              <p class="title">Third column</p>
              <p class="subtitle">With some content</p>
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>
        </div>
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child notification is-white">
                            <p class="title">Vertical tiles</p>
                            <p class="subtitle">Top box</p>
                        </article>
                        <article class="tile is-child notification is-white">
                            <p class="title">Vertical tiles</p>
                            <p class="subtitle">Bottom box</p>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-white">
                            <p class="title">Middle box</p>
                            <p class="subtitle">With an image</p>
                            <figure class="image is-4by3">
                                <img src="https://picsum.photos/640/480/?random" alt="Description">
                            </figure>
                        </article>
                    </div>
                </div>
                <div class="tile is-parent is-shady">
                    <article class="tile is-child notification is-white">
                        <p class="title">Wide column</p>
                        <p class="subtitle">Aligned with the right column</p>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                    </article>
                </div>
            </div>
            <div class="tile is-parent is-shady">
                <article class="tile is-child notification is-white">
                    <div class="content">
                        <p class="title">Tall column</p>
                        <p class="subtitle">With even more content</p>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula
                            eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet
                            felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                            <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam
                            ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        <div class="tile is-ancestor">
            <div class="tile is-parent is-shady">
                <article class="tile is-child notification is-white">
                    <p class="title">Side column</p>
                    <p class="subtitle">With some content</p>
                    <div class="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                    </div>
                </article>
            </div>
            <div class="tile is-parent is-8 is-shady">
                <article class="tile is-child notification is-white">
                    <p class="title">Main column</p>
                    <p class="subtitle">With some content</p>
                    <div class="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                    </div>
                </article>
            </div>
        </div>
        <div class="tile is-ancestor">
            <div class="tile is-parent is-8 is-shady">
                <article class="tile is-child notification is-white">
                    <p class="title">Murphy's law</p>
                    <p class="subtitle">Anything that can go wrong will go wrong</p>
                    <div class="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                    </div>
                </article>
            </div>
            <div class="tile is-parent is-shady">
                <article class="tile is-child notification is-white">
                    <p class="title">Main column</p>
                    <p class="subtitle">With some content</p>
                    <div class="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                    </div>
                </article>
            </div>
        </div>
      </div>
    </section>

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
          <p>
            <a class="icon" href="https://github.com/BulmaTemplates/bulma-templates">
              <i class="fa fa-github"></i>
            </a>
          </p>
          <div class="control level-item">
            <a href="https://github.com/BulmaTemplates/bulma-templates">
              <div class="tags has-addons">
                <span class="tag is-dark">© {{ owner.copyright }}</span>
                <span class="tag is-info">{{ owner.currentYear }}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

<script>
export default {
  data() {
    return {
      owner: this.$store.state.owner,
      pages: this.$store.state.pages,
    }
  },
  head() {
    const title = ''
    const description =
      this.owner.copyright + ' realiza sus servicios profesionales con la mejor atención y el mínimo estrés para tu amigo peludo. 91 248 04 30'
    const canonical = 'https://' + this.owner.url

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'Classification', name: 'Classification', content: 'Business' },
        { hid: 'subject', name: 'subject', content: description },
        // Facebook verification domain to allow Business Manager & Marketing platforms
        { hid: 'facebook-domain-verification', name: 'facebook-domain-verification', content: 'ewx7qptinl041xcf1o9e1b7x6pj26t' },
      ],
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { innerHTML: JSON.stringify(this.owner.schema), type: 'application/ld+json' },
      ],
      link: [
        { rel: 'canonical', hid: 'canonical', href: canonical },
        { rel: 'alternate', hid: 'alternate', href: canonical+'/#!' },
        { rel: 'alternate', hid: 'alternate', href: canonical+'#!' },
      ]
    }
  }
}
</script>
