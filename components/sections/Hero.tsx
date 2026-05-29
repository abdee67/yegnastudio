import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { HERO_STATS } from '@/data'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="hero-glow" aria-hidden="true" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left — headline */}
          <div>
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(200,240,65,0.1)] border border-[rgba(200,240,65,0.25)] text-[var(--accent)] px-4 py-1.5 rounded-full text-xs font-bold mb-7 display-font">
              <span className="pulse-dot" aria-hidden="true" />
              Available for projects
            </div>

            <h1 className="text-[clamp(2.5rem,5vw,4.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[var(--white)] mb-6 display-font">
              We build digital<br />
              <span className="text-[var(--accent)]">products that scale.</span>
            </h1>

            <p className="text-[var(--text2)] text-lg leading-[1.75] mb-8 max-w-[480px]">
              React, Next.js, Flutter & more — we turn your ideas into fast,
              beautiful, and conversion-ready apps. Based in Addis Ababa,
              working globally.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button as="a" href="#work" variant="solid" size="lg">
                See our work
              </Button>
              <Button as="a" href="#contact" variant="outline" size="lg">
                Get a quote
              </Button>
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {HERO_STATS.map((stat, i) => (
              <div
                key={i}
                className={[
                  'bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6',
                  'hover:border-[rgba(200,240,65,0.3)] transition-colors duration-300',
                  stat.wide ? 'col-span-2 bg-gradient-to-br from-[rgba(200,240,65,0.06)] to-transparent' : '',
                ].join(' ')}
              >
                <div className="display-font text-[2.6rem] font-extrabold text-[var(--accent)] leading-none">
                  {stat.num}
                </div>
                <p className="text-[var(--text2)] text-sm mt-1.5 leading-snug">
                  {stat.label}
                </p>

                {stat.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {stat.tags.map((tag) => (
                      <Badge key={tag} variant="neutral" className="text-[0.72rem]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}