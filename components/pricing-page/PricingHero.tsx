'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import type { PricingHeroData } from '@/types/pricing'

function serviceLabelFromHref(href: string) {
  const slug = href.split('/').filter(Boolean).at(-1) ?? 'service'
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export default function PricingHero({ badge, headline, subheadline, serviceHref }: PricingHeroData) {
  const prefersReduced = useReducedMotion()
  const transition = { duration: prefersReduced ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] as const }

  return (
    <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden px-5 pb-16 pt-28 text-center">
      <div
        className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle,var(--border)_1px,transparent_1px)] [background-size:32px_32px]"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,240,65,0.07)_0%,transparent_70%)] sm:h-[440px] sm:w-[440px]"
        aria-hidden="true"
      />
      <header className="relative z-10 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0 }}
        >
          <Link href={serviceHref} className="mb-5 inline-flex min-h-[44px] items-center text-sm text-[var(--text2)] hover:text-[var(--accent)]">
            Back to {serviceLabelFromHref(serviceHref)}
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: prefersReduced ? 0 : 0.15 }}
          className="mb-5 inline-flex min-h-[44px] items-center rounded-full border border-[rgba(200,240,65,0.25)] bg-[rgba(200,240,65,0.1)] px-4 text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent)]"
        >
          {badge}
        </motion.div>
        <motion.h1
          initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: prefersReduced ? 0 : 0.3 }}
          className="text-[clamp(2rem,6vw,4rem)]"
        >
          {headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: prefersReduced ? 0 : 0.45 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--text2)]"
        >
          {subheadline}
        </motion.p>
      </header>
    </section>
  )
}
