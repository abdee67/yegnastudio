'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

interface AnimatedNumberProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

export default function AnimatedNumber({
  value,
  suffix = '',
  duration = 1.4,
  className = '',
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReduced = useReducedMotion()
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, {
    stiffness: duration <= 1 ? 120 : 80,
    damping: 22,
    restDelta: 0.5,
  })
  const [display, setDisplay] = useState(prefersReduced ? value : 0)

  useEffect(() => {
    return spring.on('change', (latest) => {
      setDisplay(Math.round(latest))
    })
  }, [spring])

  useEffect(() => {
    if (!prefersReduced && isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, prefersReduced, value])

  return (
    <span ref={ref} className={className}>
      {prefersReduced ? value : display}
      {suffix}
    </span>
  )
}
