'use client'

import { motion, useReducedMotion } from 'framer-motion'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import StaggerContainer from '@/components/ui/StaggerContainer'
import StaggerItem from '@/components/ui/StaggerItem'
import type { ServiceProcessData } from '@/types/service'

export default function OurProcess({ eyebrow, title, steps }: ServiceProcessData) {
  const prefersReduced = useReducedMotion()

  return (
    <section className="px-5 py-16 md:px-8 md:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent)]">{eyebrow}</div>
          <h2 className="mt-3 text-[clamp(1.6rem,4vw,2.8rem)]">{title}</h2>
        </RevealOnScroll>

        <div className="relative mt-12">
          <div className="absolute left-4 top-0 hidden h-full border-l-2 border-[var(--border)] max-lg:block" aria-hidden="true" />
          <div className="absolute left-0 right-0 top-10 hidden border-t border-dashed border-[var(--border)] lg:block" aria-hidden="true" />

          <StaggerContainer className="relative grid grid-cols-1 gap-5 lg:grid-cols-5">
            {steps.map((step) => (
              <StaggerItem key={step.num}>
                <motion.article
                  whileHover={prefersReduced ? undefined : { y: -6 }}
                  transition={{ duration: prefersReduced ? 0 : 0.2 }}
                  className="relative ml-10 min-h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 will-change-transform lg:ml-0"
                >
                  <div
                    className="absolute -left-[2.2rem] top-6 h-4 w-4 rounded-full border-4 border-[var(--black)] bg-[var(--accent)] lg:hidden"
                    aria-hidden="true"
                  />
                  <div className="display-font mb-5 inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-[var(--accent)] px-3 text-sm font-black text-[var(--black)]">
                    {step.num}
                  </div>
                  <h3 className="text-lg">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text2)]">{step.description}</p>
                  {step.deliverable && (
                    <div className="mt-5 inline-flex rounded-full border border-[rgba(200,240,65,0.2)] bg-[rgba(200,240,65,0.08)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                      {step.deliverable}
                    </div>
                  )}
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
