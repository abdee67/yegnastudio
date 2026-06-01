import type { PricingPageData } from '@/types/pricing'
import { graphicDesignService } from '@/data/services/graphic-design'

export const graphicDesignPricing: PricingPageData = {
  slug: 'graphic-design',
  serviceName: 'Graphic Design',
  meta: {
    title: 'Graphic Design Pricing | የኛstudio',
    description: 'Graphic design pricing in Addis Ababa for logos, brand identity, print materials, packaging and campaign assets.',
    keywords: [
      'graphic design pricing Ethiopia',
      'logo design price Addis Ababa',
      'brand identity cost Ethiopia',
      'print design package',
      'packaging design cost',
      'social media design pricing',
      'የኛstudio pricing',
      'Ethiopia design agency',
    ],
    ogTitle: 'Graphic Design Pricing',
    ogDescription: 'Compare focused design assets, brand kits, and campaign design packages.',
  },
  hero: {
    badge: 'Graphic Design Pricing',
    headline: 'Design pricing without guesswork.',
    subheadline: 'Simple starting points for logos, identity systems, print pieces, and campaign assets.',
    serviceHref: '/services/graphic-design',
  },
  cards: {
    eyebrow: 'Design packages',
    title: 'Choose the right creative scope for this stage.',
    plans: graphicDesignService.pricing.plans,
    note: graphicDesignService.pricing.note,
  },
  comparison: {
    title: 'Compare design packages',
    subtitle: 'Final pricing depends on concept depth, number of assets, production formats, and timeline.',
    features: [
      { category: 'Core scope', name: 'Primary design direction', starter: true, growth: true, enterprise: true },
      { category: 'Core scope', name: 'Logo system', starter: 'Single mark', growth: true, enterprise: true },
      { category: 'Core scope', name: 'Brand guide', starter: 'Basic notes', growth: true, enterprise: true },
      { category: 'Assets', name: 'Social templates', starter: false, growth: true, enterprise: true },
      { category: 'Assets', name: 'Print-ready files', starter: 'Optional', growth: true, enterprise: true },
      { category: 'Assets', name: 'Packaging or event suite', starter: false, growth: false, enterprise: true },
      { category: 'Delivery', name: 'Source files', starter: 'Limited', growth: true, enterprise: true },
      { category: 'Support', name: 'Post-delivery support', starter: '7 days', growth: '14 days', enterprise: 'Campaign window' },
    ],
  },
  projects: graphicDesignService.projects.slice(0, 3),
  faq: {
    eyebrow: 'Pricing FAQ',
    title: 'Graphic design pricing questions.',
    faqs: [
      {
        question: 'How do I pay?',
        answer: 'Most design projects use a deposit and final payment. Larger brand or campaign packages can be split by concept approval and final asset handoff.',
      },
      {
        question: 'What if I need changes after launch?',
        answer: 'Each package includes defined revision rounds. Additional assets or major direction changes can be added as a new mini-scope.',
      },
      {
        question: 'Do you offer refunds?',
        answer: 'Deposits are not refundable once concept work begins. If priorities change before later assets are started, we can adjust the remaining work.',
      },
      {
        question: 'Can I upgrade my plan later?',
        answer: 'Yes. A logo or essential asset can grow into a full brand kit, template system, or campaign package later.',
      },
      {
        question: 'How long until my project starts?',
        answer: 'Small design tasks can often start sooner than development work. Brand systems and campaign packages are scheduled into focused creative windows.',
      },
    ],
  },
  cta: {
    headline: 'Ready to budget the creative work?',
    subtext: 'Tell us the assets you need, where they will be used, and when they need to launch.',
    primaryCTA: { label: 'Request design pricing', href: '/#contact' },
    secondaryCTA: { label: 'Review service details', href: '/services/graphic-design' },
    note: 'Production and print vendor costs are confirmed separately.',
  },
}
