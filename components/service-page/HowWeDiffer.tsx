'use client'

import { motion, useReducedMotion } from 'framer-motion'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import StaggerContainer from '@/components/ui/StaggerContainer'
import StaggerItem from '@/components/ui/StaggerItem'
import type { HowWeDifferData } from '@/types/service'

export default function HowWeDiffer({ eyebrow, title, subtitle, differentiators }: HowWeDifferData) {
  const prefersReduced = useReducedMotion()

  return (
    <section className="bg-[var(--surface)] px-5 py-16 md:px-8 md:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent)]">{eyebrow}</div>
          <h2 className="mt-3 text-[clamp(1.6rem,4vw,2.8rem)]">{title}</h2>
          <p className="mt-4 text-base leading-8 text-[var(--text2)]">{subtitle}</p>
        </RevealOnScroll>

        <StaggerContainer className="mt-12 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {differentiators.map((item) => (
            <StaggerItem key={item.num}>
              <motion.article
                whileHover={prefersReduced ? undefined : { x: 6 }}
                className="grid grid-cols-[64px_1fr] gap-8 py-8 will-change-transform"
              >
                <motion.div
                  whileHover={prefersReduced ? undefined : { color: 'var(--accent)' }}
                  className="display-font text-5xl font-black leading-none text-[var(--border)]"
                >
                  {item.num}
                </motion.div>
                <div>
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-[var(--text2)]">{item.description}</p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
