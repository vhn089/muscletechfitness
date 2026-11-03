// Placeholder figures — edit these to match the gym's real numbers
const STATS = [
  { value: '100+', label: 'Modern Machines' },
  { value: '10+', label: 'Certified Trainers' },
  { value: '2', label: 'Strength & Cardio Zones' },
  { value: '1,500+', label: 'Members on Flexible Plans' },
]

export function TrustBar() {
  return (
    <section aria-label="Gym highlights" className="border-y border-border bg-card">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col gap-1 px-4 py-6 md:px-6 ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b md:border-b-0' : ''} border-border md:border-r md:last:border-r-0`}
          >
            <dt className="order-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">{stat.label}</dt>
            <dd className="order-1 font-display text-4xl leading-none text-primary md:text-5xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
