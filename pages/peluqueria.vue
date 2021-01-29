<template>
  <main :class="$route.name">
    <SectionChessBoard :blocks="blocks" :page="$route.name"/>
    <TheFooter />
  </main>
</template>

<script>
export default {
  data() {
    const closeQuote = '<span class="icon th-quote"><i class="mdi mdi-format-quote-close"></i></span>'
    return {
      owner: this.$store.state.owner,
      pages: this.$store.state.pages,
      blocks: [
        {
          title: 'En ' + this.$store.state.owner.copyright + '...',
          description: '...Ponemos todo nuestro empeño y conocimientos en dejar precioso a tu fiel amigo con la <b>mejor atención y el mínimo estrés</b>, dedicándole el tiempo que merece y necesite <b>sin servicios express</b>. Además, siempre incluimos el corte de uñas, la limpieza de plantares, el vaciado de glándulas anales, la limpieza de oídos y la depilación del exceso de vello en el pabellón auditivo.' + closeQuote,
          img: this.$route.name + '/yorkshire-en-mesa-de-corte.jpg',
          alt: 'Yorkshire terrier en la mesa de trabajo de ' + this.$store.state.owner.copyright + ', Valdemoro, Madrid',
          reflected: true
        },
        {
          title: 'Corte a tijera',
          description: 'Estamos especializados en la técnica de corte a tijera, y queremos demostrarte que siempre <b>se puede sacar más partido al arreglo de tu perro de un modo más artesanal y personalizado</b> como ofrece el uso de la tijera. Somos conocedores de la morfologia y anatomia del perro y siempre arreglamos cada perro de modo personal buscando sacar el máximo para que tu, su dueño, <b>quedes contento con nuestro servicio</b>.' + closeQuote,
          img: this.$route.name + '/corte-a-tijera-01-peluqueria-canina-canessa.jpg',
          alt: 'Corte a tijera de mestizo en ' + this.$store.state.owner.copyright + ', Valdemoro, Madrid',
          reflected: false
        },
        {
          title: 'Corte a máquina',
          description: 'Cortar a máquina <b>no implica sólo rapar</b> o realizar un trabajo rápido y malo. Hay veces que hay que mantener a raya ciertas zonas problemáticas expendedoras de nudos y se hace necesario el uso de máquina. Queremos demostrarte que un servicio de corte a máquina es <b>también de calidad</b> y no está reñido con un <b>buen precio</b>.' + closeQuote,
          img: this.$route.name + '/corte-a-maquina-01-peluqueria-canina-canessa.jpg',
          alt: 'Corte a máquina de yorkshire en ' + this.$store.state.owner.copyright + ', Valdemoro, Madrid',
          reflected: true
        },
        {
          title: 'Baño completo de precorte',
          description: 'El baño regular forma parte de <b>la higiene de nuestras mascotas</b> y su frecuencia depende de la raza pues algunas requieren un mayor mantenimiento que otras. El baño además de mantenerlos limpios y aseados <b>previene la formación de grandes nudos</b>, pues pueden dar lugar a la <b>aparición de hongos y enfermedades dérmicas</b>, además de ser molestos para nuestra mascota.' + closeQuote,
          img: this.$route.name + '/bano-precorte-03-peluqueria-canina-canessa.jpg',
          alt: 'Baño tras precorte en ' + this.$store.state.owner.copyright + ', Madrid',
          reflected: false
        },
        {
          title: 'Stripping',
          description: 'Los perros de pelo duro tienen varias capas de pelo y subpelo: una capa joven en maduración y una capa de cobertura o madurada. En su estado salvaje lo irían perdiendo con las ramas o zarzas, pero al no ser así se lo tenemos que renovar nosotros mismos. La técnica más común conocida como <b>trimming o stripping es arrancar la capa vieja o larga para dejar crecer la corta</b>, ya que salen todas de un mismo poro. Esta técnica de arrancado mantiene los colores en su tono natural y la textura de pelo duro.' + closeQuote,
          img: this.$route.name + '/stripping-01-peluqueria-canina-canessa.jpg',
          alt: 'Stripping a mestizo en ' + this.$store.state.owner.copyright + ', Valdemoro, Madrid',
          reflected: true
        }
      ]
    }
  },
  head() {
    const title = 'Grooming en'
    const description =
      'Ofrecemos peluquería y belleza canina y felina con cortes de pelo comerciales y de exposición así como arreglos y baños en ' + this.owner.copyright
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
  }
}
</script>
