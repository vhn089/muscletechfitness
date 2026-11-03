'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const PHOTOS = [
  { src: '/images/gym-floor.png', alt: 'Free weights floor with angular LED lights', span: 'col-span-2 row-span-1' },
  { src: '/images/members.png', alt: 'Members striking a pose together on the gym floor', span: 'row-span-2' },
  { src: '/images/treadmills.png', alt: 'Treadmills lined up in the cardio zone', span: 'row-span-2' },
  { src: '/images/exterior.png', alt: 'Muscle Tech Fitness building exterior in HMT Layout', span: 'row-span-2' },
  { src: '/images/strength-zone.png', alt: 'Members flexing in the strength workout zone', span: 'row-span-2' },
  { src: '/images/functional.png', alt: 'Functional training area with kettlebells and ropes', span: 'col-span-2 row-span-1' },
]

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (active !== null && !dialog.open) dialog.showModal()
    if (active === null && dialog.open) dialog.close()
  }, [active])

  const step = (dir: 1 | -1) =>
    setActive((i) => (i === null ? null : (i + dir + PHOTOS.length) % PHOTOS.length))

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="gallery-title"
          eyebrow="Gallery"
          title="Step inside"
          description="Moody lighting, serious equipment and a crew that shows up. Tap any photo to view it full-size."
        />

        <ul className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[200px] md:grid-cols-4">
          {PHOTOS.map((p, i) => (
            <li key={p.src} className={cn('relative overflow-hidden rounded-lg', p.span)}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block size-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Image
                  src={p.src || '/placeholder.svg'}
                  alt={p.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="sr-only">Open photo: {p.alt}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setActive(null)
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') step(1)
          if (e.key === 'ArrowLeft') step(-1)
        }}
        aria-label="Photo viewer"
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-background/95"
      >
        {active !== null ? (
          <div className="flex w-[92vw] max-w-5xl flex-col gap-4">
            <div className="flex items-center justify-between gap-4 text-foreground">
              <p className="text-sm text-muted-foreground">
                {active + 1} / {PHOTOS.length} — {PHOTOS[active].alt}
              </p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="inline-flex size-10 items-center justify-center rounded-md border border-border"
              >
                <X className="size-5" aria-hidden="true" />
                <span className="sr-only">Close photo viewer</span>
              </button>
            </div>
            <div className="relative h-[70vh] w-full">
              <Image src={PHOTOS[active].src || '/placeholder.svg'} alt={PHOTOS[active].alt} fill sizes="92vw" className="object-contain" />
            </div>
            <div className="flex justify-center gap-3 text-foreground">
              <button
                type="button"
                onClick={() => step(-1)}
                className="inline-flex size-11 items-center justify-center rounded-md border border-border hover:border-primary"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
                <span className="sr-only">Previous photo</span>
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="inline-flex size-11 items-center justify-center rounded-md border border-border hover:border-primary"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
                <span className="sr-only">Next photo</span>
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  )
}
