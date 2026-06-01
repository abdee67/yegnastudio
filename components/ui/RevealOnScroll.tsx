'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

interface RevealOnScrollProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
  once?: boolean
}

const offsetByDirection = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: -24, y: 0 },
  right: { x: 24, y: 0 },
}

export default function RevealOnScroll({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-80px' })
  const prefersReduced = useReducedMotion()
  const offset = offsetByDirection[direction]

  return (
    <motion.div
      ref={ref}
      initial={prefersReduced ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: offset.x, y: offset.y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{
        duration: prefersReduced ? 0 : 0.6,
        delay: prefersReduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  )
}
