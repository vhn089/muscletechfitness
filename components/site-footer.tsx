import { Logo } from '@/components/logo'
import { NAV_LINKS, SITE, fullAddress } from '@/lib/site'

// Placeholder social URLs — update with the gym's real profiles
const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/',
    path: 'M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.2-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.2-.4 1.3-.1 1.6-.1 4.8-.1M12 0C8.7 0 8.3 0 7.1.1 5.8.1 4.9.3 4.1.6c-.8.3-1.5.7-2.1 1.4C1.3 2.6.9 3.3.6 4.1.3 4.9.1 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.3 2.2.6 2.9.3.8.7 1.5 1.4 2.1.7.7 1.3 1.1 2.1 1.4.8.3 1.6.5 2.9.6 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.3-.1 2.2-.3 2.9-.6.8-.3 1.5-.7 2.1-1.4.7-.7 1.1-1.3 1.4-2.1.3-.8.5-1.6.6-2.9.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.3-2.2-.6-2.9-.3-.8-.7-1.5-1.4-2.1C21.4 1.3 20.7.9 19.9.6 19.1.3 18.2.1 16.9.1 15.7 0 15.3 0 12 0Zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.8a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9Z',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/',
    path: 'M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12Z',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/',
    path: 'M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z',
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card px-4 pt-16 pb-28 md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Premium strength and cardio training in HMT Layout, Nagasandra, Bengaluru.
          </p>
          <ul className="flex gap-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                  <span className="sr-only">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <p className="font-display text-xl tracking-wide">Explore</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted-foreground md:grid-cols-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display text-xl tracking-wide">Contact</p>
          <address className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground not-italic">
            <span>{fullAddress}</span>
            <a href={SITE.phoneHref} className="hover:text-primary">
              {SITE.phoneDisplay}
            </a>
          </address>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          {'© '}
          {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
        <p>Gym in HMT Layout · Nagasandra · Bengaluru</p>
      </div>
    </footer>
  )
}
