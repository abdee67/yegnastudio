import Link from 'next/link'
import { FOOTER_LINKS, SOCIAL_LINKS } from '@/data'
import { BRAND_NAME } from '@/data/brand'
import BrandMark from '@/components/ui/BrandMark'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--black)] border-t border-[var(--border)] pt-14 pb-8 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <BrandMark size="lg" />
            <p className="text-[var(--text2)] text-sm leading-relaxed mt-4 mb-6 max-w-[260px]">
              We build fast, beautiful, and scalable digital products for businesses
              in Ethiopia and beyond.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center bg-[var(--surface)] border border-[var(--border)] rounded-lg text-[var(--text2)] text-xs font-bold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 display-font"
                >
                  {s.short}
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="display-font text-sm font-bold text-[var(--white)] uppercase tracking-[0.06em] mb-5">
                {title}
              </h4>
              <ul className="flex flex-col gap-3 list-none">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[var(--text2)] text-sm hover:text-[var(--accent)] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[var(--muted)] text-xs">
            © {year} {BRAND_NAME} — Addis Ababa, Ethiopia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
