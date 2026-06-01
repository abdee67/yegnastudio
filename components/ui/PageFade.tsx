'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function PageFade({ children }: { children: React.ReactNode }) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.main
      id="main-content"
      initial={{ opacity: prefersReduced ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReduced ? 0 : 0.4 }}
    >
      {children}
    </motion.main>
  )
}
