import type { PricingPageData } from '@/types/pricing'
import { socialMediaService } from '@/data/services/social-media'

export const socialMediaPricing: PricingPageData = {
  slug: 'social-media',
  serviceName: 'Social Media',
  meta: {
    title: 'Social Media Pricing | የኛstudio',
    description: 'Social media management pricing in Addis Ababa for content calendars, post design, short-form scripts and monthly reporting.',
    keywords: [
      'social media pricing Ethiopia',
      'content management cost Addis Ababa',
      'Instagram management pricing',
      'TikTok content package',
      'Telegram marketing price',
      'content calendar package',
      'የኛstudio pricing',
      'social media agency Ethiopia',
    ],
    ogTitle: 'Social Media Management Pricing',
    ogDescription: 'Compare monthly starter, growth, and campaign social media packages for your brand.',
  },
  hero: {
    badge: 'Social Media Pricing',
    headline: 'Monthly content pricing you can plan around.',
    subheadline: 'Clear retainers for strategy, content creation, publishing rhythm, community support, and reporting.',
    serviceHref: '/services/social-media',
  },
  cards: {
    eyebrow: 'Social packages',
    title: 'Choose a monthly rhythm that your team can sustain.',
    billingToggle: true,
    plans: socialMediaService.pricing.plans,
    note: socialMediaService.pricing.note,
  },
  comparison: {
    title: 'Compare social media packages',
    subtitle: 'Final pricing depends on platform count, post volume, video needs, approvals, and campaign intensity.',
    features: [
      { category: 'Strategy', name: 'Content pillars', starter: 'Basic', growth: true, enterprise: true },
      { category: 'Strategy', name: 'Monthly content calendar', starter: true, growth: true, enterprise: true },
      { category: 'Content', name: 'Static posts per month', starter: '12', growth: '20', enterprise: 'Custom' },
      { category: 'Content', name: 'Short-form video scripts', starter: false, growth: '4', enterprise: true },
      { category: 'Content', name: 'Campaign asset suite', starter: false, growth: 'Optional', enterprise: true },
      { category: 'Management', name: 'Scheduling support', starter: true, growth: true, enterprise: true },
      { category: 'Management', name: 'Community guidance', starter: false, growth: true, enterprise: true },
      { category: 'Reporting', name: 'Performance report', starter: 'Summary', growth: true, enterprise: true },
      { category: 'Support', name: 'Check-in cadence', starter: 'Monthly', growth: 'Weekly', enterprise: 'Campaign window' },
    ],
  },
  projects: socialMediaService.projects.slice(0, 3),
  faq: {
    eyebrow: 'Pricing FAQ',
    title: 'Social pricing questions.',
    faqs: [
      {
        question: 'How do I pay?',
        answer: 'Monthly retainers are paid at the start of each content cycle. Campaign projects use a deposit and milestone payments based on asset delivery.',
      },
      {
        question: 'What if I need changes after posts are approved?',
        answer: 'Each plan includes approval rounds before publishing. Late changes can be handled when timelines allow, and urgent changes may affect the posting schedule.',
      },
      {
        question: 'Do you offer refunds?',
        answer: 'Monthly fees cover strategy, planning, and production capacity, so they are not refundable once the cycle begins. Unused future cycles can be paused with notice.',
      },
      {
        question: 'Can I upgrade my plan later?',
        answer: 'Yes. You can start with a lighter posting rhythm and move into Growth or campaign support when your content needs increase.',
      },
      {
        question: 'How long until my project starts?',
        answer: 'We begin with a setup week for audit, strategy, and calendar planning. Publishing starts after your first content batch is approved.',
      },
    ],
  },
  cta: {
    headline: 'Ready to get consistent without guessing every week?',
    subtext: 'Tell us your platforms, goals, and current content capacity. We will recommend a monthly rhythm.',
    primaryCTA: { label: 'Request social pricing', href: '/#contact' },
    secondaryCTA: { label: 'Review service details', href: '/services/social-media' },
    note: 'Ad spend and creator fees are always approved separately.',
  },
}
