'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/data'
import Button from '@/components/ui/Button'
import BrandMark from '@/components/ui/BrandMark'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route-change / hash click
  const handleNavClick = () => setMobileOpen(false)

  return (
    <>
      <nav
        className={[
          'fixed top-0 left-0 right-0 z-50 px-6 py-5',
          'flex items-center justify-between',
          'transition-all duration-300',
          scrolled
            ? 'bg-[rgba(10,10,10,0.96)] border-b border-[var(--border)] backdrop-blur-md'
            : 'border-b border-transparent',
        ].join(' ')}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <BrandMark size="md" />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[var(--text2)] text-sm font-medium hover:text-[var(--accent)] transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button as="a" href="#contact" variant="solid" size="sm">
            Start a project →
          </Button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span
            className={[
              'block w-6 h-[2px] bg-[var(--text)] rounded transition-all duration-300',
              mobileOpen ? 'translate-y-[7px] rotate-45' : '',
            ].join(' ')}
          />
          <span
            className={[
              'block w-6 h-[2px] bg-[var(--text)] rounded transition-all duration-300',
              mobileOpen ? 'opacity-0' : '',
            ].join(' ')}
          />
          <span
            className={[
              'block w-6 h-[2px] bg-[var(--text)] rounded transition-all duration-300',
              mobileOpen ? '-translate-y-[7px] -rotate-45' : '',
            ].join(' ')}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={[
          'fixed inset-0 z-40 md:hidden transition-all duration-300',
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none',
        ].join(' ')}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className={[
            'absolute inset-0 bg-black transition-opacity duration-300',
            mobileOpen ? 'opacity-60' : 'opacity-0',
          ].join(' ')}
          onClick={handleNavClick}
        />

        {/* Drawer */}
        <div
          className={[
            'absolute top-0 right-0 bottom-0 w-72 bg-[var(--surface)]',
            'border-l border-[var(--border)] p-8 flex flex-col gap-2',
            'transition-transform duration-300',
            mobileOpen ? 'translate-x-0' : 'translate-x-full',
          ].join(' ')}
        >
          <BrandMark size="sm" />

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="py-3 text-[var(--text2)] font-medium border-b border-[var(--border)] hover:text-[var(--accent)] transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-8">
            <Button as="a" href="#contact" variant="solid" size="md" className="w-full justify-center">
              Start a project →
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
