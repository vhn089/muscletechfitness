import Image from 'next/image'
import { ArrowRight, Phone, Zap } from 'lucide-react'
import { SITE } from '@/lib/site'
import { ENROLL_ANCHOR, URGENCY_LINE } from '@/lib/enroll'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <Image
        src="/images/gym-floor.png"
        alt="Muscle Tech Fitness gym floor with dumbbell racks and angular LED ceiling lights"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/80 to-background"
      />

      <div className="mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end gap-8 px-4 pt-24 pb-14 md:justify-center md:pb-24">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-background/60 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur">
          <Zap className="size-3.5" aria-hidden="true" />
          {URGENCY_LINE}
        </p>

        <h1
          id="hero-title"
          className="font-display text-7xl leading-[0.88] tracking-wide text-balance sm:text-8xl lg:text-9xl"
        >
          Build Strength.
          <br />
          <span className="text-primary">Build Your Best Self.</span>
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-foreground/85 text-pretty">
          {"Bengaluru's premium training space in HMT Layout, Nagasandra: modern equipment, expert trainers, real results."}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={ENROLL_ANCHOR}
            className="pulse-glow group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Enroll Now
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-foreground/30 bg-background/40 px-7 py-4 text-base font-semibold backdrop-blur transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="size-5" aria-hidden="true" />
            Call Now
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          Trusted by members across Nagasandra, HMT Layout &amp; Peenya
        </p>
      </div>
      <div aria-hidden="true" className="led-line absolute inset-x-0 bottom-0 h-px" />
    </section>
  )
}
