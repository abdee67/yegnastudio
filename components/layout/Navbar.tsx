'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { NAV_LINKS, PRICING_NAV, SERVICES_NAV } from '@/data'
import Button from '@/components/ui/Button'
import BrandMark from '@/components/ui/BrandMark'

type DropdownKey = 'services' | 'pricing'
type DropdownItem = {
  label: string
  href: string
  icon: string
  desc: string
}

interface DesktopDropdownProps {
  label: string
  dropdownKey: DropdownKey
  items: DropdownItem[]
  openDropdown: DropdownKey | null
  setOpenDropdown: (value: DropdownKey | null) => void
  pathname: string
}

function DesktopDropdown({
  label,
  dropdownKey,
  items,
  openDropdown,
  setOpenDropdown,
  pathname,
}: DesktopDropdownProps) {
  const prefersReduced = useReducedMotion()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([])
  const isOpen = openDropdown === dropdownKey
  const isActive = pathname.startsWith(`/${dropdownKey}`)

  const close = (focusTrigger = false) => {
    setOpenDropdown(null)
    if (focusTrigger) {
      triggerRef.current?.focus()
    }
  }

  const focusItem = (index: number) => {
    itemRefs.current[index]?.focus()
  }

  const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setOpenDropdown(dropdownKey)
      window.setTimeout(() => focusItem(0), 0)
    }

    if (event.key === 'Escape') {
      close()
    }
  }

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      close(true)
      return
    }

    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') {
      return
    }

    event.preventDefault()
    const currentIndex = itemRefs.current.findIndex((item) => item === document.activeElement)
    const direction = event.key === 'ArrowDown' ? 1 : -1
    const nextIndex = currentIndex === -1 ? 0 : (currentIndex + direction + items.length) % items.length
    focusItem(nextIndex)
  }

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpenDropdown(dropdownKey)}
      onMouseLeave={() => close()}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={`${dropdownKey}-menu`}
        onClick={() => setOpenDropdown(isOpen ? null : dropdownKey)}
        onKeyDown={handleTriggerKeyDown}
        className={[
          'min-h-[44px] bg-transparent text-sm font-medium',
          isActive ? 'text-[var(--accent)]' : 'text-[var(--text2)] hover:text-[var(--accent)]',
        ].join(' ')}
      >
        {label}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`${dropdownKey}-menu`}
            role="menu"
            initial={prefersReduced ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReduced ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: prefersReduced ? 0 : 0.18, ease: 'easeOut' }}
            onKeyDown={handleMenuKeyDown}
            className="absolute left-1/2 top-full z-50 mt-2 min-w-[260px] -translate-x-1/2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-2xl shadow-black/60 [transform-origin:top_center]"
          >
            {items.map((item, index) => {
              const itemActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  ref={(node) => {
                    itemRefs.current[index] = node
                  }}
                  href={item.href}
                  role="menuitem"
                  onClick={() => close()}
                  className="flex min-h-[44px] items-start gap-3 rounded-xl p-3 hover:bg-[var(--surface2)]"
                >
                  <span
                    className={[
                      'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface2)] text-lg',
                      itemActive ? 'bg-[rgba(200,240,65,0.1)]' : '',
                    ].join(' ')}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <span>
                    <span
                      className={[
                        'display-font block text-sm font-bold',
                        itemActive ? 'text-[var(--accent)]' : 'text-[var(--white)]',
                      ].join(' ')}
                    >
                      {item.label}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-[var(--muted)]">{item.desc}</span>
                  </span>
                </Link>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

interface MobileAccordionProps {
  label: string
  sectionKey: DropdownKey
  items: DropdownItem[]
  openSection: DropdownKey | null
  setOpenSection: (value: DropdownKey | null) => void
  closeDrawer: () => void
  pathname: string
}

function MobileAccordion({
  label,
  sectionKey,
  items,
  openSection,
  setOpenSection,
  closeDrawer,
  pathname,
}: MobileAccordionProps) {
  const prefersReduced = useReducedMotion()
  const isOpen = openSection === sectionKey

  return (
    <>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`mobile-${sectionKey}`}
        onClick={() => setOpenSection(isOpen ? null : sectionKey)}
        className="display-font flex min-h-[44px] w-full items-center justify-between border-b border-[var(--border)] py-3 text-left font-bold text-[var(--white)]"
      >
        {label}
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: prefersReduced ? 0 : 0.18 }} aria-hidden="true">
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`mobile-${sectionKey}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: prefersReduced ? 0 : 0.22, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 py-3">
              {items.map((item) => {
                const active = pathname === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeDrawer}
                    className="flex min-h-[44px] items-start gap-3 rounded-xl px-3 py-2 hover:bg-[var(--surface2)]"
                  >
                    <span
                      className={[
                        'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface2)]',
                        active ? 'bg-[rgba(200,240,65,0.1)]' : '',
                      ].join(' ')}
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>
                    <span>
                      <span className={active ? 'display-font block text-sm font-bold text-[var(--accent)]' : 'display-font block text-sm font-bold text-[var(--white)]'}>
                        {item.label}
                      </span>
                      <span className="block text-xs leading-5 text-[var(--muted)]">{item.desc}</span>
                    </span>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const prefersReduced = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null)
  const [openSection, setOpenSection] = useState<DropdownKey | null>(null)
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null)
        setMobileOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (!mobileOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    drawerRef.current?.focus()

    const handleFocusTrap = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') {
        return
      }

      const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )

      if (!focusable || focusable.length === 0) {
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleFocusTrap)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleFocusTrap)
    }
  }, [mobileOpen])

  const closeDrawer = () => {
    setMobileOpen(false)
    setOpenSection(null)
  }

  const desktopLinks = NAV_LINKS.filter((link) => link.label !== 'Services' && link.label !== 'Pricing')

  return (
    <>
      <nav
        className={[
          'fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-5',
          scrolled
            ? 'border-b border-[var(--border)] bg-[rgba(10,10,10,0.96)] backdrop-blur-md'
            : 'border-b border-transparent',
        ].join(' ')}
        aria-label="Main navigation"
      >
        <BrandMark size="md" />

        <ul className="hidden list-none items-center gap-8 md:flex">
          <DesktopDropdown
            label="Services"
            dropdownKey="services"
            items={SERVICES_NAV}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            pathname={pathname}
          />
          {desktopLinks
            .filter((link) => link.label !== 'Contact')
            .map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-[44px] items-center text-sm font-medium text-[var(--text2)] hover:text-[var(--accent)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          <DesktopDropdown
            label="Pricing"
            dropdownKey="pricing"
            items={PRICING_NAV}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            pathname={pathname}
          />
          <li>
            <Link href="/#contact" className="inline-flex min-h-[44px] items-center text-sm font-medium text-[var(--text2)] hover:text-[var(--accent)]">
              Contact
            </Link>
          </li>
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <Button as="a" href="/#contact" variant="solid" size="sm">
            Start a project
          </Button>
        </div>

        <button
          type="button"
          className="flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-[5px] bg-transparent md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <span className="block h-[2px] w-6 rounded bg-[var(--text)]" />
          <span className="block h-[2px] w-6 rounded bg-[var(--text)]" />
          <span className="block h-[2px] w-6 rounded bg-[var(--text)]" />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReduced ? 0 : 0.18 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              onClick={closeDrawer}
            />
            <motion.div
              id="mobile-navigation"
              ref={drawerRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={prefersReduced ? { x: 0 } : { x: '100%' }}
              animate={{ x: 0 }}
              exit={prefersReduced ? { x: 0 } : { x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed bottom-0 right-0 top-0 z-50 flex w-80 max-w-[88vw] flex-col border-l border-[var(--border)] bg-[var(--surface)] p-6 md:hidden"
            >
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-5">
                <BrandMark size="sm" onClick={closeDrawer} />
                <button
                  type="button"
                  onClick={closeDrawer}
                  aria-label="Close menu"
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[var(--border)] text-xl text-[var(--text)]"
                >
                  <span className="rotate-45" aria-hidden="true">
                    +
                  </span>
                </button>
              </div>

              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: prefersReduced ? 0 : 0.06,
                    },
                  },
                }}
                className="mt-5 flex flex-1 flex-col gap-1 overflow-y-auto list-none"
              >
                <motion.li variants={{ hidden: { opacity: 0, x: 16 }, visible: { opacity: 1, x: 0 } }}>
                  <MobileAccordion
                    label="Services"
                    sectionKey="services"
                    items={SERVICES_NAV}
                    openSection={openSection}
                    setOpenSection={setOpenSection}
                    closeDrawer={closeDrawer}
                    pathname={pathname}
                  />
                </motion.li>
                {desktopLinks
                  .filter((link) => link.label !== 'Contact')
                  .map((link) => (
                    <motion.li key={link.href} variants={{ hidden: { opacity: 0, x: 16 }, visible: { opacity: 1, x: 0 } }}>
                      <Link
                        href={link.href}
                        onClick={closeDrawer}
                        className="display-font flex min-h-[44px] items-center border-b border-[var(--border)] py-3 font-bold text-[var(--white)]"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                <motion.li variants={{ hidden: { opacity: 0, x: 16 }, visible: { opacity: 1, x: 0 } }}>
                  <MobileAccordion
                    label="Pricing"
                    sectionKey="pricing"
                    items={PRICING_NAV}
                    openSection={openSection}
                    setOpenSection={setOpenSection}
                    closeDrawer={closeDrawer}
                    pathname={pathname}
                  />
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: 16 }, visible: { opacity: 1, x: 0 } }}>
                  <Link
                    href="/#contact"
                    onClick={closeDrawer}
                    className="display-font flex min-h-[44px] items-center border-b border-[var(--border)] py-3 font-bold text-[var(--white)]"
                  >
                    Contact
                  </Link>
                </motion.li>
              </motion.ul>

              <div className="border-t border-[var(--border)] pt-5">
                <Link
                  href="/#contact"
                  onClick={closeDrawer}
                  className="display-font inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-bold text-[var(--black)] hover:bg-[var(--accent-dark)]"
                >
                  Start a project
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
