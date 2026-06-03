import type { ServicePageData } from '@/types/service'

export const businessProfileService: ServicePageData = {
  slug: 'business-profile',
  name: 'Business Profile',
  meta: {
    title: 'Business Profile Writing in Addis Ababa | የኛstudio',
    description: 'Professional business profile packages in Addis Ababa for company introductions, capability statements, proposals and investor-ready PDFs.',
    keywords: [
      'business profile Addis Ababa',
      'company profile Ethiopia',
      'business profile writing',
      'company profile package',
      'capability statement Ethiopia',
      'proposal profile Addis Ababa',
      'business document Ethiopia',
      'startup profile Ethiopia',
      'professional company profile',
    ],
    ogTitle: 'Business Profile Packages in Addis Ababa',
    ogDescription: 'Clear company profiles, capability statements, and proposal-ready business documents starting from ETB 3,600.',
  },
  hero: {
    badge: 'Business Profile',
    headline: 'Profiles that\nmake your business clear',
    accentPhrase: 'make your business clear',
    subheadline:
      'We prepare polished business profiles that explain who you are, what you offer, why clients should trust you, and how to start a conversation.',
    primaryCTA: { label: 'Start a profile', href: '/#contact' },
    secondaryCTA: { label: 'View pricing', href: '/pricing/business-profile' },
    stats: [
      { num: 'ETB 3,600', label: 'starting business profile package' },
      { num: 'PDF', label: 'ready for email, print, and proposals' },
      { num: '7d', label: 'typical starter profile turnaround' },
    ],
  },
  overview: {
    eyebrow: 'What you get',
    title: 'A business profile that makes your offer easier to understand and trust.',
    description: [
      'A strong business profile helps customers, partners, and investors quickly understand your company without needing a long explanation.',
      'We organize your story, services, experience, contact details, and proof points into a clear profile document that can support proposals, introductions, tenders, and sales conversations.',
      'Every profile is structured for readability, practical handoff, and easy sharing as a professional PDF.',
    ],
    highlights: [
      { icon: '🧾', title: 'Clear company story', description: 'A concise overview of who you are, what you do, and who you serve.' },
      { icon: '📌', title: 'Service positioning', description: 'Your services, strengths, and differentiators explained in client-friendly language.' },
      { icon: '📄', title: 'Proposal-ready PDF', description: 'A clean document your team can email, print, attach to bids, or send to partners.' },
      { icon: '🤝', title: 'Trust signals', description: 'Experience, process, values, contacts, and proof points placed where they support decisions.' },
    ],
  },
  howWeDiffer: {
    eyebrow: 'Why የኛstudio',
    title: 'We make business profiles practical, not decorative.',
    subtitle: 'The goal is simple: help a serious reader understand your company quickly and feel confident enough to reply.',
    differentiators: [
      { num: '01', title: 'Business-first structure', description: 'We shape the profile around your audience, offer, services, and next step.' },
      { num: '02', title: 'Clear writing', description: 'We turn scattered notes into simple, confident wording that sounds professional.' },
      { num: '03', title: 'Readable presentation', description: 'Sections, spacing, and page flow are organized so the document is easy to scan.' },
      { num: '04', title: 'Useful handoff', description: 'You receive a share-ready PDF and the agreed editable source files for future updates.' },
    ],
  },
  process: {
    eyebrow: 'How it works',
    title: 'A focused process from raw notes to final profile.',
    steps: [
      { num: '01', title: 'Business intake', description: 'We collect your company details, services, audience, proof points, and references.', deliverable: 'Profile brief' },
      { num: '02', title: 'Content structure', description: 'We organize the sections and decide what the reader needs to see first.', deliverable: 'Profile outline' },
      { num: '03', title: 'Writing and layout', description: 'We write or refine the content and prepare a clean document layout.', deliverable: 'Draft PDF' },
      { num: '04', title: 'Review and handoff', description: 'We apply revisions, polish the final file, and prepare the share-ready version.', deliverable: 'Final profile package' },
    ],
  },
  techStack: {
    eyebrow: 'Tools we use',
    title: 'Document tools for clean, editable business profiles.',
    tools: [
      { name: 'Google Docs', category: 'Content', description: 'Collaborative drafting, comments, and structured content review.', proficiency: 'Advanced' },
      { name: 'Figma', category: 'Layout', description: 'Clean profile layouts, spacing systems, and PDF presentation screens.', proficiency: 'Advanced' },
      { name: 'Canva', category: 'Editable Handoff', description: 'Editable templates for teams that want simple future updates.', proficiency: 'Proficient' },
      { name: 'PDF Export', category: 'Delivery', description: 'Compressed, share-ready files for email, proposals, and printing.', proficiency: 'Advanced' },
      { name: 'Content Strategy', category: 'Messaging', description: 'Positioning, service descriptions, proof points, and section flow.', proficiency: 'Advanced' },
      { name: 'Brand Assets', category: 'Inputs', description: 'Logo, colors, photos, contact details, and existing company materials.', proficiency: 'Proficient' },
    ],
  },
  projects: [
    {
      emoji: '🏢',
      type: 'Company Profile',
      title: 'Corporate capability profile',
      description: 'A professional company profile for introducing services, experience, values, and contact details.',
      year: '2026',
      tags: ['Company Profile', 'PDF', 'Services'],
      href: '/#contact',
      gradientFrom: 'var(--surface2)',
      gradientTo: 'color-mix(in srgb, var(--accent) 12%, var(--black))',
    },
    {
      emoji: '📈',
      type: 'Startup Profile',
      title: 'Investor-ready business profile',
      description: 'A concise profile structure for explaining the business model, market, team, and growth direction.',
      year: '2026',
      tags: ['Startup', 'Pitch', 'Overview'],
      href: '/#contact',
      gradientFrom: 'var(--black)',
      gradientTo: 'var(--surface2)',
    },
    {
      emoji: '🤝',
      type: 'Proposal Support',
      title: 'Partnership profile document',
      description: 'A proposal-ready document for organizations introducing their work to partners and clients.',
      year: '2026',
      tags: ['Proposal', 'Partners', 'Profile'],
      href: '/#contact',
      gradientFrom: 'var(--surface)',
      gradientTo: 'color-mix(in srgb, var(--accent) 10%, var(--surface2))',
    },
  ],
  pricing: {
    eyebrow: 'Packages',
    title: 'Business profile packages starting from ETB 3,600.',
    subtitle: 'Choose a starter profile, a fuller company profile, or a custom document package for proposals and partnerships.',
    pricingPageHref: '/pricing/business-profile',
    note: 'Printing, photography, translation, and major content research are scoped separately when needed.',
    plans: [
      {
        name: 'Starter Profile',
        price: 'ETB 3,600',
        period: 'one-time',
        description: 'A focused business profile for small businesses that need a professional introduction.',
        features: ['Company overview', 'Services summary', 'Contact section', 'Share-ready PDF', '1 revision round'],
        cta: 'Start my profile',
        variant: 'outline',
        deliveryTime: '3-5 days',
        revisions: '1 round',
        support: '7 days',
      },
      {
        name: 'Company Profile',
        price: 'ETB 8,500',
        period: 'one-time',
        description: 'A fuller profile with stronger positioning, more sections, and a cleaner proposal-ready structure.',
        features: ['Business story', 'Service pages', 'Mission and values', 'Experience or proof points', 'Editable source file'],
        cta: 'Build my profile',
        variant: 'solid',
        featured: true,
        deliveryTime: '1-2 weeks',
        revisions: '2 rounds',
        support: '14 days',
      },
      {
        name: 'Profile System',
        price: 'Custom',
        period: 'project',
        description: 'For tenders, investors, partnerships, or multiple profile versions.',
        features: ['Custom structure', 'Proposal sections', 'Multiple versions', 'Source file handoff', 'Update support option'],
        cta: "Let's scope it",
        variant: 'outline',
        deliveryTime: 'Scoped timeline',
        revisions: 'Milestone based',
        support: 'Scoped support',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Business profile questions before we start.',
    faqs: [
      {
        question: 'Do you offer standalone visual asset work?',
        answer:
          'No. Our focus here is business profiles: structured company documents, service descriptions, proposal-ready PDFs, and related business presentation materials.',
      },
      {
        question: 'What do you need from me?',
        answer:
          'We need your company name, services, target clients, contact details, existing logo or brand assets if available, and any previous documents or notes you want included.',
      },
      {
        question: 'Can you write the content for me?',
        answer:
          'Yes. We can write from your notes, clean up existing text, or combine both. We keep the wording clear, professional, and easy for clients to understand.',
      },
      {
        question: 'Will I get an editable file?',
        answer:
          'The Company Profile and Profile System packages include an editable source file. Starter profiles include a final PDF, with editable handoff available as an add-on.',
      },
      {
        question: 'Can you make it bilingual?',
        answer:
          'We can structure bilingual profiles if translated content is provided. Translation can be scoped separately when needed.',
      },
      {
        question: 'Can this be used for tenders or proposals?',
        answer:
          'Yes. We can structure the profile to support proposals, tenders, partnerships, investor introductions, or client outreach.',
      },
    ],
  },
  cta: {
    headline: 'Need a professional business profile?',
    subtext: 'Send us your business details and we will turn them into a clear profile your team can share confidently.',
    primaryCTA: { label: 'Start a profile', href: '/#contact' },
    secondaryCTA: { label: 'See profile pricing', href: '/pricing/business-profile' },
    note: 'Starting from ETB 3,600. Final scope is confirmed before payment.',
  },
}
