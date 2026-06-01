import ServiceFAQ from '@/components/service-page/ServiceFAQ'
import type { PricingPageData } from '@/types/pricing'

interface PricingFAQProps {
  faq: PricingPageData['faq']
}

export default function PricingFAQ({ faq }: PricingFAQProps) {
  return <ServiceFAQ eyebrow={faq.eyebrow} title={faq.title} faqs={faq.faqs} />
}
