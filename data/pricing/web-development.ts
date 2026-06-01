import type { PricingPageData } from '@/types/pricing'
import { webDevelopmentService } from '@/data/services/web-development'

export const webDevelopmentPricing: PricingPageData = {
  slug: 'web-development',
  serviceName: 'Web Development',
  meta: {
    title: 'Web Development Pricing | የኛstudio',
    description: 'Transparent web development pricing in Addis Ababa for business websites, custom web apps, dashboards and integrations.',
    keywords: [
      'web development pricing Ethiopia',
      'website cost Addis Ababa',
      'Next.js pricing Ethiopia',
      'React website package',
      'business website price',
      'custom web app cost',
      'የኛstudio pricing',
      'Ethiopia web agency',
    ],
    ogTitle: 'Web Development Pricing',
    ogDescription: 'Compare starter websites, growth web apps, and custom platform builds with clear scope expectations.',
  },
  hero: {
    badge: 'Web Development Pricing',
    headline: 'Clear web pricing for serious launches.',
    subheadline: 'Transparent starting points. No hidden costs. Final scope is confirmed before work begins.',
    serviceHref: '/services/web-development',
  },
  cards: {
    eyebrow: 'Web packages',
    title: 'Pick the web build that matches your next step.',
    plans: webDevelopmentService.pricing.plans,
    note: webDevelopmentService.pricing.note,
  },
  comparison: {
    title: 'Compare web packages',
    subtitle: 'Use this as a starting point. We tailor the final scope around pages, workflows, integrations, and content readiness.',
    features: [
      { category: 'Core scope', name: 'Pages or primary screens', starter: 'Up to 5', growth: 'Up to 12', enterprise: 'Custom' },
      { category: 'Core scope', name: 'Responsive design', starter: true, growth: true, enterprise: true },
      { category: 'Core scope', name: 'Custom UI system', starter: false, growth: true, enterprise: true },
      { category: 'Functionality', name: 'Contact or lead forms', starter: true, growth: true, enterprise: true },
      { category: 'Functionality', name: 'Database or CMS', starter: false, growth: true, enterprise: true },
      { category: 'Functionality', name: 'Authentication and roles', starter: false, growth: 'Optional', enterprise: true },
      { category: 'Launch', name: 'SEO foundations', starter: true, growth: true, enterprise: true },
      { category: 'Launch', name: 'Deployment support', starter: true, growth: true, enterprise: true },
      { category: 'Support', name: 'Post-launch support', starter: '14 days', growth: '30 days', enterprise: 'SLA available' },
    ],
  },
  projects: webDevelopmentService.projects.slice(0, 3),
  faq: {
    eyebrow: 'Pricing FAQ',
    title: 'Web pricing questions.',
    faqs: [
      {
        question: 'How do I pay?',
        answer: 'Most projects start with a deposit to reserve the sprint, then milestone payments tied to design approval, development preview, and launch handoff.',
      },
      {
        question: 'What if I need changes after launch?',
        answer: 'Small fixes are included during the support window. New features, new pages, or strategy changes are quoted as a follow-up sprint or monthly retainer.',
      },
      {
        question: 'Do you offer refunds?',
        answer: 'Deposits cover planning and reserved production time, so they are not refundable once work begins. If scope changes, we adjust the remaining milestone plan clearly.',
      },
      {
        question: 'Can I upgrade my plan later?',
        answer: 'Yes. A Starter website can grow into a richer site or app. We plan the structure so future CMS, auth, or integration work has a clean path.',
      },
      {
        question: 'How long until my project starts?',
        answer: 'Availability depends on the current production calendar. After the discovery call, we confirm the earliest sprint start date and delivery timeline.',
      },
    ],
  },
  cta: {
    headline: 'Ready to price your web build properly?',
    subtext: 'Tell us the goal, pages, integrations, and timeline. We will turn that into a clear scope.',
    primaryCTA: { label: 'Request a web quote', href: '/#contact' },
    secondaryCTA: { label: 'Review service details', href: '/services/web-development' },
    note: 'No commitment required for the first discovery call.',
  },
}
