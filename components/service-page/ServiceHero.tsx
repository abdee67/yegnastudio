'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import AnimatedNumber from '@/components/ui/AnimatedNumber'
import type { ServiceHeroData } from '@/types/service'

function splitStat(num: string) {
  const match = num.match(/^(\d+)(.*)$/)

  if (!match) {
    return { value: 0, suffix: num }
  }

  return { value: Number(match[1]), suffix: match[2] }
}

function renderHeadline(headline: string, accentPhrase: string) {
  return headline.split('\n').map((line, lineIndex) => {
    const parts = line.split(accentPhrase)

    return (
      <span key={`${line}-${lineIndex}`}>
        {parts.map((part, index) => (
          <span key={`${part}-${index}`}>
            {part}
            {index < parts.length - 1 && <span className="text-[var(--accent)]">{accentPhrase}</span>}
          </span>
        ))}
        {lineIndex < headline.split('\n').length - 1 && <br />}
      </span>
    )
  })
}

export default function ServiceHero({
  badge,
  headline,
  accentPhrase,
  subheadline,
  primaryCTA,
  secondaryCTA,
  stats,
}: ServiceHeroData) {
  const prefersReduced = useReducedMotion()
  const transition = { duration: prefersReduced ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] as const }

  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-28 lg:px-8">
      <div
        className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle,var(--border)_1px,transparent_1px)] [background-size:32px_32px]"
        aria-hidden="true"
      />
      <div
        className="absolute left-[-20%] top-[12%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(200,240,65,0.06)_0%,transparent_68%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_auto]">
        <header>
          <motion.div
            initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0 }}
            className="mb-6 inline-flex min-h-[44px] items-center rounded-full border border-[rgba(200,240,65,0.25)] bg-[rgba(200,240,65,0.1)] px-4 text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent)]"
          >
            {badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: prefersReduced ? 0 : 0.15 }}
            className="display-font max-w-4xl text-[clamp(2rem,8vw,4.5rem)] font-extrabold leading-[1.02] text-[var(--white)]"
          >
            {renderHeadline(headline, accentPhrase)}
          </motion.h1>

          <motion.p
            initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: prefersReduced ? 0 : 0.3 }}
            className="mt-6 max-w-2xl text-base leading-8 text-[var(--text2)] sm:text-lg"
          >
            {subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: prefersReduced ? 0 : 0.45 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href={primaryCTA.href}
              className="display-font inline-flex min-h-[44px] items-center justify-center rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-bold text-[var(--black)] hover:bg-[var(--accent-dark)]"
            >
              {primaryCTA.label}
            </Link>
            <Link
              href={secondaryCTA.href}
              className="display-font inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--border)] px-7 py-3 text-sm font-bold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {secondaryCTA.label}
            </Link>
          </motion.div>
        </header>

        <motion.div
          initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: prefersReduced ? 0 : 0.55 }}
          className="grid w-full grid-cols-2 gap-4 lg:w-[360px]"
        >
          {stats.map((stat, index) => {
            const parsed = splitStat(stat.num)

            return (
              <div
                key={stat.label}
                className={[
                  'rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6',
                  'hover:border-[rgba(200,240,65,0.35)]',
                  index === 0 ? 'col-span-2 bg-gradient-to-br from-[rgba(200,240,65,0.07)] to-[var(--surface)]' : '',
                ].join(' ')}
              >
                <div className="display-font text-[2.5rem] font-extrabold leading-none text-[var(--accent)]">
                  <AnimatedNumber value={parsed.value} suffix={parsed.suffix} />
                </div>
                <p className="mt-2 text-sm leading-snug text-[var(--text2)]">{stat.label}</p>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
