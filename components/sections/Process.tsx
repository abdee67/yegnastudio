'use client'

import { PROCESS_STEPS, TESTIMONIAL } from '@/data'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import StaggerContainer from '@/components/ui/StaggerContainer'
import StaggerItem from '@/components/ui/StaggerItem'

export default function Process() {
  return (
    <section id="process" className="py-24 px-8">
      <div className="max-w-[1100px] mx-auto">
        <RevealOnScroll>
          <div className="text-[var(--accent)] text-xs font-bold tracking-[0.15em] uppercase mb-3">
            How we work
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-[var(--white)] leading-[1.1] tracking-[-0.02em] mb-4">
            A clear process,<br />
            no confusion
          </h2>
        </RevealOnScroll>

        <StaggerContainer className="mt-12 flex flex-col">
          {PROCESS_STEPS.map((step) => (
            <StaggerItem key={step.title}>
              <div className="grid grid-cols-[50px_1fr] md:grid-cols-[80px_1fr] gap-4 md:gap-8 py-8 border-b border-[var(--border)] last:border-b-0 items-start group">
                <div className="display-font text-[2rem] md:text-[3rem] font-extrabold text-[var(--border)] leading-none group-hover:text-[var(--accent)]">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-[1.15rem] font-bold text-[var(--white)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[var(--text2)] text-[0.9rem] leading-[1.7]">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <RevealOnScroll className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 md:p-12 mt-12 relative overflow-hidden">
          <>
            <div
              className="absolute -top-5 right-8 display-font text-[12rem] font-extrabold leading-none text-[rgba(200,240,65,0.05)] pointer-events-none"
              aria-hidden="true"
            >
              &quot;
            </div>
            <p className="text-[1.2rem] text-[var(--white)] leading-[1.7] italic font-light max-w-[700px] mb-6">
              {TESTIMONIAL.quote}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[rgba(200,240,65,0.15)] border border-[rgba(200,240,65,0.3)] flex items-center justify-center display-font font-bold text-[0.85rem] text-[var(--accent)]">
                {TESTIMONIAL.initials}
              </div>
              <div>
                <div className="display-font font-bold text-[0.95rem] text-[var(--white)]">
                  {TESTIMONIAL.name}
                </div>
                <div className="text-[var(--muted)] text-[0.8rem]">
                  {TESTIMONIAL.role}
                </div>
              </div>
            </div>
          </>
        </RevealOnScroll>
      </div>
    </section>
  )
}
