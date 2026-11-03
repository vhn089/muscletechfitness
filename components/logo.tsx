export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Muscle Tech Fitness — back to top">
      <span
        aria-hidden="true"
        className="flex size-9 items-center justify-center rounded-full border-2 border-primary font-display text-lg leading-none text-primary"
      >
        MT
      </span>
      <span className="font-display text-2xl leading-none tracking-wide">
        Muscle Tech <span className="text-primary">Fitness</span>
      </span>
    </a>
  )
}
