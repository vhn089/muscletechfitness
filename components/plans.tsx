import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { EnrollPlanLink } from '@/components/enroll-plan-link'
import { cn } from '@/lib/utils'

// Placeholder pricing — replace with the gym's actual rates
const PLANS = [
  { name: 'Monthly', price: '1,999', period: '/ month', perks: ['Full gym access', 'Cardio & strength zones', 'Locker access'] },
  { name: 'Quarterly', price: '4,999', period: '/ 3 months', perks: ['Everything in Monthly', '1 fitness assessment', 'Workout plan'] },
  {
    name: 'Half-Yearly',
    price: '8,499',
    period: '/ 6 months',
    perks: ['Everything in Quarterly', 'Diet guidance', 'Monthly progress check'],
  },
  {
    name: 'Annual',
    price: '14,999',
    period: '/ 12 months',
    perks: ['Everything in Half-Yearly', '2 personal training sessions', 'Freeze up to 30 days'],
    featured: true,
  },
]

export function Plans() {
  return (
    <section id="plans" aria-labelledby="plans-title" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="plans-title"
          eyebrow="Membership Plans"
          title="Simple plans. Serious results."
          description="Commit longer, save more. Pick a plan and enroll in minutes."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan, i) => (
            <Reveal
              as="li"
              key={plan.name}
              delay={i * 80}
              className={cn(
                'relative flex flex-col rounded-lg border p-6 transition-transform hover:-translate-y-1',
                plan.featured ? 'border-primary bg-card shadow-[0_0_60px_-20px_var(--primary)]' : 'border-border bg-card',
              )}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                  Best Value
                </span>
              ) : null}
              <h3 className="font-display text-3xl leading-none tracking-wide">{plan.name}</h3>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground">{'₹'}</span>
                <span className="font-display text-5xl leading-none">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm leading-relaxed">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {perk}
                  </li>
                ))}
              </ul>
              <EnrollPlanLink
                plan={plan.name}
                className={cn(
                  'mt-8 inline-flex items-center justify-center rounded-md px-4 py-3 text-sm font-bold uppercase tracking-wide transition-colors',
                  plan.featured
                    ? 'bg-primary text-primary-foreground hover:opacity-90'
                    : 'border border-border hover:border-primary hover:text-primary',
                )}
              >
                Enroll Now
              </EnrollPlanLink>
            </Reveal>
          ))}
        </ul>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Prices are indicative. Contact us for current offers and couple / student discounts.
        </p>
      </div>
    </section>
  )
}
