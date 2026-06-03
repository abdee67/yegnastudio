import type { PricingPageData } from '@/types/pricing'
import { businessProfilePricing } from './business-profile'
import { mobileAppsPricing } from './mobile-apps'
import { socialMediaPricing } from './social-media'
import { uiUxDesignPricing } from './ui-ux-design'
import { webDevelopmentPricing } from './web-development'

export const PRICING_SLUGS = [
  'web-development',
  'mobile-apps',
  'business-profile',
  'ui-ux-design',
  'social-media',
] as const

export type PricingSlug = (typeof PRICING_SLUGS)[number]

export const PRICING_DATA_MAP: Record<PricingSlug, PricingPageData> = {
  'web-development': webDevelopmentPricing,
  'mobile-apps': mobileAppsPricing,
  'business-profile': businessProfilePricing,
  'ui-ux-design': uiUxDesignPricing,
  'social-media': socialMediaPricing,
}

export const PRICING_DATA = PRICING_SLUGS.map((slug) => PRICING_DATA_MAP[slug])

export function getPricingData(slug: string): PricingPageData | undefined {
  if (PRICING_SLUGS.includes(slug as PricingSlug)) {
    return PRICING_DATA_MAP[slug as PricingSlug]
  }

  return undefined
}
