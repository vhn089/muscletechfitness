import { Dumbbell, Award, Maximize2, Activity, ClipboardList, Users } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { CtaStrip } from '@/components/cta-strip'

const BENEFITS = [
  { icon: Dumbbell, title: 'Premium Equipment', text: 'Commercial-grade machines, racks and plates built for serious lifting.' },
  { icon: Award, title: 'Certified Trainers', text: 'Qualified coaches who correct form and keep you progressing safely.' },
  { icon: Maximize2, title: 'Spacious Strength Zone', text: 'Room to move. No waiting around for a bench or a rack.' },
  { icon: Activity, title: 'Latest Treadmills', text: 'A full cardio floor with modern treadmills and consoles.' },
  { icon: ClipboardList, title: 'Personalised Plans', text: 'Training and diet guidance built around your goal and schedule.' },
  { icon: Users, title: 'Motivating Community', text: 'Train alongside people who show up — and push you to as well.' },
]

export function WhyUs() {
  return (
    <section id="about" aria-labelledby="about-title" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="about-title"
          eyebrow="Why Muscle Tech"
          title="Everything you need to train hard"
          description="A premium gym right in HMT Layout — so the only thing between you and results is showing up."
        />

        <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <Reveal as="li" key={b.title} delay={i * 70} className="group bg-background p-6 transition-colors hover:bg-card md:p-8">
              <b.icon
                className="size-7 text-primary transition-transform group-hover:-translate-y-1"
                aria-hidden="true"
              />
              <h3 className="mt-5 font-display text-3xl leading-none tracking-wide">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </Reveal>
          ))}
        </ul>

        <CtaStrip />
      </div>
    </section>
  )
}
