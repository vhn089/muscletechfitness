export const SITE = {
  name: 'Muscle Tech Fitness',
  phoneDisplay: '098868 62624',
  phoneHref: 'tel:+919886862624',
  whatsappNumber: '919886862624',
  address: {
    street: '596, 3rd Main Road, 3rd Block, 5th Block HMT Layout',
    locality: 'Nagasandra',
    city: 'Bengaluru',
    region: 'Karnataka',
    postalCode: '560073',
  },
  mapQuery:
    'Muscle Tech Fitness, 596, 3rd Main Road, HMT Layout, Nagasandra, Bengaluru 560073',
  // Placeholder hours — edit to match the gym's actual timings
  hours: [
    { days: 'Mon – Sat', time: '5:00 AM – 10:30 PM' },
    { days: 'Sunday', time: '6:00 AM – 12:00 PM' },
  ],
} as const

export const fullAddress = `${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`

export function whatsappLink(message = 'Hi Muscle Tech Fitness! I would like to know more about memberships.') {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`
export const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.mapQuery)}`

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#facilities', label: 'Facilities' },
  { href: '#plans', label: 'Plans' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
] as const
