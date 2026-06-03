import type { PricingPageData } from '@/types/pricing'
import { businessProfileService } from '@/data/services/business-profile'

export const businessProfilePricing: PricingPageData = {
  slug: 'business-profile',
  serviceName: 'Business Profile',
  meta: {
    title: 'Business Profile Pricing | የኛstudio',
    description: 'Business profile pricing in Addis Ababa for company profiles, capability statements, proposal PDFs and investor-ready documents starting from ETB 3,600.',
    keywords: [
      'business profile pricing Ethiopia',
      'company profile cost Addis Ababa',
      'business profile package',
      'company profile writing Ethiopia',
      'capability statement pricing',
      'proposal profile package',
      'የኛstudio pricing',
      'business document Ethiopia',
    ],
    ogTitle: 'Business Profile Pricing',
    ogDescription: 'Compare starter business profiles, full company profiles, and custom profile systems.',
  },
  hero: {
    badge: 'Business Profile Pricing',
    headline: 'Business profile pricing that starts clearly.',
    subheadline: 'Professional company profile packages starting from ETB 3,600, with scope confirmed before work begins.',
    serviceHref: '/services/business-profile',
  },
  cards: {
    eyebrow: 'Profile packages',
    title: 'Choose the profile scope your business needs now.',
    plans: businessProfileService.pricing.plans,
    note: businessProfileService.pricing.note,
  },
  comparison: {
    title: 'Compare business profile packages',
    subtitle: 'Final pricing depends on page count, content readiness, number of sections, and editable handoff needs.',
    features: [
      { category: 'Core scope', name: 'Company overview', starter: true, growth: true, enterprise: true },
      { category: 'Core scope', name: 'Service descriptions', starter: 'Summary', growth: true, enterprise: true },
      { category: 'Core scope', name: 'Mission, vision, and values', starter: false, growth: true, enterprise: true },
      { category: 'Content', name: 'Content cleanup or writing', starter: 'Light', growth: true, enterprise: true },
      { category: 'Content', name: 'Proposal or tender sections', starter: false, growth: 'Optional', enterprise: true },
      { category: 'Delivery', name: 'Share-ready PDF', starter: true, growth: true, enterprise: true },
      { category: 'Delivery', name: 'Editable source file', starter: 'Add-on', growth: true, enterprise: true },
      { category: 'Support', name: 'Post-delivery support', starter: '7 days', growth: '14 days', enterprise: 'Scoped support' },
    ],
  },
  projects: businessProfileService.projects.slice(0, 3),
  faq: {
    eyebrow: 'Pricing FAQ',
    title: 'Business profile pricing questions.',
    faqs: [
      {
        question: 'What is included in the ETB 3,600 starter profile?',
        answer: 'The starter profile includes a focused company overview, services summary, contact section, share-ready PDF, and one revision round.',
      },
      {
        question: 'How do I pay?',
        answer: 'Most business profile projects use a deposit to start and a final payment before final file handoff. Larger custom scopes can use milestone payments.',
      },
      {
        question: 'Can I upgrade after starting?',
        answer: 'Yes. If the starter profile needs more sections, editable handoff, or proposal-specific pages, we can upgrade the scope before final delivery.',
      },
      {
        question: 'Do you print the profiles?',
        answer: 'Printing is not included by default. We deliver a PDF suitable for digital sharing, and printing support can be scoped separately if needed.',
      },
      {
        question: 'How long does it take?',
        answer: 'Starter profiles usually take 3-5 days once your details are ready. Fuller company profiles usually take 1-2 weeks depending on content readiness.',
      },
    ],
  },
  cta: {
    headline: 'Ready to price your business profile?',
    subtext: 'Tell us your company type, sections needed, and whether you already have content. We will recommend the right profile package.',
    primaryCTA: { label: 'Request profile pricing', href: '/#contact' },
    secondaryCTA: { label: 'Review service details', href: '/services/business-profile' },
    note: 'Starting from ETB 3,600. No commitment required for the first scope conversation.',
  },
}
