'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import StaggerContainer from '@/components/ui/StaggerContainer'
import StaggerItem from '@/components/ui/StaggerItem'
import type { ServicePricingData } from '@/types/service'

export default function ServicePricing({ eyebrow, title, subtitle, plans, pricingPageHref, note }: ServicePricingData) {
  const prefersReduced = useReducedMotion()

  return (
    <section className="bg-[var(--surface)] px-5 py-16 md:px-8 md:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent)]">{eyebrow}</div>
          <h2 className="mt-3 text-[clamp(1.6rem,4vw,2.8rem)]">{title}</h2>
          <p className="mt-4 text-base leading-8 text-[var(--text2)]">{subtitle}</p>
        </RevealOnScroll>

        <StaggerContainer className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-6 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.article
                whileHover={prefersReduced ? undefined : { y: plan.featured ? -10 : -8 }}
                className={[
                  'relative flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 will-change-transform',
                  plan.featured ? 'shadow-[0_0_0_1px_var(--accent),0_0_40px_rgba(200,240,65,0.08)]' : '',
                ].join(' ')}
              >
                {plan.featured && (
                  <span className="display-font absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--accent)] px-4 py-1.5 text-xs font-bold text-[var(--black)]">
                    Recommended
                  </span>
                )}
                <h3 className="text-lg">{plan.name}</h3>
                <div className="display-font mt-4 text-[2.2rem] font-extrabold leading-none text-[var(--white)]">
                  {plan.price}
                  {plan.period && <span className="ml-2 text-sm font-medium text-[var(--muted)]">{plan.period}</span>}
                </div>
                <p className="mt-4 text-sm leading-6 text-[var(--text2)]">{plan.description}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-[var(--text2)]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className={[
                    'display-font mt-auto inline-flex min-h-[44px] items-center justify-center rounded-full px-5 text-sm font-bold',
                    plan.variant === 'solid'
                      ? 'bg-[var(--accent)] text-[var(--black)] hover:bg-[var(--accent-dark)]'
                      : 'border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]',
                  ].join(' ')}
                >
                  {plan.cta}
                </Link>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <RevealOnScroll delay={0.1} className="mt-8 text-center">
          <Link href={pricingPageHref} className="display-font inline-flex min-h-[44px] items-center text-sm font-bold text-[var(--accent)]">
            See full pricing
          </Link>
          {note && <p className="mt-3 text-sm text-[var(--muted)]">{note}</p>}
        </RevealOnScroll>
      </div>
    </section>
  )
}
