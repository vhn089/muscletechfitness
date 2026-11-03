import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { CtaStrip } from '@/components/cta-strip'

// Placeholder trainer profiles — swap in real names, photos and credentials
const TRAINERS = [
  {
    name: 'Rahul K.',
    role: 'Head Coach · Hypertrophy',
    experience: '8+ yrs',
    image: '/images/trainer-1.png',
  },
  {
    name: 'Priya S.',
    role: 'Fat Loss & Functional',
    experience: '6+ yrs',
    image: '/images/trainer-2.png',
  },
  {
    name: 'Arjun M.',
    role: 'Strength & Powerlifting',
    experience: '10+ yrs',
    image: '/images/trainer-3.png',
  },
]

export function Trainers() {
  return (
    <section id="trainers" aria-labelledby="trainers-title" className="bg-card px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="trainers-title"
          eyebrow="Our Trainers"
          title="Coached by people who've done it"
          description="Certified, experienced and invested in your progress — from your first rep to your next PR."
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRAINERS.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 100} className="group">
              <article className="overflow-hidden rounded-lg border border-border bg-background">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={t.image || '/placeholder.svg'}
                    alt={`Portrait of trainer ${t.name}`}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <span className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    {t.experience}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-3xl leading-none tracking-wide">{t.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <CtaStrip text="Train with certified coaches who build plans around your goals." />
      </div>
    </section>
  )
}
