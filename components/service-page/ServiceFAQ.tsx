'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import type { ServiceFAQData } from '@/types/service'

export default function ServiceFAQ({ eyebrow, title, faqs }: ServiceFAQData) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenIndex(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section className="px-5 py-16 md:px-8 md:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl">
        <RevealOnScroll className="text-center">
          <div className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent)]">{eyebrow}</div>
          <h2 className="mt-3 text-[clamp(1.6rem,4vw,2.8rem)]">{title}</h2>
        </RevealOnScroll>

        <div className="mt-10 border-t border-[var(--border)]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const questionId = `faq-question-${index}`
            const answerId = `faq-answer-${index}`

            return (
              <div key={faq.question} className="border-b border-[var(--border)]">
                <button
                  type="button"
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex min-h-[44px] w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="display-font text-base font-bold text-[var(--white)]">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: prefersReduced ? 0 : 0.18 }}
                    className="display-font text-2xl leading-none text-[var(--accent)]"
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: prefersReduced ? 0 : 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-7 text-[var(--text2)]">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
