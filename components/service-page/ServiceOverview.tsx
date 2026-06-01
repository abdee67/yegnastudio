'use client'

import RevealOnScroll from '@/components/ui/RevealOnScroll'
import StaggerContainer from '@/components/ui/StaggerContainer'
import StaggerItem from '@/components/ui/StaggerItem'
import type { ServiceOverviewData } from '@/types/service'

export default function ServiceOverview({ eyebrow, title, description, highlights }: ServiceOverviewData) {
  return (
    <section className="px-5 py-16 md:px-8 md:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <RevealOnScroll>
          <div className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent)]">{eyebrow}</div>
          <h2 className="mt-3 text-[clamp(1.6rem,4vw,2.8rem)]">{title}</h2>
        </RevealOnScroll>

        <div>
          <RevealOnScroll delay={0.1} className="space-y-5">
            {description.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-[var(--text2)]">
                {paragraph}
              </p>
            ))}
          </RevealOnScroll>

          <StaggerContainer className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface2)] text-xl">
                    {item.icon}
                  </div>
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text2)]">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
