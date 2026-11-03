import Image from 'next/image'
import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { CtaStrip } from '@/components/cta-strip'

const FACILITIES = [
  {
    title: 'Strength Zone',
    text: 'Cable stations, power racks and selectorised machines for every muscle group.',
    points: ['Power & squat racks', 'Dual cable crossovers', 'Plate-loaded machines'],
    image: '/images/strength-zone.png',
    alt: 'Members flexing in the Strength Workout zone at Muscle Tech Fitness',
  },
  {
    title: 'Cardio Zone',
    text: 'A full row of the latest treadmills with built-in consoles to track every session.',
    points: ['Latest-gen treadmills', 'Heart-rate tracking', 'Climate-controlled floor'],
    image: '/images/treadmills.png',
    alt: 'Row of modern treadmills in the cardio zone',
  },
  {
    title: 'Free Weights',
    text: 'Fully stocked dumbbell and plate racks with rubber flooring built for heavy lifting.',
    points: ['Dumbbells up to heavy loads', 'Olympic plates & bars', 'Adjustable benches'],
    image: '/images/gym-floor.png',
    alt: 'Free weights area with dumbbell racks and benches under LED lights',
  },
  {
    title: 'Functional Training',
    text: 'Open turf-style space for conditioning, mobility and athletic training.',
    points: ['Kettlebells & battle ropes', 'Plyo boxes & med balls', 'Group HIIT sessions'],
    image: '/images/functional.png',
    alt: 'Functional training area with kettlebells, battle ropes and plyo boxes',
  },
]

export function Facilities() {
  return (
    <section id="facilities" aria-labelledby="facilities-heading" className="bg-card px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="facilities-heading"
          eyebrow="Facilities"
          title="Built for every kind of training"
          description="Four dedicated zones under one roof — lift, run, sweat and move."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {FACILITIES.map((f, i) => (
            <Reveal
              as="article"
              key={f.title}
              delay={(i % 2) * 100}
              className="group overflow-hidden rounded-lg border border-border bg-background"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={f.image || '/placeholder.svg'}
                  alt={f.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                <h3 className="absolute bottom-4 left-5 font-display text-4xl leading-none tracking-wide md:text-5xl">
                  {f.title}
                </h3>
              </div>
              <div className="flex flex-col gap-4 p-5 md:p-6">
                <p className="leading-relaxed text-muted-foreground">{f.text}</p>
                <ul className="flex flex-wrap gap-2">
                  {f.points.map((p) => (
                    <li
                      key={p}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium"
                    >
                      <Check className="size-3.5 text-primary" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <CtaStrip text="Train on this floor every day. Enroll today and get started." />
      </div>
    </section>
  )
}
