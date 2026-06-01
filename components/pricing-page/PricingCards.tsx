'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import StaggerContainer from '@/components/ui/StaggerContainer'
import StaggerItem from '@/components/ui/StaggerItem'
import type { PricingCardsData } from '@/types/pricing'

export default function PricingCards({ eyebrow, title, billingToggle, plans, note }: PricingCardsData) {
  const [billing, setBilling] = useState<'one-time' | 'monthly'>('one-time')
  const prefersReduced = useReducedMotion()

  return (
    <section className="px-5 py-16 md:px-8 md:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent)]">{eyebrow}</div>
          <h2 className="mt-3 text-[clamp(1.6rem,4vw,2.8rem)]">{title}</h2>
        </RevealOnScroll>

        {billingToggle && (
          <RevealOnScroll delay={0.1} className="mt-8 flex justify-center">
            <div className="relative grid grid-cols-2 rounded-full border border-[var(--border)] bg-[var(--surface)] p-1">
              <motion.div
                layout
                transition={{ duration: prefersReduced ? 0 : 0.2 }}
                className={[
                  'absolute bottom-1 top-1 w-[calc(50%-0.25rem)] rounded-full bg-[var(--accent)]',
                  billing === 'monthly' ? 'left-[calc(50%+0.125rem)]' : 'left-1',
                ].join(' ')}
                aria-hidden="true"
              />
              {(['one-time', 'monthly'] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setBilling(option)}
                  className={[
                    'display-font relative z-10 min-h-[44px] min-w-[118px] rounded-full px-4 text-sm font-bold',
                    billing === option ? 'text-[var(--black)]' : 'text-[var(--text2)]',
                  ].join(' ')}
                >
                  {option === 'one-time' ? 'One-time' : 'Monthly'}
                </button>
              ))}
            </div>
          </RevealOnScroll>
        )}

        <StaggerContainer className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-6 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = billing === 'monthly' && plan.priceMonthly ? plan.priceMonthly : plan.price

            return (
              <StaggerItem key={plan.name}>
                <motion.article
                  whileHover={prefersReduced ? undefined : { y: -8 }}
                  className={[
                    'relative flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 will-change-transform',
                    plan.featured ? 'shadow-[0_0_0_1px_var(--accent),0_0_40px_rgba(200,240,65,0.08)]' : '',
                  ].join(' ')}
                >
                  {plan.featured && (
                    <span className="display-font absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--accent)] px-4 py-1.5 text-xs font-bold text-[var(--black)]">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg">{plan.name}</h3>
                  <div className="display-font mt-4 text-[2.2rem] font-extrabold leading-none text-[var(--white)]">
                    {price}
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
                    {plan.notIncluded?.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-[var(--muted)]">
                        <span className="shrink-0" aria-hidden="true">
                          x
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-[var(--border)] pt-5 text-sm text-[var(--text2)]">
                    {plan.deliveryTime && <div className="flex flex-col gap-0.5 py-1 sm:flex-row sm:justify-between sm:gap-4"><span>Delivery</span><strong className="min-w-0 break-words text-[var(--text)] sm:text-right">{plan.deliveryTime}</strong></div>}
                    {plan.revisions && <div className="flex flex-col gap-0.5 py-1 sm:flex-row sm:justify-between sm:gap-4"><span>Revisions</span><strong className="min-w-0 break-words text-[var(--text)] sm:text-right">{plan.revisions}</strong></div>}
                    {plan.support && <div className="flex flex-col gap-0.5 py-1 sm:flex-row sm:justify-between sm:gap-4"><span>Support</span><strong className="min-w-0 break-words text-[var(--text)] sm:text-right">{plan.support}</strong></div>}
                  </div>

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
            )
          })}
        </StaggerContainer>

        {note && (
          <RevealOnScroll delay={0.1}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-[var(--muted)]">{note}</p>
          </RevealOnScroll>
        )}
      </div>
    </section>
  )
}
