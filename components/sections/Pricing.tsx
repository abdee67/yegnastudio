'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { PLANS } from '@/data'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import StaggerContainer from '@/components/ui/StaggerContainer'
import StaggerItem from '@/components/ui/StaggerItem'

export default function Pricing() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="pricing" className="bg-[var(--surface)] py-24 px-8">
      <div className="max-w-[1100px] mx-auto">
        <RevealOnScroll className="text-center">
          <div className="text-[var(--accent)] text-xs font-bold tracking-[0.15em] uppercase mb-3">
            Pricing
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-[var(--white)] leading-[1.1] tracking-[-0.02em] mb-4">
            Clear prices. No surprises.
          </h2>
          <p className="text-[var(--text2)] text-base max-w-[500px] leading-[1.7] mx-auto">
            Every package includes a dedicated contact, clear timeline, and unlimited revisions until you&apos;re happy.
          </p>
        </RevealOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[400px] md:max-w-none mx-auto mt-12">
          {PLANS.map((plan, i) => (
            <StaggerItem key={plan.name}>
              <motion.div
              key={i}
                whileHover={prefersReduced ? undefined : { y: -6 }}
                className={`bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-8 relative will-change-transform hover:border-[rgba(200,240,65,0.3)] ${
                plan.featured ? 'border-[var(--accent)] bg-gradient-to-br from-[rgba(200,240,65,0.06)] to-[var(--surface)]' : ''
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-[var(--black)] display-font text-[0.72rem] font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <div className="display-font text-[0.8rem] font-bold text-[var(--text2)] mb-3 uppercase tracking-[0.08em]">
                {plan.name}
              </div>
              <div className="display-font text-[2.2rem] font-extrabold text-[var(--white)] leading-none">
                {plan.price.split(' ')[0]} {plan.price.split(' ')[1]} 
                {plan.period && (
                  <span className="text-[0.9rem] font-normal text-[var(--muted)] ml-1">
                    {plan.period}
                  </span>
                )}
              </div>
              <p className="text-[var(--text2)] text-[0.85rem] my-3 leading-[1.6]">
                {plan.description}
              </p>
              <ul className="list-none flex flex-col gap-2.5 mb-7">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-[0.85rem] text-[var(--text2)] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center p-3 rounded-full display-font font-bold text-[0.85rem] transition-all duration-200 ${
                  plan.variant === 'solid'
                    ? 'bg-[var(--accent)] text-[var(--black)] hover:bg-[var(--accent-dark)]'
                    : 'border border-[var(--border)] text-[var(--text)] bg-transparent hover:border-[var(--accent)] hover:text-[var(--accent)]'
                }`}
              >
                {plan.cta}
              </a>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
