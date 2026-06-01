'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { BRAND_NAME } from '@/data/brand'

interface BrandMarkProps {
  href?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

const sizeClasses = {
  sm: {
    wrapper: 'gap-1.5',
    yegna: 'text-[1.35rem]',
    studio: 'text-[0.95rem]',
    dot: 'h-1.5 w-1.5',
  },
  md: {
    wrapper: 'gap-2',
    yegna: 'text-[1.65rem]',
    studio: 'text-[1.08rem]',
    dot: 'h-2 w-2',
  },
  lg: {
    wrapper: 'gap-2.5',
    yegna: 'text-[2rem]',
    studio: 'text-[1.25rem]',
    dot: 'h-2.5 w-2.5',
  },
}

export default function BrandMark({ href = '/', size = 'md', className = '', onClick }: BrandMarkProps) {
  const prefersReduced = useReducedMotion()
  const classes = sizeClasses[size]

  const content = (
    <motion.span
      whileHover={prefersReduced ? undefined : { y: -1 }}
      transition={{ duration: prefersReduced ? 0 : 0.18 }}
      className={[
        'group inline-flex min-h-[44px] items-center rounded-full px-1.5 text-[var(--white)]',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]',
        classes.wrapper,
        className,
      ].join(' ')}
      aria-hidden="true"
    >
      <span className="relative inline-flex items-center">
        <motion.span
          aria-hidden="true"
          className={[
            'brand-ethiopic relative z-10 font-extrabold leading-none tracking-normal text-[var(--white)]',
            'group-hover:text-[var(--accent)]',
            classes.yegna,
          ].join(' ')}
        >
          የኛ
        </motion.span>
        <motion.span
          aria-hidden="true"
          initial={false}
          animate={prefersReduced ? undefined : { opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          className={[
            'absolute -right-2 top-0 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(200,240,65,0.45)]',
            classes.dot,
          ].join(' ')}
        />
      </span>
      <span className="display-font relative inline-flex flex-col leading-none">
        <span className={['font-bold lowercase tracking-normal text-[var(--accent)]', classes.studio].join(' ')}>
          studio
        </span>
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0.35 }}
          whileHover={prefersReduced ? undefined : { scaleX: 1 }}
          className="mt-1 h-px origin-left rounded-full bg-[var(--accent)]"
        />
      </span>
    </motion.span>
  )

  return (
    <Link href={href} onClick={onClick} className="inline-flex" aria-label={BRAND_NAME}>
      {content}
    </Link>
  )
}
