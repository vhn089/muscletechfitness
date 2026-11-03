import { ArrowRight, Phone } from 'lucide-react'
import { SITE } from '@/lib/site'
import { ENROLL_ANCHOR, URGENCY_LINE } from '@/lib/enroll'

type CtaStripProps = {
  text?: string
}

/** Compact call-to-action repeated between sections to keep a CTA always in reach. */
export function CtaStrip({ text = URGENCY_LINE }: CtaStripProps) {
  return (
    <div className="mx-auto mt-14 flex max-w-6xl flex-col items-start justify-between gap-4 rounded-lg border border-border bg-card p-5 sm:flex-row sm:items-center">
      <p className="text-sm font-medium leading-relaxed text-pretty">
        <span className="text-primary">Ready to start?</span> {text}
      </p>
      <div className="flex w-full gap-3 sm:w-auto">
        <a
          href={ENROLL_ANCHOR}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5 sm:flex-none"
        >
          Join Now
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
        <a
          href={SITE.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          aria-label={`Call ${SITE.name} at ${SITE.phoneDisplay}`}
        >
          <Phone className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">Call</span>
        </a>
      </div>
    </div>
  )
}
