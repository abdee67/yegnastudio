import type { PricingPageData } from '@/types/pricing'
import { uiUxDesignService } from '@/data/services/ui-ux-design'

export const uiUxDesignPricing: PricingPageData = {
  slug: 'ui-ux-design',
  serviceName: 'UI/UX Design',
  meta: {
    title: 'UI/UX Design Pricing | የኛstudio',
    description: 'UI/UX design pricing in Addis Ababa for wireframes, prototypes, product design and design systems.',
    keywords: [
      'UI UX pricing Ethiopia',
      'Figma design cost Addis Ababa',
      'wireframe package',
      'prototype design pricing',
      'product design cost',
      'design system pricing',
      'የኛstudio pricing',
      'UX design Ethiopia',
    ],
    ogTitle: 'UI/UX Design Pricing',
    ogDescription: 'Compare UX sprints, full product design packages, and design system scopes.',
  },
  hero: {
    badge: 'UI/UX Design Pricing',
    headline: 'Design the product before you fund the build.',
    subheadline: 'Clear UI/UX packages for wireframes, prototypes, product screens, and reusable systems.',
    serviceHref: '/services/ui-ux-design',
  },
  cards: {
    eyebrow: 'UX packages',
    title: 'Use design to lower product risk.',
    plans: uiUxDesignService.pricing.plans,
    note: uiUxDesignService.pricing.note,
  },
  comparison: {
    title: 'Compare UI/UX packages',
    subtitle: 'Final scope depends on user roles, flow complexity, screen count, and research needs.',
    features: [
      { category: 'Discovery', name: 'Product discovery session', starter: true, growth: true, enterprise: true },
      { category: 'Discovery', name: 'User journey mapping', starter: true, growth: true, enterprise: true },
      { category: 'Design', name: 'Low-fidelity wireframes', starter: true, growth: true, enterprise: true },
      { category: 'Design', name: 'High-fidelity screens', starter: false, growth: true, enterprise: true },
      { category: 'Design', name: 'Component system', starter: false, growth: 'Basic', enterprise: true },
      { category: 'Validation', name: 'Clickable prototype', starter: false, growth: true, enterprise: true },
      { category: 'Delivery', name: 'Developer handoff notes', starter: 'Basic', growth: true, enterprise: true },
      { category: 'Support', name: 'Post-handoff support', starter: '7 days', growth: '14 days', enterprise: 'System support' },
    ],
  },
  projects: uiUxDesignService.projects.slice(0, 3),
  faq: {
    eyebrow: 'Pricing FAQ',
    title: 'UI/UX pricing questions.',
    faqs: [
      {
        question: 'How do I pay?',
        answer: 'UX sprints usually use deposit and final payment. Larger product design scopes can be split by discovery, wireframes, visual design, and handoff milestones.',
      },
      {
        question: 'What if I need changes after handoff?',
        answer: 'Revision rounds are included. Additional flows, new screens, or major product changes can be handled as a follow-up sprint.',
      },
      {
        question: 'Do you offer refunds?',
        answer: 'Once discovery and design work begin, deposits are not refundable. If scope changes before later milestones, we adjust the remaining plan transparently.',
      },
      {
        question: 'Can I upgrade my plan later?',
        answer: 'Yes. A UX Sprint can become a full product design package, and a product UI can later grow into a larger design system.',
      },
      {
        question: 'How long until my project starts?',
        answer: 'We schedule UX work into focused design windows. After discovery, we confirm start date, review cadence, and handoff date.',
      },
    ],
  },
  cta: {
    headline: 'Ready to make the product easier to build?',
    subtext: 'Let’s define the flows, screens, and handoff your development team needs.',
    primaryCTA: { label: 'Request UX pricing', href: '/#contact' },
    secondaryCTA: { label: 'Review service details', href: '/services/ui-ux-design' },
    note: 'Design first is often cheaper than rebuilding later.',
  },
}
