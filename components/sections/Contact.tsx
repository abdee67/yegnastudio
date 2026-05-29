'use client'

import { CONTACT_CHANNELS, SERVICE_OPTIONS } from '@/data'
import { useScrollFade } from '@/hooks/use-scroll-fade'

export default function Contact() {
  const ref = useScrollFade()

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    alert("Thanks! We'll get back to you within 24 hours.")
  }

  return (
    <section id="contact" className="bg-[var(--surface)] py-24 px-8" ref={ref}>
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="scroll-fade">
            <div className="text-[var(--accent)] text-xs font-bold tracking-[0.15em] uppercase mb-3">
              Get in touch
            </div>
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-[var(--white)] mb-4">
              Ready to build something great?
            </h2>
            <p className="text-[var(--text2)] mb-8 leading-[1.7]">
              Tell us about your project and we'll get back to you within 24 hours with a free consultation.
            </p>
            <div className="flex flex-col gap-3">
              {CONTACT_CHANNELS.map((channel, i) => (
                <div key={i} className="flex items-center gap-3 text-[var(--text2)] text-[0.9rem]">
                  <div className="w-9 h-9 bg-[var(--black)] border border-[var(--border)] rounded-xl flex items-center justify-center text-[0.9rem]">
                    {channel.icon}
                  </div>
                  <span>{channel.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 scroll-fade">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.8rem] font-semibold text-[var(--text2)] tracking-[0.05em] uppercase">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-[var(--black)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text)] text-[0.9rem] outline-none transition-colors duration-200 focus:border-[var(--accent)]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.8rem] font-semibold text-[var(--text2)] tracking-[0.05em] uppercase">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+251 9..."
                  className="bg-[var(--black)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text)] text-[0.9rem] outline-none transition-colors duration-200 focus:border-[var(--accent)]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[0.8rem] font-semibold text-[var(--text2)] tracking-[0.05em] uppercase">
                Service needed
              </label>
              <select
                className="bg-[var(--black)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text)] text-[0.9rem] outline-none transition-colors duration-200 focus:border-[var(--accent)] appearance-none"
              >
                <option value="">Select a service</option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-[var(--black)]">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[0.8rem] font-semibold text-[var(--text2)] tracking-[0.05em] uppercase">
                Tell us about your project
              </label>
              <textarea
                placeholder="Describe what you want to build..."
                className="bg-[var(--black)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text)] text-[0.9rem] outline-none transition-colors duration-200 focus:border-[var(--accent)] resize-y min-h-[100px]"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="bg-[var(--accent)] text-[var(--black)] border-none px-8 py-3.5 rounded-full display-font font-bold text-[0.9rem] cursor-pointer transition-all duration-200 self-start hover:bg-[var(--accent-dark)] hover:-translate-y-0.5"
            >
              Send message →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
