import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { WhyUs } from '@/components/why-us'
import { Facilities } from '@/components/facilities'
import { Plans } from '@/components/plans'
import { Trainers } from '@/components/trainers'
import { Transformations } from '@/components/transformations'
import { Testimonials } from '@/components/testimonials'
import { Gallery } from '@/components/gallery'
import { EnrollForm } from '@/components/enroll-form'
import { Faq, FAQS } from '@/components/faq'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { FloatingActions } from '@/components/floating-actions'
import { SITE } from '@/lib/site'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ExerciseGym',
      name: SITE.name,
      telephone: '+91-98868-62624',
      image: '/images/exterior.png',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: `${SITE.address.locality}, ${SITE.address.city}`,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postalCode,
        addressCountry: 'IN',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '05:00',
          closes: '22:30',
        },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '06:00', closes: '12:00' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <WhyUs />
        <Facilities />
        <Plans />
        <Trainers />
        <Transformations />
        <Testimonials />
        <Gallery />
        <EnrollForm />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  )
}
