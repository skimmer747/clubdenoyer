export const site = {
  name: 'Club Denoyer',
  tagline: '“Real” homemade pizza & bar · Eagle River, Wisconsin',
  description:
    'Club Denoyer is a pizza restaurant and bar in Eagle River, Wisconsin. Hand-tossed wood-fired pizzas, Italian-leaning starters, and a Northwoods bar.',
  url: 'https://clubdenoyer.com',
  analyticsId: 'G-Y5JYND7BF7',
  email: 'hello@clubdenoyer.com',
  phone: {
    display: '(715) 479-4120',
    tel: '+17154794120',
  },
  address: {
    street: '5324 WI-70',
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
    'https://www.google.com/maps/search/?api=1&query=5324+WI-70%2C+Eagle+River%2C+WI+54521',
  hours: [
    { label: 'Wed – Sat', time: '4:00 – 10:00 PM' },
    { label: 'Sunday',    time: '4:00 – 8:00 PM' },
    { label: 'Mon – Tue', time: 'Closed' },
  ],
  // schema.org openingHoursSpecification
  openingHours: [
    { days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '16:00', closes: '22:00' },
    { days: ['Sunday'], opens: '16:00', closes: '20:00' },
  ],
  social: {
    instagram: '',
    facebook: '',
  },
} as const;

export type SiteConfig = typeof site;
