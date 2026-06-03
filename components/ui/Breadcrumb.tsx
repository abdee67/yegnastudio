'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

const segmentLabels: Record<string, string> = {
  services: 'Services',
  pricing: 'Pricing',
  'web-development': 'Web Development',
  'mobile-apps': 'Mobile Apps',
  'business-profile': 'Business Profile',
  'ui-ux-design': 'UI/UX Design',
  'social-media': 'Social Media',
}

function segmentHref(segment: string) {
  if (segment === 'services') return '/#services'
  if (segment === 'pricing') return '/#pricing'
  return undefined
}

export default function Breadcrumb() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) {
    return null
  }

  return (
    <RevealOnScroll once className="sticky top-16 z-40 border-b border-[var(--border)] bg-[rgba(20,20,20,0.8)] px-5 py-3 text-sm text-[var(--text2)] backdrop-blur">
      <nav aria-label="Breadcrumb" className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto">
        <Link href="/" className="min-h-[44px] inline-flex items-center hover:text-[var(--accent)]">
          Home
        </Link>
        {segments.map((segment, index) => {
          const label = segmentLabels[segment] ?? segment.replace(/-/g, ' ')
          const href = segmentHref(segment)
          const isLast = index === segments.length - 1

          return (
            <span key={`${segment}-${index}`} className="inline-flex items-center gap-2 whitespace-nowrap">
              <span aria-hidden="true">/</span>
              {href && !isLast ? (
                <Link href={href} className="min-h-[44px] inline-flex items-center hover:text-[var(--accent)]">
                  {label}
                </Link>
              ) : (
                <span className={isLast ? 'text-[var(--white)]' : ''}>{label}</span>
              )}
            </span>
          )
        })}
      </nav>
    </RevealOnScroll>
  )
}
