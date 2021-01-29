<template>
  <main :class="$route.name">
    <SectionHero :hero="hero" :page="$route.name" />
    <!-- TABS -->
    <div class="tabs is-large is-centered">
      <ul>
        <li :class="{ 'is-active': !isLibra }">
          <a href="" @click.prevent="toggleTabs()">
            <span>Advance</span>
          </a>
        </li>
        <li :class="{ 'is-active': isLibra }">
          <a href="" @click.prevent="toggleTabs()">
            <span>Libra</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- ADVANCE -->
    <transition name="canessa-transition" appear>
      <div :class="['container', { 'has-text-centered': $mq == 'mobile' }]" v-if="!isLibra">
        <BoxItem :items="piensos.advance" :page="$route.name" />
      </div>
    </transition>
    <!-- LIBRA -->
    <transition name="canessa-transition" appear>
      <div :class="['container', { 'has-text-centered': $mq == 'mobile' }]" v-if="isLibra">
        <BoxItem :items="piensos.libra" :page="$route.name" />
      </div>
    </transition>
    <TheFooter />
  </main>
</template>

<script>
export default {
  data() {
    return {
      isLibra: false,
      owner: this.$store.state.owner,
      pages: this.$store.state.pages,
      hero: {
        title: 'Pienso y alimentación canina',
        subtitle:
          'Trabajamos con las <span class="has-text-weight-bold">mejores marcas</span> para alimentar a tu mejor amigo',
        img: {
          src: 'advance-logo.png',
          width: 200,
          height: 77
        }
      },
      piensos: {
        advance: [
          {
            title: 'French Bulldog Adult',
            img: 'advange-french-bulldog.png',
            details: [
              { weight: '3 kg', price: '19,99' }
            ]
          },
          {
            title: 'Yorkshire terrier de hasta 10 meses de pollo y arroz',
            img: 'advange-yorkshire-terrier.png',
            details: [
              { weight: '1,5 kg', price: '12,99' }
            ]
          },
          {
            title: 'Cachorro Mini de hasta 10 meses de pollo y arroz',
            img: 'advange-puppy-mini.png',
            details: [
              { weight: '1,5 kg', price: '12,99' }
            ]
          },
          {
            title: 'Sensitive para cachorros de hasta 12 meses de pollo y salmón',
            img: 'advange-puppy-sensitive-salmon-rice.png',
            details: [
              { weight: '800 g', price: '5,99' },
              { weight: '3 kg', price: '19,99' }
            ]
          },
          {
            title: 'Medium 7 años de pollo y salmón',
            img: 'advange-medium-7years.png',
            details: [
              { weight: '3 kg', price: '19,99' }
            ]
          },
          {
            title: 'Medium Adult de pollo con arroz',
            img: 'advange-medium-adult.png',
            details: [
              { weight: '3 kg', price: '16,50' },
              { weight: '15 kg', price: '49,99' }
            ]
          },
          {
            title: 'Medium Light de pollo y arroz',
            img: 'advange-medium-light.png',
            details: null
          },
          {
            title: 'Mini Adult de pollo y arroz',
            img: 'advange-mini-adult.png',
            details: [
              { weight: '800 g', price: '4,99' },
              { weight: '3 kg', price: '16,50' },
              { weight: '15 kg', price: '31,95' }
            ]
          },
          {
            title: 'Mini Light de pollo y arroz',
            img: 'advange-mini-light.png',
            details: [
              { weight: '800 g', price: '4,99' },
              { weight: '3 kg', price: '19,99' }
            ]
          },
          {
            title: 'Mini Sensitive de pollo y salmón',
            img: 'advange-mini-sensitive-salmon-rice.png',
            details: null
          }
        ],
        libra: [
          {
            title: 'Pollo para adultos',
            img: 'affinity-libra-adult-chicken.png',
            details: [
              { weight: '3 kg', price: '6,95' },
              { weight: '15 kg', price: '26,99' }
            ]
          },
          {
            title: 'Cordero para adultos',
            img: 'affinity-libra-adult-lamb.png',
            details: [
              { weight: '3 kg', price: '6,95' }
            ]
          },
          {
            title: 'Pollo con arroz para cachorros',
            img: 'affinity-libra-puppy-pollo-arroz.png',
            details: [
              { weight: '3 kg', price: '7,95' }
            ]
          },
          {
            title: 'Salmón para cachorros',
            img: 'affinity-libra-puppy-salmon.png',
            details: [
              { weight: '3 kg', price: '7,95' }
            ]
          }
        ],
      }
    }
  },
  head() {
    const title = this.hero.title + ' en'
    const description =
      'Pienso, alimentación canina, recompensas y chuches de perros en ' + this.owner.copyright + ', Valdemoro, Madrid. Teléfono y WhatsApp: 91 248 04 30'
    const canonical = 'https://' + this.owner.url + this.$route.path

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'Classification', name: 'Classification', content: 'Business' },
        { hid: 'subject', name: 'subject', content: description },
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
  },
  methods: {
    toggleTabs() {
      this.isLibra = !this.isLibra
    }
  }
}
</script>
