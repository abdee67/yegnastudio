import type { PricingPageData } from '@/types/pricing'
import { mobileAppsService } from '@/data/services/mobile-apps'

export const mobileAppsPricing: PricingPageData = {
  slug: 'mobile-apps',
  serviceName: 'Mobile Apps',
  meta: {
    title: 'Mobile App Pricing | የኛstudio',
    description: 'Flutter mobile app pricing in Addis Ababa for MVPs, growth apps and custom cross-platform mobile products.',
    keywords: [
      'mobile app pricing Ethiopia',
      'Flutter app cost Addis Ababa',
      'iOS Android app price',
      'app MVP package',
      'Firebase app pricing',
      'startup app cost Ethiopia',
      'የኛstudio pricing',
      'mobile development Ethiopia',
    ],
    ogTitle: 'Mobile App Pricing',
    ogDescription: 'Compare Flutter MVP, growth app, and platform pricing for iOS and Android projects.',
  },
  hero: {
    badge: 'Mobile Apps Pricing',
    headline: 'Budget clearly for your next app.',
    subheadline: 'Transparent mobile app packages for MVP validation, richer launches, and custom platforms.',
    serviceHref: '/services/mobile-apps',
  },
  cards: {
    eyebrow: 'App packages',
    title: 'Start lean, then expand with confidence.',
    plans: mobileAppsService.pricing.plans,
    note: mobileAppsService.pricing.note,
  },
  comparison: {
    title: 'Compare mobile app packages',
    subtitle: 'Final cost depends on screen count, backend depth, store requirements, and device features.',
    features: [
      { category: 'Core scope', name: 'Flutter iOS and Android', starter: true, growth: true, enterprise: true },
      { category: 'Core scope', name: 'Screen count', starter: 'Up to 8', growth: 'Up to 18', enterprise: 'Custom' },
      { category: 'Core scope', name: 'Clickable prototype', starter: 'Basic', growth: true, enterprise: true },
      { category: 'Backend', name: 'Firebase auth and database', starter: true, growth: true, enterprise: 'Custom backend' },
      { category: 'Backend', name: 'REST API integrations', starter: false, growth: true, enterprise: true },
      { category: 'Device features', name: 'Push notifications', starter: false, growth: true, enterprise: true },
      { category: 'Device features', name: 'Maps or camera features', starter: false, growth: 'Optional', enterprise: true },
      { category: 'Launch', name: 'Release checklist', starter: true, growth: true, enterprise: true },
      { category: 'Support', name: 'Post-launch support', starter: '14 days', growth: '30 days', enterprise: 'SLA available' },
    ],
  },
  projects: mobileAppsService.projects.slice(0, 3),
  faq: {
    eyebrow: 'Pricing FAQ',
    title: 'Mobile app pricing questions.',
    faqs: [
      {
        question: 'How do I pay?',
        answer: 'Mobile apps are paid in milestones: deposit, prototype approval, test build, and release handoff. Larger builds can use monthly sprint billing.',
      },
      {
        question: 'What if I need changes after launch?',
        answer: 'Bug fixes are covered during the support window. New features and store updates can be handled as a second release sprint or maintenance retainer.',
      },
      {
        question: 'Do you offer refunds?',
        answer: 'Once discovery and production begin, deposits are not refundable because they cover planning and reserved build time. Unstarted future milestones can be adjusted if scope changes.',
      },
      {
        question: 'Can I upgrade my plan later?',
        answer: 'Yes. The MVP plan is designed to validate core value, then we can add notifications, dashboards, payments, or richer roles in later releases.',
      },
      {
        question: 'How long until my project starts?',
        answer: 'After discovery, we confirm the next available app sprint. MVPs usually need enough time for design, backend setup, Flutter build, and device testing.',
      },
    ],
  },
  cta: {
    headline: 'Ready to shape the app and the budget?',
    subtext: 'Bring the idea. We will help define the first useful version and the cost to build it well.',
    primaryCTA: { label: 'Request an app quote', href: '/#contact' },
    secondaryCTA: { label: 'Review service details', href: '/services/mobile-apps' },
    note: 'A focused MVP almost always beats a crowded first release.',
  },
}
