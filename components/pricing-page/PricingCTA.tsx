import ServiceCTA from '@/components/service-page/ServiceCTA'
import type { PricingPageData } from '@/types/pricing'

interface PricingCTAProps {
  cta: PricingPageData['cta']
}

export default function PricingCTA({ cta }: PricingCTAProps) {
  return <ServiceCTA {...cta} />
}
