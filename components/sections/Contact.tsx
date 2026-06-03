'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { CONTACT_CHANNELS, SERVICE_OPTIONS } from '@/data'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

type ContactFormState = {
  name: string
  email: string
  phone: string
  service: string
  message: string
  website: string
}

const initialFormState: ContactFormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  website: '',
}

const inputClass =
  'min-h-[48px] w-full rounded-2xl border border-[var(--border)] bg-[rgba(10,10,10,0.88)] px-4 py-3 text-[0.95rem] text-[var(--text)] outline-none transition-colors duration-200 placeholder:text-[var(--muted)] focus:border-[var(--accent)]'

const labelClass =
  'text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[var(--text2)]'

export default function Contact() {
  const [form, setForm] = useState<ContactFormState>(initialFormState)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))

    if (status === 'success' || status === 'error') {
      setStatus('idle')
      setFeedback('')
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')
    setFeedback('')

    const payload: ContactFormState = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      service: form.service.trim(),
      message: form.message.trim(),
      website: form.website.trim(),
    }

    if (!payload.name || !payload.message || (!payload.email && !payload.phone)) {
      setStatus('error')
      setFeedback('Please add your name, project message, and either phone or email.')
      return
    }

    try {
      const response = await fetch('/api/send_telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = (await response.json().catch(() => null)) as { error?: string; message?: string } | null

      if (!response.ok) {
        throw new Error(result?.error || 'Could not send your message right now.')
      }

      setForm(initialFormState)
      setStatus('success')
      setFeedback("Thanks! We'll get back to you within 24 hours.")
    } catch (error) {
      setStatus('error')
      setFeedback(error instanceof Error ? error.message : 'Could not send your message right now.')
    }
  }

  const isSending = status === 'sending'

  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--surface)] px-5 py-20 sm:px-6 md:px-8 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle,var(--border)_1px,transparent_1px)] [background-size:32px_32px]"
        aria-hidden="true"
      />
      <div className="hero-glow right-auto left-[-280px] top-[-260px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1120px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:items-start">
          <RevealOnScroll className="lg:pt-6">
            <>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent)]">
                Get in touch
              </div>
              <h2 className="mb-5 max-w-[560px] text-[clamp(1.9rem,5vw,3rem)] font-extrabold leading-[1.08] text-[var(--white)]">
                Let&apos;s turn your idea into a clear project brief.
              </h2>
              <p className="mb-7 max-w-[560px] text-[var(--text2)] leading-[1.75]">
                Share what you want to build, improve, or launch. We will review it and reply with the best next step, timeline, and budget direction.
              </p>

              <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {CONTACT_CHANNELS.map((channel) => (
                  <div
                    key={channel.label}
                    className="flex min-h-[52px] items-center gap-3 rounded-2xl border border-[var(--border)] bg-[rgba(10,10,10,0.35)] px-4 text-[0.92rem] text-[var(--text2)]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--black)] text-[0.95rem]">
                      {channel.icon}
                    </div>
                    <span className="min-w-0 break-words">{channel.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
                <span className="rounded-full border border-[rgba(200,240,65,0.25)] bg-[rgba(200,240,65,0.08)] px-4 py-2 text-[var(--accent)]">
                  Free consultation
                </span>
                <span className="rounded-full border border-[var(--border)] bg-[rgba(10,10,10,0.35)] px-4 py-2">
                  Replies within 24 hours
                </span>
              </div>
            </>
          </RevealOnScroll>

          <RevealOnScroll delay={0.12} direction="right">
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[rgba(10,10,10,0.74)] p-5 shadow-2xl shadow-black/30 sm:p-6 md:p-8"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-70" />

              <div className="mb-6">
                <div className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent)]">
                  Project form
                </div>
                <h3 className="text-[1.35rem] font-bold text-[var(--white)]">
                  Send us the essentials
                </h3>
                <p id="contact-form-help" className="mt-2 text-sm leading-6 text-[var(--text2)]">
                  Phone or email is enough, but both helps us respond faster.
                </p>
              </div>

              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    maxLength={120}
                    autoComplete="name"
                    aria-describedby="contact-form-help"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-phone" className={labelClass}>
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+251 9..."
                    maxLength={80}
                    autoComplete="tel"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    maxLength={180}
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-service" className={labelClass}>
                    Service needed
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="">Select a service</option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[var(--black)]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <label htmlFor="contact-message" className={labelClass}>
                  Project details
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us the goal, deadline, budget range, or links we should review..."
                  required
                  maxLength={1800}
                  className={`${inputClass} min-h-[148px] resize-y leading-7`}
                />
              </div>

              {feedback && (
                <div
                  role={status === 'error' ? 'alert' : 'status'}
                  aria-live="polite"
                  className={[
                    'mt-5 rounded-2xl border px-4 py-3 text-sm leading-6',
                    status === 'success'
                      ? 'border-[rgba(200,240,65,0.35)] bg-[rgba(200,240,65,0.08)] text-[var(--accent)]'
                      : 'border-red-400/30 bg-red-950/20 text-red-200',
                  ].join(' ')}
                >
                  {feedback}
                </div>
              )}

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[340px] text-xs leading-5 text-[var(--muted)]">
                  Your message goes securely to our team inbox on Telegram. We never expose bot credentials in the browser.
                </p>
                <button
                  type="submit"
                  disabled={isSending}
                  className="display-font inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-full border-none bg-[var(--accent)] px-8 py-3.5 text-[0.92rem] font-bold text-[var(--black)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent-dark)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {isSending ? 'Sending...' : 'Send message →'}
                </button>
              </div>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
