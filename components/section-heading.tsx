import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  id?: string
}

export function SectionHeading({ eyebrow, title, description, align = 'left', className, id }: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-3', align === 'center' && 'items-center text-center', className)}>
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
        <span aria-hidden="true" className="h-px w-8 bg-primary" />
        {eyebrow}
      </p>
      <h2 id={id} className="font-display text-5xl leading-none tracking-wide text-balance md:text-6xl">{title}</h2>
      {description ? (
        <p className="max-w-xl leading-relaxed text-muted-foreground text-pretty">{description}</p>
      ) : null}
    </div>
  )
}
