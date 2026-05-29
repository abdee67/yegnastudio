'use client'

import { useEffect, useRef } from 'react'

/**
 * Attaches a MutationObserver-free IntersectionObserver to all
 * `.scroll-fade` elements inside a root container (or the entire document).
 *
 * Usage:
 *   const ref = useScrollFade()
 *   <section ref={ref}>…</section>
 */
export function useScrollFade<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const root = ref.current ?? document

    const targets = (root as HTMLElement).querySelectorAll
      ? (root as HTMLElement).querySelectorAll<HTMLElement>('.scroll-fade')
      : document.querySelectorAll<HTMLElement>('.scroll-fade')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}