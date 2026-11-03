// Facts about the studio. Source: Google Maps listing "STUDIO LIGJORE GEGA"
// (https://maps.app.goo.gl/PLqm6BxzT83SnP2v9) and the office signage.
// Anything marked TODO still needs confirmation from the client.

export const site = {
  firm: 'Studio Ligjore Gega',
  lawyer: 'Gentjan Gega', // spelling from the logo and office plaque
  phone: '+355 68 201 0636',
  phoneHref: 'tel:+355682010636',
  email: '', // TODO: client email (shown only when filled in)
  address: {
    building: 'Pall. SCY, Nr. 31',
    street: 'Rruga Qemal Stafa',
    city: 'Tiranë',
    postcode: '1000',
    country: 'AL',
  },
  geo: { lat: 41.3300212, lng: 19.8245315 },
  mapsUrl: 'https://maps.app.goo.gl/PLqm6BxzT83SnP2v9',
  mapEmbed: 'https://www.google.com/maps?q=41.3300212,19.8245315&z=17&output=embed',
  // ISO weekday 1 = Monday
  hours: [
    { days: [1, 2, 3, 4], open: '09:00', close: '18:00' },
    { days: [5], open: '09:00', close: '15:30' },
  ],
  vcard: '/gentjan-gega.vcf',
} as const;
