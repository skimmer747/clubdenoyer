export const site = {
  name: 'Club de Noyer',
  tagline: 'Wood-fired pizza & bar · Eagle River, Wisconsin',
  description:
    'Club de Noyer is a pizza restaurant and bar in Eagle River, Wisconsin. Hand-tossed wood-fired pizzas, Italian-leaning starters, and a Northwoods bar.',
  url: 'https://clubdenoyer.com',
  email: 'hello@clubdenoyer.com',
  phone: {
    display: '(715) 555-0100',
    tel: '+17155550100',
  },
  address: {
    street: '123 Main Street',
    locality: 'Eagle River',
    region: 'WI',
    postalCode: '54521',
    country: 'US',
  },
  geo: {
    latitude: 45.9172,
    longitude: -89.2443,
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Club+de+Noyer+Eagle+River+WI',
  hours: [
    { label: 'Mon – Thu', time: '4:00 – 10:00 PM' },
    { label: 'Fri – Sat', time: '4:00 PM – Midnight' },
    { label: 'Sunday',    time: '3:00 – 9:00 PM' },
  ],
  // schema.org openingHoursSpecification
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '16:00', closes: '22:00' },
    { days: ['Friday', 'Saturday'], opens: '16:00', closes: '00:00' },
    { days: ['Sunday'], opens: '15:00', closes: '21:00' },
  ],
  social: {
    instagram: '',
    facebook: '',
  },
} as const;

export type SiteConfig = typeof site;
