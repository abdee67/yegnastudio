import Link from 'next/link'
import { FOOTER_LINKS, SOCIAL_LINKS } from '@/data'
import { BRAND_NAME } from '@/data/brand'
import BrandMark from '@/components/ui/BrandMark'

function isExternalHref(href: string) {
  return href.startsWith('http')
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--black)] px-5 pb-8 pt-12 sm:px-6 md:px-8 md:pt-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(circle,var(--border)_1px,transparent_1px)] [background-size:30px_30px]"
        aria-hidden="true"
      />
      <div className="hero-glow bottom-[-360px] right-[-360px] top-auto opacity-80" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-6 overflow-hidden rounded-[28px] border border-[var(--border)] bg-[rgba(20,20,20,0.72)] p-5 shadow-2xl shadow-black/25 sm:p-6 md:mb-8 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <BrandMark size="lg" />
              <p className="mt-4 text-sm leading-7 text-[var(--text2)] sm:text-base">
                We build fast, beautiful, and scalable digital products for businesses in Ethiopia and beyond.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/#contact"
                className="display-font inline-flex min-h-[48px] items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-[var(--black)] hover:bg-[var(--accent-dark)]"
              >
                Start a project
              </Link>
              <Link
                href="/#work"
                className="display-font inline-flex min-h-[48px] items-center justify-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-bold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                View work
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.25fr]">
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div
              key={title}
              className={[
                'rounded-2xl border border-[var(--border)] bg-[rgba(20,20,20,0.52)] p-5',
                title === 'Contact' ? 'sm:col-span-2 lg:col-span-1' : '',
              ].join(' ')}
            >
              <h4 className="display-font mb-3 text-sm font-bold uppercase tracking-[0.1em] text-[var(--white)]">
                {title}
              </h4>
              <ul className="grid list-none grid-cols-1 gap-1">
                {links.map((link) => {
                  const external = isExternalHref(link.href)

                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noreferrer' : undefined}
                        className="flex min-h-[44px] min-w-0 items-center rounded-xl px-3 text-sm leading-5 text-[var(--text2)] hover:bg-[var(--surface2)] hover:text-[var(--accent)]"
                      >
                        <span className="min-w-0 break-words">{link.label}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-5 rounded-2xl border border-[var(--border)] bg-[rgba(10,10,10,0.6)] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            {SOCIAL_LINKS.map((social) => {
              const external = isExternalHref(social.href)

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  aria-label={social.label}
                  className="display-font inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 text-xs font-bold uppercase text-[var(--text2)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {social.short}
                </Link>
              )
            })}
          </div>

          <p className="text-left text-xs leading-6 text-[var(--muted)] sm:text-right">
            © {year} {BRAND_NAME} — Addis Ababa, Ethiopia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
