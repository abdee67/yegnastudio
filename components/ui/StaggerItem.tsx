'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
}

export default function StaggerItem({ children, className = '' }: StaggerItemProps) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      variants={{
        hidden: prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: prefersReduced ? 0 : 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  )
}
