'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import Badge from '@/components/ui/Badge'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import StaggerContainer from '@/components/ui/StaggerContainer'
import StaggerItem from '@/components/ui/StaggerItem'
import type { ServiceProject } from '@/types/service'

interface ServiceProjectsProps {
  eyebrow: string
  title: string
  projects: ServiceProject[]
}

export default function ServiceProjects({ eyebrow, title, projects }: ServiceProjectsProps) {
  const prefersReduced = useReducedMotion()

  return (
    <section className="px-5 py-16 md:px-8 md:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <RevealOnScroll className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent)]">{eyebrow}</div>
            <h2 className="mt-3 text-[clamp(1.6rem,4vw,2.8rem)]">{title}</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <Link
              href="/#work"
              className="display-font inline-flex min-h-[44px] items-center rounded-full border border-[var(--border)] px-5 text-sm font-bold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              View all projects
            </Link>
          </RevealOnScroll>
        </div>

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.article
                whileHover={prefersReduced ? undefined : { y: -6, transition: { duration: 0.2 } }}
                className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] will-change-transform"
              >
                <Link href={project.href} className="block min-h-[44px]">
                  <div
                    className="relative flex h-[210px] items-center justify-center text-5xl"
                    style={{ background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})` }}
                  >
                    <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs font-semibold text-[var(--text2)] backdrop-blur">
                      {project.type}
                    </span>
                    <span aria-hidden="true">{project.emoji}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--text2)]">{project.description}</p>
                    <div className="mt-5 flex items-center justify-between gap-4">
                      <time dateTime={project.year} className="text-xs text-[var(--muted)]">
                        {project.year}
                      </time>
                      <div className="flex flex-wrap justify-end gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} className="text-[0.68rem]">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
