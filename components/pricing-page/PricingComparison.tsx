'use client'

import { motion, useReducedMotion } from 'framer-motion'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import type { PricingComparisonData, PricingComparisonFeature } from '@/types/pricing'

function cellValue(value: PricingComparisonFeature['starter']) {
  if (value === true) {
    return <span className="display-font text-lg font-black text-[var(--accent)]">✓</span>
  }

  if (value === false) {
    return <span className="text-[var(--muted)]">—</span>
  }

  return <span className="font-semibold text-[var(--accent)]">{value}</span>
}

export default function PricingComparison({ title, subtitle, features }: PricingComparisonData) {
  const prefersReduced = useReducedMotion()
  const rows: Array<PricingComparisonFeature | { categoryLabel: string }> = []
  const groupedFeatures = features.reduce<Array<{ category: string; items: PricingComparisonFeature[] }>>((groups, feature) => {
    const currentGroup = groups.find((group) => group.category === feature.category)

    if (currentGroup) {
      currentGroup.items.push(feature)
    } else {
      groups.push({ category: feature.category, items: [feature] })
    }

    return groups
  }, [])
  let currentCategory = ''

  features.forEach((feature) => {
    if (feature.category !== currentCategory) {
      currentCategory = feature.category
      rows.push({ categoryLabel: feature.category })
    }

    rows.push(feature)
  })

  return (
    <section className="bg-[var(--surface)] px-5 py-16 md:px-8 md:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(1.6rem,4vw,2.8rem)]">{title}</h2>
          {subtitle && <p className="mt-4 text-base leading-8 text-[var(--text2)]">{subtitle}</p>}
        </RevealOnScroll>

        <div className="mt-10 space-y-5 md:hidden">
          {groupedFeatures.map((group) => (
            <section key={group.category} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
              <h3 className="border-b border-[var(--border)] px-4 py-3 text-base">{group.category}</h3>
              <div className="divide-y divide-[var(--border)]">
                {group.items.map((feature) => (
                  <article key={`${feature.category}-${feature.name}`} className="p-4">
                    <h4 className="display-font text-sm font-semibold text-[var(--white)]">{feature.name}</h4>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {[
                        ['Starter', feature.starter],
                        ['Growth', feature.growth],
                        ['Enterprise', feature.enterprise],
                      ].map(([plan, value]) => (
                        <div key={plan as string} className="min-w-0 rounded-xl bg-[var(--surface2)] p-3 text-center">
                          <div className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[var(--muted)]">
                            {plan}
                          </div>
                          <div className="mt-1 min-w-0 break-words text-xs leading-5">{cellValue(value as PricingComparisonFeature['starter'])}</div>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 hidden overflow-hidden rounded-2xl border border-[var(--border)] md:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="sticky top-0 bg-[rgba(20,20,20,0.9)] backdrop-blur">
              <tr>
                <th className="display-font p-4 text-[var(--white)]">Feature</th>
                <th className="display-font p-4 text-[var(--white)]">Starter</th>
                <th className="display-font p-4 text-[var(--white)]">Growth</th>
                <th className="display-font p-4 text-[var(--white)]">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => {
                if ('categoryLabel' in row) {
                  return (
                    <tr key={row.categoryLabel} className="bg-[var(--surface2)]">
                      <td colSpan={4} className="display-font p-4 font-bold text-[var(--white)]">
                        {row.categoryLabel}
                      </td>
                    </tr>
                  )
                }

                return (
                  <motion.tr
                    key={`${row.category}-${row.name}`}
                    initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: prefersReduced ? 0 : 0.35, delay: prefersReduced ? 0 : index * 0.02 }}
                    className={index % 2 === 0 ? 'bg-transparent' : 'bg-[rgba(255,255,255,0.015)]'}
                  >
                    <td className="p-4 text-[var(--text)]">{row.name}</td>
                    <td className="p-4">{cellValue(row.starter)}</td>
                    <td className="p-4">{cellValue(row.growth)}</td>
                    <td className="p-4">{cellValue(row.enterprise)}</td>
                  </motion.tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
