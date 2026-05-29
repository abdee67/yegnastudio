'use client'

import { SERVICES } from '@/data'
import { useScrollFade } from '@/hooks/use-scroll-fade'

export default function Services() {
  const ref = useScrollFade()

  return (
    <section id="services" className="py-24 px-8" ref={ref}>
      <div className="max-w-[1100px] mx-auto">
        <div className="scroll-fade">
          <div className="text-[var(--accent)] text-xs font-bold tracking-[0.15em] uppercase mb-3">
            What we do
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-[var(--white)] leading-[1.1] tracking-[-0.02em] mb-4">
            Services built around<br />
            your business
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[var(--border)] border border-[var(--border)] rounded-[20px] overflow-hidden mt-12 scroll-fade">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="bg-[var(--black)] p-8 transition-colors duration-300 hover:bg-[var(--surface)] cursor-default"
            >
              <div className="display-font text-xs font-bold text-[var(--muted)] mb-5 tracking-[0.1em]">
                {service.num}
              </div>
              <div className="text-2xl mb-4">{service.emoji}</div>
              <h3 className="text-[1.1rem] font-bold text-[var(--white)] mb-2">
                {service.title}
              </h3>
              <p className="text-[var(--text2)] text-[0.85rem] leading-[1.6]">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[rgba(200,240,65,0.08)] border border-[rgba(200,240,65,0.15)] text-[var(--accent)] px-2.5 py-1 rounded-full text-[0.72rem]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
