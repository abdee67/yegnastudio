'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { PROJECTS } from '@/data'
import Button from '@/components/ui/Button'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import StaggerContainer from '@/components/ui/StaggerContainer'
import StaggerItem from '@/components/ui/StaggerItem'

export default function Work() {
  const prefersReduced = useReducedMotion()

  const bgMap: Record<string, string> = {
    t1: 'linear-gradient(135deg,#1a1a2e,#16213e)',
    t2: 'linear-gradient(135deg,#0d1117,#161b22)',
    t3: 'linear-gradient(135deg,#1a1a1a,#2d2d2d)',
    t4: 'linear-gradient(135deg,#0a0a14,#14142a)',
    t5: 'linear-gradient(135deg,#0f1923,#1a2d3d)',
    t6: 'linear-gradient(135deg,#14100a,#2a1e0f)',
  }

  return (
    <section id="work" className="bg-[var(--surface)] py-24 px-8">
      <div className="max-w-[1100px] mx-auto">
        <RevealOnScroll className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-[var(--accent)] text-xs font-bold tracking-[0.15em] uppercase mb-3">
              Recent work
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-[var(--white)] leading-[1.1] tracking-[-0.02em] mb-4">
              Projects we&apos;re proud of
            </h2>
          </div>
          <Button as="a" href="#contact" variant="outline">
            All projects
          </Button>
        </RevealOnScroll>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <StaggerItem key={project.title}>
              <motion.a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                whileHover={prefersReduced ? undefined : { y: -6, transition: { duration: 0.2 } }}
                className="group block overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[rgba(200,240,65,0.35)] will-change-transform"
                aria-label={`View ${project.title} live site`}
              >
                <div
                  style={{ background: bgMap[project.theme] || 'var(--surface2)' }}
                  className="relative flex aspect-[16/10] items-center justify-center overflow-hidden text-5xl"
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.imageAlt || `${project.title} website screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <span aria-hidden="true">{project.emoji}</span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />
                  <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[0.7rem] font-medium text-[var(--text2)] backdrop-blur-md">
                    {project.type}
                  </div>
                  <span className="absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-lg text-[var(--accent)] opacity-0 backdrop-blur-md transition group-hover:opacity-100">
                    ↗
                  </span>
                </div>
                <div className="bg-[var(--surface)] p-5">
                  <h4 className="display-font text-base font-bold text-[var(--white)] mb-1">
                    {project.title}
                  </h4>
                  <p className="min-h-[3.4rem] text-[var(--text2)] text-[0.82rem] leading-6">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[0.68rem] font-semibold text-[var(--muted)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <time dateTime={project.year} className="text-[var(--muted)] text-xs">
                      {project.year}
                    </time>
                    <span className="text-[var(--accent)] text-sm font-semibold opacity-80 group-hover:opacity-100">
                      Live site
                    </span>
                  </div>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
