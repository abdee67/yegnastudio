'use client'

import { PROJECTS } from '@/data'
import { useScrollFade } from '@/hooks/use-scroll-fade'
import Button from '@/components/ui/Button'

export default function Work() {
  const ref = useScrollFade()

  const bgMap: Record<string, string> = {
    t1: 'linear-gradient(135deg,#1a1a2e,#16213e)',
    t2: 'linear-gradient(135deg,#0d1117,#161b22)',
    t3: 'linear-gradient(135deg,#1a1a1a,#2d2d2d)',
    t4: 'linear-gradient(135deg,#0a0a14,#14142a)',
    t5: 'linear-gradient(135deg,#0f1923,#1a2d3d)',
    t6: 'linear-gradient(135deg,#14100a,#2a1e0f)',
  }

  return (
    <section id="work" className="bg-[var(--surface)] py-24 px-8" ref={ref}>
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 scroll-fade">
          <div>
            <div className="text-[var(--accent)] text-xs font-bold tracking-[0.15em] uppercase mb-3">
              Recent work
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-[var(--white)] leading-[1.1] tracking-[-0.02em] mb-4">
              Projects we're proud of
            </h2>
          </div>
          <Button as="a" href="#contact" variant="outline">
            All projects
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(200,240,65,0.3)] cursor-pointer group scroll-fade"
            >
              <div
                style={{ background: bgMap[project.theme] || '#111' }}
                className="h-[200px] relative flex items-center justify-center text-5xl"
              >
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 text-[var(--text2)] text-[0.7rem] px-2.5 py-1 rounded-full font-medium">
                  {project.type}
                </div>
                {project.emoji}
              </div>
              <div className="bg-[var(--surface)] p-5">
                <h4 className="display-font text-base font-bold text-[var(--white)] mb-1">
                  {project.title}
                </h4>
                <p className="text-[var(--text2)] text-[0.82rem]">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[var(--muted)] text-xs">{project.year}</span>
                  <span className="text-[var(--accent)] text-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    ↗
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
