import type { ServicePageData } from '@/types/service'
import { businessProfileService } from './business-profile'
import { mobileAppsService } from './mobile-apps'
import { socialMediaService } from './social-media'
import { uiUxDesignService } from './ui-ux-design'
import { webDevelopmentService } from './web-development'

export const SERVICE_SLUGS = [
  'web-development',
  'mobile-apps',
  'business-profile',
  'ui-ux-design',
  'social-media',
] as const

export type ServiceSlug = (typeof SERVICE_SLUGS)[number]

export const SERVICE_DATA_MAP: Record<ServiceSlug, ServicePageData> = {
  'web-development': webDevelopmentService,
  'mobile-apps': mobileAppsService,
  'business-profile': businessProfileService,
  'ui-ux-design': uiUxDesignService,
  'social-media': socialMediaService,
}

export const SERVICES_DATA = SERVICE_SLUGS.map((slug) => SERVICE_DATA_MAP[slug])

export function getServiceData(slug: string): ServicePageData | undefined {
  if (SERVICE_SLUGS.includes(slug as ServiceSlug)) {
    return SERVICE_DATA_MAP[slug as ServiceSlug]
  }

  return undefined
}
