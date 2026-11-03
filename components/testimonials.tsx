'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { CtaStrip } from '@/components/cta-strip'
import { cn } from '@/lib/utils'

// Placeholder reviews — replace with real Google reviews
const REVIEWS = [
  {
    name: 'Karthik R.',
    area: 'HMT Layout',
    text: 'Best gym in the area, hands down. The equipment is top-notch and the trainers actually correct your form. Lost 10 kg in 4 months.',
  },
  {
    name: 'Sneha P.',
    area: 'Nagasandra',
    text: 'Clean, spacious and never too crowded. The cardio zone is amazing and the staff are super friendly. Feels premium without the attitude.',
  },
  {
    name: 'Vikram N.',
    area: 'Peenya',
    text: 'Switched from a chain gym and never looked back. The strength zone has everything I need and the vibe keeps me consistent.',
  },
  {
    name: 'Ananya M.',
    area: 'Jalahalli',
    text: 'My trainer built a plan around my work schedule. Great music, great lighting, great people. Worth every rupee.',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback((dir: 1 | -1) => {
    setIndex((i) => (i + dir + REVIEWS.length) % REVIEWS.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = window.setInterval(() => go(1), 6000)
    return () => window.clearInterval(id)
  }, [paused, go])

  return (
    <section aria-labelledby="reviews-title" className="bg-card px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading id="reviews-title" eyebrow="Member Reviews" title="What our members say" />
          <div className="flex items-center gap-3">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">4.8</span> on Google Reviews
            </p>
          </div>
        </div>

        <div
          className="mt-12"
          role="region"
          aria-roledescription="carousel"
          aria-label="Member testimonials"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <ul
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {REVIEWS.map((r, i) => (
                <li
                  key={r.name}
                  className="w-full shrink-0"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${REVIEWS.length}`}
                  aria-hidden={i !== index}
                >
                  <figure className="flex flex-col gap-6 rounded-lg border border-border bg-background p-6 md:p-10">
                    <div className="flex" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="size-4 fill-primary text-primary" aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className="text-xl leading-relaxed text-pretty md:text-2xl">
                      {`“${r.text}”`}
                    </blockquote>
                    <figcaption className="text-sm">
                      <span className="font-bold">{r.name}</span>
                      <span className="text-muted-foreground"> · {r.area}</span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {REVIEWS.map((r, i) => (
                <button
                  key={r.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show review ${i + 1}`}
                  aria-current={i === index}
                  className={cn(
                    'h-1.5 rounded-full transition-all',
                    i === index ? 'w-8 bg-primary' : 'w-4 bg-border hover:bg-muted-foreground',
                  )}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                className="inline-flex size-11 items-center justify-center rounded-md border border-border transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
                <span className="sr-only">Previous review</span>
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="inline-flex size-11 items-center justify-center rounded-md border border-border transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
                <span className="sr-only">Next review</span>
              </button>
            </div>
          </div>
        </div>

        <CtaStrip text="Join hundreds of members who train with us every week." />
      </div>
    </section>
  )
}
