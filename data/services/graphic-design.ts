import type { ServicePageData } from '@/types/service'

export const graphicDesignService: ServicePageData = {
  slug: 'graphic-design',
  name: 'Graphic Design',
  meta: {
    title: 'Graphic Design in Addis Ababa | የኛstudio',
    description: 'Professional graphic design in Addis Ababa for logos, brand identity, print materials, packaging and social media assets.',
    keywords: [
      'graphic design Addis Ababa',
      'logo design Ethiopia',
      'brand identity Ethiopia',
      'print design Addis Ababa',
      'packaging design Ethiopia',
      'social media design',
      'Figma designer Ethiopia',
      'brand assets',
      'marketing design Ethiopia',
    ],
    ogTitle: 'Graphic Design and Brand Identity in Addis Ababa',
    ogDescription: 'Logos, visual identity systems, print collateral, packaging, and campaign-ready brand assets.',
  },
  hero: {
    badge: 'Graphic Design',
    headline: 'Visuals that\nmake you remembered',
    accentPhrase: 'make you remembered',
    subheadline:
      'We create identity systems, print pieces, packaging, and social assets that give your business a sharper, more consistent public face.',
    primaryCTA: { label: 'Start a design project', href: '/#contact' },
    secondaryCTA: { label: 'View pricing', href: '/pricing/graphic-design' },
    stats: [
      { num: '50+', label: 'brand and campaign assets created' },
      { num: '3d', label: 'typical first logo direction' },
      { num: '4+', label: 'formats prepared for handoff' },
    ],
  },
  overview: {
    eyebrow: 'What you get',
    title: 'Design assets that make your brand easier to trust.',
    description: [
      'Good design makes a business feel organized before anyone reads the details. We help you show up consistently across digital, print, and customer-facing touchpoints.',
      'Our work covers logo systems, brand identity, packaging, posters, brochures, pitch visuals, event materials, and social media graphics.',
      'We keep files practical: editable sources, export sets, usage notes, and layouts sized for the places your brand actually appears.',
    ],
    highlights: [
      { icon: '🎯', title: 'Clear visual direction', description: 'A style that reflects your audience, category, and positioning.' },
      { icon: '🧩', title: 'Complete asset systems', description: 'Logo variations, colors, typography, templates, and export-ready files.' },
      { icon: '🖨️', title: 'Print-aware output', description: 'Flyers, packaging, cards, and signage prepared with production details in mind.' },
      { icon: '📦', title: 'Usable handoff', description: 'Organized folders and practical guidance for your team or vendors.' },
    ],
  },
  howWeDiffer: {
    eyebrow: 'Why የኛstudio',
    title: 'We design for consistency beyond the first nice mockup.',
    subtitle: 'A brand has to work on a phone screen, a poster, a receipt, a storefront, and a sales deck without falling apart.',
    differentiators: [
      { num: '01', title: 'Strategy before style', description: 'We connect colors, marks, and layouts to your audience and offer.' },
      { num: '02', title: 'Systems thinking', description: 'We create repeatable rules so future assets still look like your brand.' },
      { num: '03', title: 'Digital and print fluency', description: 'We prepare designs for social, web, packaging, posters, and practical production needs.' },
      { num: '04', title: 'Fast feedback loops', description: 'You see directions early, then we refine the strongest route with focused review rounds.' },
    ],
  },
  process: {
    eyebrow: 'How it works',
    title: 'A clean design process from direction to final files.',
    steps: [
      { num: '01', title: 'Brand intake', description: 'We collect goals, audience notes, references, competitors, and required formats.', deliverable: 'Creative brief' },
      { num: '02', title: 'Direction concepts', description: 'We explore visual routes and present the strongest options with context.', deliverable: 'Concept board' },
      { num: '03', title: 'Refinement', description: 'We tune the selected direction across typography, colors, layout, and assets.', deliverable: 'Design system' },
      { num: '04', title: 'Production files', description: 'We export final assets for digital, print, and vendor handoff.', deliverable: 'Asset package' },
    ],
  },
  techStack: {
    eyebrow: 'Tools we use',
    title: 'Design tools that keep creative work precise and reusable.',
    tools: [
      { name: 'Figma', category: 'Design', description: 'Brand systems, layouts, templates, and collaborative review.', proficiency: 'Expert' },
      { name: 'Illustrator', category: 'Vector', description: 'Logo marks, icons, packaging vectors, and print-ready artwork.', proficiency: 'Advanced' },
      { name: 'Photoshop', category: 'Image Editing', description: 'Mockups, image treatment, compositing, and campaign visuals.', proficiency: 'Advanced' },
      { name: 'Canva Systems', category: 'Templates', description: 'Simple editable templates for teams that need quick internal updates.', proficiency: 'Proficient' },
      { name: 'Print Specs', category: 'Production', description: 'Bleed, sizing, export settings, and vendor-ready package notes.', proficiency: 'Advanced' },
      { name: 'Brand Guides', category: 'Documentation', description: 'Usage rules for logo, color, typography, spacing, and examples.', proficiency: 'Advanced' },
    ],
  },
  projects: [
    {
      emoji: '☕',
      type: 'Identity',
      title: 'Cafe brand identity',
      description: 'Logo system, menu layouts, packaging stickers, and launch social assets for a neighborhood cafe.',
      year: '2024',
      tags: ['Logo', 'Packaging', 'Print'],
      href: '/#work',
      gradientFrom: 'var(--surface2)',
      gradientTo: 'color-mix(in srgb, var(--accent) 12%, var(--black))',
    },
    {
      emoji: '🧴',
      type: 'Campaign',
      title: 'Skincare product visuals',
      description: 'A campaign kit with product mockups, social layouts, and point-of-sale artwork.',
      year: '2023',
      tags: ['Campaign', 'Mockups', 'Social'],
      href: '/#work',
      gradientFrom: 'var(--black)',
      gradientTo: 'var(--surface2)',
    },
    {
      emoji: '🎤',
      type: 'Event',
      title: 'Conference graphics package',
      description: 'Poster, ticket, badge, stage screen, and sponsor templates for a business event.',
      year: '2024',
      tags: ['Print', 'Event', 'Templates'],
      href: '/#work',
      gradientFrom: 'var(--surface)',
      gradientTo: 'color-mix(in srgb, var(--accent) 10%, var(--surface2))',
    },
  ],
  pricing: {
    eyebrow: 'Packages',
    title: 'Graphic design packages for launches and campaigns.',
    subtitle: 'Pick a focused asset, a full identity, or a campaign system ready for repeated use.',
    pricingPageHref: '/pricing/graphic-design',
    note: 'Printing and third-party production costs are not included unless specifically scoped.',
    plans: [
      {
        name: 'Essentials',
        price: 'ETB 5,000',
        period: 'one-time',
        description: 'A focused design asset or small set of branded visuals.',
        features: ['1 logo or hero asset', '2 layout variations', 'Export-ready files', 'Basic usage notes'],
        cta: 'Start design',
        variant: 'outline',
        deliveryTime: '~1 week',
        revisions: '2 rounds',
        support: '7 days',
      },
      {
        name: 'Brand Kit',
        price: 'ETB 18,000',
        period: 'one-time',
        description: 'A practical identity package for a business ready to look consistent.',
        features: ['Logo system', 'Color and type guide', 'Business card or flyer', 'Social templates', 'Source files'],
        cta: 'Build my brand',
        variant: 'solid',
        featured: true,
        deliveryTime: '2-3 weeks',
        revisions: '3 rounds',
        support: '14 days',
      },
      {
        name: 'Campaign',
        price: 'Custom',
        period: 'project',
        description: 'Launch, event, packaging, or multi-channel campaign design.',
        features: ['Creative direction', 'Asset suite', 'Vendor handoff', 'Template system', 'Retainer option'],
        cta: "Let's scope it",
        variant: 'outline',
        deliveryTime: 'Scoped timeline',
        revisions: 'Milestone based',
        support: 'Campaign window',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Graphic design questions before we start.',
    faqs: [
      {
        question: 'Do you design logos only?',
        answer:
          'We design logos, but we prefer building usable identity systems around them: color, type, layout examples, file exports, and templates your team can keep using.',
      },
      {
        question: 'Can you work with an existing brand?',
        answer:
          'Yes. We can refresh existing assets, create new campaign materials, or build templates that respect the brand you already have.',
      },
      {
        question: 'Will I receive source files?',
        answer:
          'Yes. Packages include export-ready files, and Brand Kit or Campaign packages include organized source files when relevant.',
      },
      {
        question: 'Can you prepare files for printing?',
        answer:
          'Yes. We can prepare print-ready files with sizing, bleed, and production notes. Printing costs and vendor coordination are scoped separately.',
      },
      {
        question: 'How many concepts do you provide?',
        answer:
          'That depends on the package. We usually present a focused set of strong directions instead of many weak options, then refine the selected direction.',
      },
      {
        question: 'Can you make social media templates?',
        answer:
          'Yes. We can create reusable post, story, carousel, and ad templates sized for your main platforms.',
      },
    ],
  },
  cta: {
    headline: 'Need your brand to look more serious?',
    subtext: 'We can help you turn scattered visuals into a consistent system customers recognize.',
    primaryCTA: { label: 'Start a design project', href: '/#contact' },
    secondaryCTA: { label: 'See design pricing', href: '/pricing/graphic-design' },
    note: 'Bring references if you have them. We will help shape the direction.',
  },
}
