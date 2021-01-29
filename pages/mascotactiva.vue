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
          title: 'Paseamos y entrenamos a tu mascota',
          description: 'El vínculo afectivo que tenemos con nuestro mejor amigo lo define todo. Desde Mascotactiva ayudaremos tanto al dueño como al perro a tener <b>una relación sólida, sana y basada en la confianza mutua</b>, de modo que la convivencia tanto dentro como fuera de casa sea lo más positiva y completa posible. Enseñaremos a tu compañero peludo a utilizar y mejorar sus capacidades con el <b>adiestramiento cognitivo-emocional impartido por la escuela EDUCAN</b>.' + closeQuote,
          link: 'Llámanos al',
          href: 'tel:636515206',
          img: this.$route.name + '/mascotactiva-pastor-aleman-rafa-cros.jpg',
          alt: 'Pastor alemán descansando tras un entrenamiento de Mascotactiva',
          reflected: false
        },
        {
          title: 'Paseos y entrenamientos',
          description: 'Todos los perros, independientemente de su edad y raza necesitan algún tipo de ejercicio. En nuestros paseos controlados <b>tu mascota aprenderá a pasear</b> tranquila, <b>sin tirar de la correa, haciendo caso a la llamada</b> y mejorando la permanencia en las posiciones de sentado y tumbado. Si, además, a tu perro le gusta correr le llevamos al trote con <b>paseos relajantes o al galope</b> con entrenamiento físico donde disfrutará en la Naturaleza de una actividad que rebajará su estrés y una vuelta al hogar más tranquila.' + closeQuote,
          link: 'Píde cita en el',
          href: 'tel:636515206',
          img: this.$route.name + '/rafa-cros-mascotactiva-peluqueria-canina-canessa.jpg',
          alt: 'Rafa Cros de Mascotactiva paseando perros',
          reflected: true
        },
        {
          title: 'Gestión emocional',
          description: 'Existen perros con problemas de miedo, fobias, ansiedad, estrés, agresividad, reactividad, falta de empatía o carencia de habilidades sociales pero todos estos problemas tienen solución. En Mascotactiva usamos <b>técnicas y protocolos de trabajo para mejorar la conducta</b> a través de juegos de <b>estimulación mental y olfativos</b>, de la inteligencia y memoria olfativa de los perros <b>mejorando la conexión emocional</b> de los mismos con sus dueños y su entorno.' + closeQuote,
          link: 'Te ayudamos en',
          href: 'tel:636515206',
          img: this.$route.name + '/gestion-emocional-mascotactiva-peluqueria-canina-canessa.jpg',
          alt: 'Gestión emocional para mascotas en Mascotactiva',
          reflected: false
        },
        {
          title: 'Guardería canina',
          description: '¿Tienes que viajar y no puedes llevar a tu perro contigo? ¿No tienes tiempo para pasear a tu perro? No te preocupes porque <b>Rafa Cros</b>, nuestro cuidador de Mascotactiva, <b>se encargará de tu compañero peludo</b> en su propia casa con un <b>servicio más cálido y familiar</b> que el de las frias jaulas de una residencia canina. Tu perro recibirá un trato preferente y profesional respetándose en todo momento sus rutinas de paseos y alimentación.' + closeQuote,
          link: 'Llámanos al',
          href: 'tel:636515206',
          img: this.$route.name + '/paseador-canino-mascotactiva-peluqueria-canina-canessa.jpg',
          alt: 'Servicio de guardería canina por Rafa Cros de Mascotactiva',
          reflected: true
        }
      ]
    }
  },
  head() {
    const title = 'Mascotactiva en'
    const description =
      'Servicios de guardería canina, paseos relajantes, entrenamiento físico, adiestramiento y gestión emocional de Mascotactiva. Teléfono: 636 515 206'
    const canonical = 'https://' + this.owner.url + this.$route.path
    const schema = {
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      "additionalType": "Paseo y entrenamiento de mascotas. Cuidado, entrenamiento y guardería canina. ",
      "@id": "https://peluqueriacanessa.com/mascotactiva",
      "url": "https://peluqueriacanessa.com/mascotactiva",
      "sameAs": [
        "https://www.youtube.com/channel/UC4LoDR63NJGdqS48_1FGReg/featured",
        "https://www.facebook.com/Mascotactiva/",
        "https://www.instagram.com/mascotactiva/"
      ],
      "logo": "https://peluqueriacanessa.com/img/mascotactiva/mascotactiva-logo_small.png",
      "name": "Mascotactiva, paseamos y entrenamos a su mascota",
      "description": "Servicios de cuidado y entrenamiento canino en la peluquería canina Canessa. Ofrecemos servicios de guardería canina, paseos relajantes, entrenamiento físico, adiestramiento y gestión emocional.",
      "telephone": "+34 636 515 206",
      "email": "mascotactiva@hotmail.com",
      "currenciesAccepted": "EUR",
      "paymentAccepted": "Efectivo, tarjeta de crédito, Cash, Credit Card",
      "priceRange": "Desde 10€",
      "image": "https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-mascotactiva.jpg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+34 636 515 206",
        "contactType": "Pedir presupuesto, atención al cliente, customer service"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Calle Vicente Aleixandre, 5",
        "postalCode": "28342",
        "addressLocality": "Valdemoro",
        "addressRegion": "Madrid"
      },
      "hasMap": "https://www.google.com/maps/place/Calle+Vicente+Aleixandre,+5,+28342+Valdemoro,+Madrid,+Espa%C3%B1a/@40.194004,-3.686798,16z/data=!4m5!3m4!1s0xd421eebe2345589:0x32ee6507d1f88103!8m2!3d40.1940037!4d-3.6867977?hl=es",
      "geo" : {
        "@type": "GeoCoordinates",
        "latitude": "40.194004",
        "longitude": "-3.686798"
      }
    }

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
        { innerHTML: JSON.stringify(schema), type: 'application/ld+json' },
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
