'use client'

import { ENROLL_ANCHOR, SELECT_PLAN_EVENT } from '@/lib/enroll'

type EnrollPlanLinkProps = {
  plan: string
  className?: string
  children: React.ReactNode
}

export function EnrollPlanLink({ plan, className, children }: EnrollPlanLinkProps) {
  return (
    <a
      href={ENROLL_ANCHOR}
      onClick={() => window.dispatchEvent(new CustomEvent(SELECT_PLAN_EVENT, { detail: plan }))}
      aria-label={`Join now in the ${plan} plan`}
      className={className}
    >
      {children}
    </a>
  )
}
