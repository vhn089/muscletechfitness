import { ImageIcon } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

// Placeholder slots — replace with real member before/after photos (with consent)
const STORIES = [
  { name: 'Member A', result: '-14 kg in 5 months' },
  { name: 'Member B', result: '+6 kg lean muscle in 8 months' },
  { name: 'Member C', result: '-9 kg, deadlift up to 160 kg' },
]

function PhotoSlot({ label }: { label: string }) {
  return (
    <div className="relative flex aspect-[3/4] flex-col items-center justify-center gap-2 bg-secondary text-muted-foreground">
      <ImageIcon className="size-6" aria-hidden="true" />
      <span className="text-xs uppercase tracking-widest">{label}</span>
      <span className="absolute top-2 left-2 rounded-sm bg-background px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground">
        {label}
      </span>
    </div>
  )
}

export function Transformations() {
  return (
    <section aria-labelledby="transform-title" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="transform-title"
          eyebrow="Transformations"
          title="Real members. Real results."
          description="Consistency plus the right coaching changes everything. Here's what our members have achieved."
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {STORIES.map((s, i) => (
            <Reveal as="li" key={s.name} delay={i * 100} className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="grid grid-cols-2 gap-px bg-border">
                <PhotoSlot label="Before" />
                <PhotoSlot label="After" />
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <p className="font-semibold">{s.name}</p>
                <p className="text-sm font-bold text-primary">{s.result}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
