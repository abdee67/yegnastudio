export type PricingPlanVariant = 'outline' | 'solid'

export interface PricingPlan {
  name: string
  price: string
  priceMonthly?: string
  period: string
  description: string
  features: string[]
  notIncluded?: string[]
  cta: string
  variant: PricingPlanVariant
  featured?: boolean
  deliveryTime?: string
  revisions?: string
  support?: string
}

export interface PricingComparisonFeature {
  category: string
  name: string
  starter: boolean | string
  growth: boolean | string
  enterprise: boolean | string
}

export interface PricingMeta {
  title: string
  description: string
  keywords: string[]
  ogTitle?: string
  ogDescription?: string
}

export interface PricingHeroData {
  badge: string
  headline: string
  subheadline: string
  serviceHref: string
}

export interface PricingCardsData {
  eyebrow: string
  title: string
  billingToggle?: boolean
  plans: PricingPlan[]
  note?: string
}

export interface PricingComparisonData {
  title: string
  subtitle?: string
  features: PricingComparisonFeature[]
}

export interface PricingProject {
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

export interface PricingPageData {
  slug: string
  serviceName: string
  meta: PricingMeta
  hero: PricingHeroData
  cards: PricingCardsData
  comparison: PricingComparisonData
  projects: PricingProject[]
  faq: {
    eyebrow: string
    title: string
    faqs: Array<{ question: string; answer: string }>
  }
  cta: {
    headline: string
    subtext: string
    primaryCTA: { label: string; href: string }
    secondaryCTA: { label: string; href: string }
    note?: string
  }
}
