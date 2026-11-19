export const business = {
  name: 'Peluquería canina Canessa',
  owner: 'Vanessa Vizcaya García',
  origin: 'https://peluqueriacanessa.com',
  phone: '+34912480430',
  phoneLabel: '91 248 04 30',
  whatsapp: 'https://wa.me/34912480430',
  email: 'van.vizcaya@gmail.com',
  street: 'Calle Vicente Aleixandre, 5',
  postcode: '28342',
  city: 'Valdemoro',
  region: 'Madrid',
  map: 'https://www.google.com/maps/search/?api=1&query=Peluquer%C3%ADa+canina+Canessa%2C+Vicente+Aleixandre+5%2C+28342+Valdemoro',
  instagram: 'https://www.instagram.com/peluqueriacanessa/',
  hours: [
    {
      days: ['Monday', 'Tuesday'],
      label: 'Lunes y martes',
      morning: '10:00–13:30',
      opens: '10:00',
    },
    {
      days: ['Wednesday', 'Thursday', 'Friday'],
      label: 'Miércoles a viernes',
      morning: '10:30–13:30',
      opens: '10:30',
    },
  ],
} as const;

export const navigation = [
  { path: '/servicios', label: 'Servicios' },
  { path: '/peluqueria', label: 'Peluquería' },
  { path: '/vanessavizcaya', label: 'Vanessa' },
  { path: '/blog', label: 'Blog' },
  { path: '/contacto', label: 'Contacto' },
];
