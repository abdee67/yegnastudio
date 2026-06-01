import type { PricingPlan } from './pricing'

export interface ServiceMeta {
  title: string
  description: string
  keywords: string[]
  ogTitle?: string
  ogDescription?: string
}

export interface ServiceHeroData {
  badge: string
  headline: string
  accentPhrase: string
  subheadline: string
  primaryCTA: { label: string; href: string }
  secondaryCTA: { label: string; href: string }
  stats: Array<{ num: string; label: string }>
}

export interface ServiceOverviewData {
  eyebrow: string
  title: string
  description: string[]
  highlights: Array<{ icon: string; title: string; description: string }>
}

export interface HowWeDifferData {
  eyebrow: string
  title: string
  subtitle: string
  differentiators: Array<{ num: string; title: string; description: string }>
}

export interface ServiceProcessData {
  eyebrow: string
  title: string
  steps: Array<{
    num: string
    title: string
    description: string
    deliverable?: string
  }>
}

export interface ServiceTechStackData {
  eyebrow: string
  title: string
  tools: Array<{
    name: string
    category: string
    description: string
    proficiency?: 'Expert' | 'Advanced' | 'Proficient'
  }>
}

export interface ServiceProject {
  emoji: string
  type: string
  title: string
  description: string
  year: string
  tags: string[]
  href: string
  gradientFrom: string
  gradientTo: string
}

export interface ServicePricingData {
  eyebrow: string
  title: string
  subtitle: string
  plans: PricingPlan[]
  pricingPageHref: string
  note?: string
}

export interface ServiceFAQData {
  eyebrow: string
  title: string
  faqs: Array<{ question: string; answer: string }>
}

export interface ServiceCTAData {
  headline: string
  subtext: string
  primaryCTA: { label: string; href: string }
  secondaryCTA: { label: string; href: string }
  note?: string
}

export interface ServicePageData {
  slug: string
  name: string
  meta: ServiceMeta
  hero: ServiceHeroData
  overview: ServiceOverviewData
  howWeDiffer: HowWeDifferData
  process: ServiceProcessData
  techStack: ServiceTechStackData
  projects: ServiceProject[]
  pricing: ServicePricingData
  faq: ServiceFAQData
  cta: ServiceCTAData
}
