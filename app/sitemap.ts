import type { MetadataRoute } from 'next'
import { BRAND_DOMAIN } from '@/data/brand'
import { PRICING_SLUGS } from '@/data/pricing'
import { SERVICE_SLUGS } from '@/data/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BRAND_DOMAIN
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    ...SERVICE_SLUGS.map((slug) => ({
      url: `${base}/services/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...PRICING_SLUGS.map((slug) => ({
      url: `${base}/pricing/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
