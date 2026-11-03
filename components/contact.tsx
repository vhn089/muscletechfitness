import { Clock, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { SITE, directionsHref, fullAddress, mapEmbedSrc, whatsappLink } from '@/lib/site'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="contact-title"
          eyebrow="Visit Us"
          title="Find us in HMT Layout"
          description="Easy to reach from Nagasandra, Peenya, Jalahalli and Dasarahalli."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col gap-6 rounded-lg border border-border bg-card p-6 md:p-8">
            <address className="flex flex-col gap-6 not-italic">
              <div className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{fullAddress}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href={SITE.phoneHref} className="mt-1 block text-muted-foreground hover:text-primary">
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Hours</p>
                  <dl className="mt-1 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-muted-foreground">
                    {SITE.hours.map((h) => (
                      <div key={h.days} className="contents">
                        <dt>{h.days}</dt>
                        <dd>{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </address>

            <div className="mt-auto grid gap-3 sm:grid-cols-3">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-semibold hover:border-primary hover:text-primary"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-semibold hover:border-primary hover:text-primary"
              >
                <Navigation className="size-4" aria-hidden="true" />
                Directions
              </a>
            </div>
          </div>

          <div className="relative min-h-80 overflow-hidden rounded-lg border border-border">
            <iframe
              title="Map showing Muscle Tech Fitness location in HMT Layout, Nagasandra"
              src={mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full grayscale invert-[0.9] hue-rotate-180"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
