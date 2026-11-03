import { MessageCircle, Phone, UserPlus } from 'lucide-react'
import { SITE, whatsappLink } from '@/lib/site'

export function FloatingActions() {
  return (
    <>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 bottom-5 z-40 hidden size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_30px_-4px_var(--primary)] transition-transform hover:scale-110 md:inline-flex"
      >
        <MessageCircle className="size-6" aria-hidden="true" />
        <span className="sr-only">Chat with us on WhatsApp</span>
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-px border-t border-border bg-border md:hidden">
        <a
          href={SITE.phoneHref}
          className="flex flex-col items-center justify-center gap-1 bg-background py-3 text-xs font-semibold"
        >
          <Phone className="size-5" aria-hidden="true" />
          Call Now
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 bg-background py-3 text-xs font-semibold"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href="#enroll"
          className="flex flex-col items-center justify-center gap-1 bg-primary py-3 text-xs font-bold uppercase text-primary-foreground"
        >
          <UserPlus className="size-5" aria-hidden="true" />
          Enroll Now
        </a>
      </div>
    </>
  )
}
