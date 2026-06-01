'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
}

export default function StaggerContainer({ children, className = '' }: StaggerContainerProps) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: prefersReduced ? 0 : 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
