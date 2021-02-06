<template>
  <main :class="$route.name">
    <SectionHero :hero="hero" :page="$route.name" />
    <section class="section">
      <div class="container is-max-desktop">
        <p class="block">
          El <em>“Bono Canessa Club”</em> es un cupón de descuentos para nuestros clientes VIP que consiste en un descuento del 10% del precio final (incluyendo IVA) en cualquiera de los servicios* ofrecidos en nuestro establecimiento** para las siguientes 5 visitas de su animal de compañía*** una vez activado el cupón y siempre dentro de su período de validez****. Se activará presentándolo o mencionándolo en el momento de la visita al establecimiento o reserva del servicio.
        </p>
        <p class="block">
          El descuento será aplicable en el momento del pago del servicio.
        </p>
        <p class="block">
          * El descuento sólo será aplicable a los servicios de estética e higiene canina / felina como baños y cortes, arreglos, stripping y deslanado... Pero no a los productos ofrecidos en nuestro establecimiento como piensos, antiparasitarios, collares, correas, arneses, juguetes…
        </p>
        <p class="block">
          ** Únicamente se aplicarán a los servicios ofrecidos en el establecimientos y no fuera de él como recogida y entrega de animales de compañía, paseos, guardería canina…
        </p>
        <p class="block">
          *** Sólo se podrá usar un cupón descuento por cliente canino / felino. Una vez gastados los 5 descuentos no se podrán hacer efectivos más salvo nueva campaña u oferta.
        </p>
        <p class="block">
          **** Todos los cupones descuento tendrán una vida útil de 2 meses de duración empezando el lunes 1 de Febrero a las 23:59 (GMT+1) y finalizando el miércoles 31 de Marzo a las 23:59 (GMT+1). Trascurrido este período todos los cupones quedarán invalidados y todas los descuentos que resten por utilizarse se perderán.
        </p>
        <p class="block">
          Los bonos de descuento no son fungibles ni convertibles en efectivo y no son transferibles ni cedibles.
        </p>
        <p class="block">
          Aunque no tenemos la menos intención de hacerlo, nuestro departamento legal nos recomienda especificar que <span class="has-text-primary">Peluquería canina Canessa</span> se reserva el derecho de interrumpir, modificar o cancelar la presente acción promocional en cualquier momento si las circunstancias de fuerza mayor hicieran necesaria la adopción de dicha medida por nuestra parte. <span class="has-text-primary">Peluquería canina Canessa</span> se reserva el derecho de incluir términos y condiciones específicos adicionales para partes específicas de esta promoción de cupones descuento.
        </p>
        <p class="block">
          Los cupones de descuento son una iniciativa utilizada por el Departamento de Marketing para campañas específicas. Usted podría ser elegido en futuras campañas y recibiría automáticamente un cupón a través de su correo electrónico o forma de contacto facilitada.
        </p>
        <p class="block">
          Sus datos personales serán tratados como corresponde según especifica la LOPD. Para más información consultar nuestros <a href="legal.html" title="Términos y condiciones de uso del website de la peluquería canina Canessa">términos y condiciones legales</a>.
        </p>
        <p class="block">
          <b>Responsable</b>: Vanessa Vizcaya García (70057608E), con domicilio comercial en <a href="https://goo.gl/maps/Aegzf2qZF4x" target="_blank" rel="noopener noreferrer" title="Dirección de peluquería canina Canessa en Google Maps">C/ Vicente Aleixandre, 5. 28341. Valdemoro, Madrid</a>.
        </p>
        <p class="block">
          <b>Ley aplicable</b>: Ley de España y términos legales de <span class="has-text-primary">Peluquería canina Canessa</span> (<a href="legal.html" title="Términos y condiciones de uso del website de la peluquería canina Canessa">https://peluqueríacanessa.com/legal</a>).
        </p>
        <p class="block">
          <b>Jurisdicción y Juzgados</b>: exclusiva de los juzgados y tribunales de la Comunidad Autónoma de Madrid (España), con renuncia expresa de cualquier otra jurisdicción que pudiera corresponderles.
        </p>
      </div>
    </section>
    <TheFooter />
  </main>
</template>

<script>
export default {
  data() {
    return {
      owner: this.$store.state.owner,
      pages: this.$store.state.pages,
      hero: {
        title: 'Bono Canessa Club',
        subtitle: 
          '<span class="has-text-weight-bold">Condiciones</span> y <span class="has-text-weight-bold">normativa de utilización</span> del <span class="has-text-weight-bold">cupón de descuento</span>, <br/>de ahora en adelante <em>“Bono Canessa Club”</em>, <br/>en <span class="has-text-primary">Peluquería canina Canessa</span>:',
        img: null
      }
    }
  },
  head() {
    const title = this.hero.title + ' de'
    const description =
      'Bono Canessa Club para obtener descuento en servicios de ' + this.owner.copyright + ' en la calle Vicente Aleixandre, 5. Valdemoro, Madrid. Cita: 91 248 04 30'
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
  // mounted() {
  //   // to allow scrollToTop behaviour when page loads cause Nuxt bug...
  //   // ...not necessary if U overwrites "router" in "nuxt.config" file
  //   window.scrollTo(0, 0)
  // }
}
</script>
