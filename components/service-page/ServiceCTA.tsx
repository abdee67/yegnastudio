'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import type { ServiceCTAData } from '@/types/service'

export default function ServiceCTA({ headline, subtext, primaryCTA, secondaryCTA, note }: ServiceCTAData) {
  const prefersReduced = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-[var(--black)] px-5 py-28">
      <div
        className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,240,65,0.07)_0%,transparent_68%)] sm:h-[520px] sm:w-[520px]"
        aria-hidden="true"
      />
      <motion.div
        animate={prefersReduced ? undefined : { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: prefersReduced ? 0 : 8, repeat: Infinity, ease: 'linear' }}
        className="relative mx-auto max-w-2xl rounded-2xl bg-[linear-gradient(90deg,var(--border),var(--accent),var(--border))] p-[1px] [background-size:200%_200%]"
      >
        <div className="rounded-2xl bg-[var(--surface)] px-6 py-12 text-center sm:px-10">
          <RevealOnScroll>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)]">{headline}</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-[var(--text2)]">{subtext}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={primaryCTA.href}
                className="display-font inline-flex min-h-[44px] items-center justify-center rounded-full bg-[var(--accent)] px-7 text-sm font-bold text-[var(--black)] hover:bg-[var(--accent-dark)]"
              >
                {primaryCTA.label}
              </Link>
              <Link
                href={secondaryCTA.href}
                className="display-font inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--border)] px-7 text-sm font-bold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {secondaryCTA.label}
              </Link>
            </div>
            {note && <p className="mt-5 text-sm text-[var(--muted)]">{note}</p>}
          </RevealOnScroll>
        </div>
      </motion.div>
    </section>
  )
}
