import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { SITE } from '@/lib/site'

export const FAQS = [
  {
    q: 'What are your gym timings?',
    a: `We're open ${SITE.hours.map((h) => `${h.days}: ${h.time}`).join(', ')}.`,
  },
  {
    q: 'Do you offer personal training?',
    a: 'Yes. Our certified trainers offer one-on-one personal training packages tailored to fat loss, muscle gain, strength or sport-specific goals.',
  },
  {
    q: 'Is parking available?',
    a: 'Yes, two-wheeler and limited four-wheeler parking is available right outside the building.',
  },
  {
    q: 'Do you provide diet guidance?',
    a: 'Absolutely. Half-yearly and annual members get diet guidance from our coaches, and nutrition plans are included with personal training.',
  },
  {
    q: 'Can beginners join?',
    a: "Definitely. Every new member gets a fitness assessment and a starter plan, and trainers on the floor will help you learn the equipment safely.",
  },
]

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="bg-card px-4 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          id="faq-title"
          eyebrow="FAQ"
          title="Questions? Answered."
          description="Still unsure? Message us on WhatsApp — we usually reply within minutes."
        />
        <div className="flex flex-col">
          {FAQS.map((item) => (
            <details key={item.q} className="group border-b border-border py-5 first:border-t">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus
                  className="size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
