'use client'

import { useEffect, useState, type FormEvent } from 'react'
import Image from 'next/image'
import { CheckCircle2, Send, Timer } from 'lucide-react'
import { whatsappLink } from '@/lib/site'
import { FITNESS_GOALS, MEMBERSHIP_PLANS, SELECT_PLAN_EVENT, URGENCY_LINE } from '@/lib/enroll'

type Errors = Partial<Record<'name' | 'phone' | 'email' | 'startDate', string>>

const inputClass =
  'h-12 w-full rounded-md border border-input bg-background px-4 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-primary'

function todayISO() {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

export function EnrollForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [plan, setPlan] = useState('')

  useEffect(() => {
    function onSelectPlan(e: Event) {
      const selected = (e as CustomEvent<string>).detail
      if ((MEMBERSHIP_PLANS as readonly string[]).includes(selected)) {
        setPlan(selected)
        setSubmitted(false)
      }
    }
    window.addEventListener(SELECT_PLAN_EVENT, onSelectPlan)
    return () => window.removeEventListener(SELECT_PLAN_EVENT, onSelectPlan)
  }, [])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '').replace(/\D/g, '')
    const email = String(data.get('email') ?? '').trim()
    const goal = String(data.get('goal') ?? '')
    const startDate = String(data.get('startDate') ?? '')

    const next: Errors = {}
    if (name.length < 2) next.name = 'Please enter your full name.'
    if (!/^(91)?[6-9]\d{9}$/.test(phone)) next.phone = 'Enter a valid 10-digit mobile number.'
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email address.'
    if (startDate && startDate < todayISO()) next.startDate = 'Pick today or a future date.'
    setErrors(next)
    if (Object.keys(next).length > 0) return

    const lines = [
      "Hi Muscle Tech Fitness! I'd like to enroll.",
      `Name: ${name}`,
      `Phone: ${phone.slice(-10)}`,
      `Email: ${email || 'Not provided'}`,
      `Fitness Goal: ${goal || 'Not specified'}`,
      `Membership Plan: ${plan || 'Not specified'}`,
      `Preferred Start Date: ${startDate || 'Not specified'}`,
    ]
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <section id="enroll" aria-labelledby="enroll-title" className="relative isolate overflow-hidden px-4 py-20 md:py-28">
      <Image
        src="/images/treadmills.png"
        alt=""
        fill
        loading="lazy"
        sizes="100vw"
        className="-z-20 object-cover opacity-30"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/95 to-background/70" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
            <Timer className="size-3.5" aria-hidden="true" />
            Limited slots available
          </p>
          <h2 id="enroll-title" className="font-display text-6xl leading-[0.9] tracking-wide text-balance md:text-7xl">
            Enroll Today. <span className="text-primary">Start Your Transformation.</span>
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">{URGENCY_LINE}</p>
          <ul className="flex flex-col gap-2 text-sm">
            {['Full access to all zones', 'Certified trainers on the floor', 'Personalised starter plan'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 md:p-8">
          {submitted ? (
            <div role="status" className="flex flex-col items-start gap-4 py-8">
              <CheckCircle2 className="size-10 text-primary" aria-hidden="true" />
              <h3 className="font-display text-4xl leading-none tracking-wide text-balance">
                {"Thanks for enrolling! We'll contact you shortly."}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {"We've opened WhatsApp with your details — just hit send to share them with our team."}
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                Submit another enrollment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <h3 className="font-display text-3xl leading-none tracking-wide">Enrollment form</h3>

              <Field label="Full Name" id="name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  placeholder="Your name"
                  className={inputClass}
                />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone Number" id="phone" error={errors.phone}>
                  <div className="flex">
                    <span className="inline-flex h-12 items-center rounded-l-md border border-r-0 border-input bg-secondary px-3 text-sm text-muted-foreground">
                      +91
                    </span>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      required
                      maxLength={14}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      placeholder="98765 43210"
                      className={`${inputClass} rounded-l-none`}
                    />
                  </div>
                </Field>

                <Field label="Email (optional)" id="email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Fitness Goal" id="goal">
                  <select id="goal" name="goal" defaultValue="" className={inputClass}>
                    <option value="">Select your goal</option>
                    {FITNESS_GOALS.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Preferred Membership Plan" id="plan">
                  <select
                    id="plan"
                    name="plan"
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select a plan</option>
                    {MEMBERSHIP_PLANS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Preferred Start Date" id="startDate" error={errors.startDate}>
                <input
                  id="startDate"
                  name="startDate"
                  type="date"
                  aria-invalid={!!errors.startDate}
                  aria-describedby={errors.startDate ? 'startDate-error' : undefined}
                  className={`${inputClass} [color-scheme:dark]`}
                />
              </Field>

              <button
                type="submit"
                className="mt-2 inline-flex h-14 items-center justify-center gap-2 rounded-md bg-primary text-base font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Join Now
                <Send className="size-4" aria-hidden="true" />
              </button>
              <p className="text-center text-sm text-muted-foreground">
                Our team will call you shortly to complete your enrollment.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({ label, id, error, children }: { label: string; id: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-primary">
          {error}
        </p>
      ) : null}
    </div>
  )
}
