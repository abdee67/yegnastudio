'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import type { ServiceTechStackData } from '@/types/service'

export default function TechStack({ eyebrow, title, tools }: ServiceTechStackData) {
  const categories = useMemo(() => ['All', ...Array.from(new Set(tools.map((tool) => tool.category)))], [tools])
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const prefersReduced = useReducedMotion()
  const visibleTools = activeCategory === 'All' ? tools : tools.filter((tool) => tool.category === activeCategory)

  return (
    <section className="bg-[var(--surface)] px-5 py-16 md:px-8 md:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent)]">{eyebrow}</div>
          <h2 className="mt-3 text-[clamp(1.6rem,4vw,2.8rem)]">{title}</h2>
        </RevealOnScroll>

        <div className="mt-8 flex w-full min-w-0 max-w-full gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Technology categories">
          {categories.map((category) => {
            const isActive = category === activeCategory

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={[
                  'display-font min-h-[44px] whitespace-nowrap rounded-full px-4 text-sm font-bold',
                  isActive
                    ? 'bg-[var(--accent)] text-[var(--black)]'
                    : 'border border-[var(--border)] text-[var(--text2)] hover:border-[var(--accent)] hover:text-[var(--accent)]',
                ].join(' ')}
              >
                {category}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: prefersReduced ? 0 : 0.25 }}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {visibleTools.map((tool) => (
              <article key={`${tool.name}-${tool.category}`} className="rounded-xl border border-[var(--border)] bg-[var(--surface2)] p-4">
                <div className="flex min-h-[28px] min-w-0 items-start justify-between gap-3">
                  <h3 className="min-w-0 text-base break-words">{tool.name}</h3>
                  {tool.proficiency && tool.proficiency !== 'Proficient' && (
                    <span
                      className={[
                        'shrink-0 rounded-full px-2 py-1 text-[0.68rem] font-bold',
                        tool.proficiency === 'Expert'
                          ? 'bg-[var(--accent)] text-[var(--black)]'
                          : 'border border-[var(--border)] text-[var(--text2)]',
                      ].join(' ')}
                    >
                      {tool.proficiency}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">{tool.category}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--text2)]">{tool.description}</p>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
