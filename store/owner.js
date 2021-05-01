const nickname = 'Canessa'
const business = 'Peluquería canina '+nickname
const url = 'peluqueriacanessa.com'
const email = 'van.vizcaya@gmail.com'

export const state = () => ({
  name: 'Vanessa Vizcaya',
  nickname: nickname,
  url: url,
  email: email,
  copyright: business,
  phone: 912480430,
  author: 'jalofernandez',
  currentYear: new Date().getFullYear(),
  version: '2.0.7',
  partner: 'haztunegociodigital',
  schema: {
    '@context': 'http://schema.org',
    '@type': 'LocalBusiness',
    "additionalType": "Peluquería canina, dogs grooming, health & beauty pets saloon",
    '@id': 'https://'+url,
    'url': 'https://'+url,
    "sameAs": [
      "https://www.youtube.com/channel/UCqzf03PPcv5F3u0RAEtwqmw",
      "https://www.facebook.com/Peluqueria-Canina-Canessa-113194982084561/",
      "https://www.instagram.com/peluqueriacanessa/"
    ],
    'logo': 'https://'+url+'/assets/images/logos/canessa-logo.svg',
    'name': business+' en Valdemoro, Madrid',
    'description':
    business+' realiza sus servicios profesionales con la mejor atención y el mínimo estrés para tu amigo peludo. 91 248 04 30',
    'telephone': '+34 91 248 04 30',
    'email': email,
    'currenciesAccepted': 'EUR',
    'paymentAccepted': 'Efectivo, tarjeta de crédito, Cash, Credit Card',
    'priceRange': 'Desde 10€',
    'image': 'https://'+url+'/peluqueria-canina-canessa-valdemoro-servicios.jpg',
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+34 91 248 04 30",
      "contactType": "Pedir cita, atención al cliente, customer service"
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
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "5",
      "ratingCount": "704"
   },
   "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes"
        ],
        "opens": "10:30",
        "closes": "13:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes"
        ],
        "opens": "16:30",
        "closes": "20:00"
      }
    ]
  }
})
