'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { TICKER_ITEMS } from '@/data'

export default function Ticker() {
  const prefersReduced = useReducedMotion()

  return (
    <div className="overflow-hidden bg-[var(--accent)] py-2.5 mb-0">
      <motion.div
        animate={prefersReduced ? undefined : { x: ['0%', '-50%'] }}
        transition={{ duration: prefersReduced ? 0 : 22, ease: 'linear', repeat: Infinity }}
        className="flex gap-8 whitespace-nowrap will-change-transform"
      >
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span
            key={i}
            className="display-font text-[0.8rem] font-bold text-[var(--black)] shrink-0 after:content-['✦'] after:ml-6 after:-mr-1"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
