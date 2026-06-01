import type { ServicePageData } from '@/types/service'

export const uiUxDesignService: ServicePageData = {
  slug: 'ui-ux-design',
  name: 'UI/UX Design',
  meta: {
    title: 'UI/UX Design in Addis Ababa | የኛstudio',
    description: 'UI/UX design in Addis Ababa for research, wireframes, prototypes, design systems and usability-focused digital products.',
    keywords: [
      'UI UX design Addis Ababa',
      'Figma designer Ethiopia',
      'product design Ethiopia',
      'wireframes Ethiopia',
      'prototype design',
      'design systems',
      'usability testing',
      'app design Addis Ababa',
      'website UX design',
    ],
    ogTitle: 'UI/UX Design for Websites and Apps',
    ogDescription: 'Research, wireframes, prototypes, design systems, and usability-minded interfaces for digital products.',
  },
  hero: {
    badge: 'UI/UX Design',
    headline: 'Interfaces users\nunderstand fast',
    accentPhrase: 'understand fast',
    subheadline:
      'We turn complex product ideas into clear flows, polished screens, and reusable design systems before code gets expensive.',
    primaryCTA: { label: 'Start a UX project', href: '/#contact' },
    secondaryCTA: { label: 'View pricing', href: '/pricing/ui-ux-design' },
    stats: [
      { num: '20+', label: 'product flows mapped and refined' },
      { num: '5d', label: 'typical wireframe sprint' },
      { num: '3x', label: 'faster feedback with prototypes' },
    ],
  },
  overview: {
    eyebrow: 'What you get',
    title: 'A product design process that reduces confusion before build.',
    description: [
      'Great interfaces make the next step feel obvious. We design around user tasks, business goals, and the constraints developers will face during implementation.',
      'Our UI/UX work includes user journey mapping, wireframes, clickable prototypes, high-fidelity interface design, component systems, and usability review.',
      'The result is a cleaner product plan: fewer surprises in development, easier stakeholder approval, and a design language that can grow with the product.',
    ],
    highlights: [
      { icon: '🧠', title: 'Research-informed flows', description: 'We identify user goals, friction points, and decisions before designing screens.' },
      { icon: '🗺️', title: 'Wireframes first', description: 'Structure and hierarchy are validated before visual polish takes over.' },
      { icon: '🧪', title: 'Prototype feedback', description: 'Clickable flows make stakeholder and user review much more concrete.' },
      { icon: '📐', title: 'Reusable systems', description: 'Components, states, and patterns are designed for repeated product use.' },
    ],
  },
  howWeDiffer: {
    eyebrow: 'Why የኛstudio',
    title: 'We design with implementation in mind from the first flow.',
    subtitle: 'Our design work is meant to survive development, not impress only in a static presentation.',
    differentiators: [
      { num: '01', title: 'Flow clarity', description: 'We map what users need to do and remove unnecessary decisions from the path.' },
      { num: '02', title: 'Developer-ready handoff', description: 'Spacing, states, components, and responsive notes are organized for build.' },
      { num: '03', title: 'Realistic scope', description: 'We help you separate the MVP from future improvements before design expands.' },
      { num: '04', title: 'Visual restraint', description: 'The interface looks polished without sacrificing readability, hierarchy, or task speed.' },
    ],
  },
  process: {
    eyebrow: 'How it works',
    title: 'A practical path from product questions to interface system.',
    steps: [
      { num: '01', title: 'Discovery and users', description: 'We define audiences, jobs, workflows, and constraints.', deliverable: 'UX brief' },
      { num: '02', title: 'Journey mapping', description: 'We outline key paths, states, edge cases, and content needs.', deliverable: 'User flows' },
      { num: '03', title: 'Wireframes', description: 'We design low-fidelity screens to validate structure and hierarchy.', deliverable: 'Wireframe set' },
      { num: '04', title: 'Visual design', description: 'We apply the visual system, components, and responsive layouts.', deliverable: 'High-fidelity UI' },
      { num: '05', title: 'Prototype and handoff', description: 'We connect flows, annotate behavior, and prepare developer-ready files.', deliverable: 'Prototype and specs' },
    ],
  },
  techStack: {
    eyebrow: 'Tools we use',
    title: 'Design tooling for clarity, testing, and smooth handoff.',
    tools: [
      { name: 'Figma', category: 'Design', description: 'Wireframes, high-fidelity UI, prototypes, and component systems.', proficiency: 'Expert' },
      { name: 'FigJam', category: 'Research', description: 'Journey maps, affinity notes, stakeholder workshops, and flow planning.', proficiency: 'Advanced' },
      { name: 'Design Systems', category: 'Systems', description: 'Tokens, components, variants, responsive rules, and usage notes.', proficiency: 'Advanced' },
      { name: 'Prototyping', category: 'Validation', description: 'Clickable user flows for stakeholder review and usability feedback.', proficiency: 'Expert' },
      { name: 'Usability Review', category: 'Validation', description: 'Heuristic checks for clarity, accessibility, and friction points.', proficiency: 'Advanced' },
      { name: 'Developer Handoff', category: 'Delivery', description: 'Specs, states, assets, and interaction notes for implementation.', proficiency: 'Advanced' },
    ],
  },
  projects: [
    {
      emoji: '📊',
      type: 'SaaS',
      title: 'Analytics dashboard UX',
      description: 'Information architecture, dashboard states, filters, and manager review flows for an operations tool.',
      year: '2024',
      tags: ['Dashboard', 'Design System', 'Figma'],
      href: '/#work',
      gradientFrom: 'var(--surface2)',
      gradientTo: 'color-mix(in srgb, var(--accent) 13%, var(--black))',
    },
    {
      emoji: '🛒',
      type: 'Commerce',
      title: 'Checkout flow redesign',
      description: 'A mobile-first purchase path with clearer product choices, cart states, and confirmation screens.',
      year: '2024',
      tags: ['Wireframes', 'Prototype', 'Mobile'],
      href: '/#work',
      gradientFrom: 'var(--black)',
      gradientTo: 'var(--surface2)',
    },
    {
      emoji: '🏥',
      type: 'Healthcare',
      title: 'Appointment product design',
      description: 'Patient booking, staff triage, empty states, and responsive UI specs for a clinic system.',
      year: '2023',
      tags: ['UX Flow', 'Forms', 'Handoff'],
      href: '/#work',
      gradientFrom: 'var(--surface)',
      gradientTo: 'color-mix(in srgb, var(--accent) 10%, var(--surface2))',
    },
  ],
  pricing: {
    eyebrow: 'Packages',
    title: 'UX packages for clearer products before development.',
    subtitle: 'Use design to validate flow, speed up build, and reduce rework.',
    pricingPageHref: '/pricing/ui-ux-design',
    note: 'Research depth, number of user roles, and screen count affect final scope.',
    plans: [
      {
        name: 'UX Sprint',
        price: 'ETB 8,000',
        period: 'one-time',
        description: 'A short sprint to clarify one product flow or page set.',
        features: ['Discovery session', 'User flow map', 'Low-fidelity wireframes', 'Review call'],
        cta: 'Start sprint',
        variant: 'outline',
        deliveryTime: '~1 week',
        revisions: '2 rounds',
        support: '7 days',
      },
      {
        name: 'Product Design',
        price: 'ETB 28,000',
        period: 'one-time',
        description: 'A full UI/UX package for a website, app, or dashboard MVP.',
        features: ['User journeys', 'Wireframes', 'High-fidelity screens', 'Clickable prototype', 'Handoff specs'],
        cta: 'Design my product',
        variant: 'solid',
        featured: true,
        deliveryTime: '3-4 weeks',
        revisions: '3 rounds',
        support: '14 days',
      },
      {
        name: 'Design System',
        price: 'Custom',
        period: 'project',
        description: 'A reusable component system for growing digital products.',
        features: ['Component audit', 'Token system', 'Responsive patterns', 'State library', 'Documentation'],
        cta: "Let's scope it",
        variant: 'outline',
        deliveryTime: 'Scoped timeline',
        revisions: 'Milestone based',
        support: 'System support',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'UI/UX design questions before we start.',
    faqs: [
      {
        question: 'Do I need UI/UX before development?',
        answer:
          'For most apps, dashboards, and custom websites, yes. Design clarifies scope, user flow, content, and responsive behavior before engineering time becomes expensive.',
      },
      {
        question: 'Can you design only wireframes?',
        answer:
          'Yes. A wireframe-only sprint is useful when you need structure and product clarity before deciding on visual direction or development.',
      },
      {
        question: 'Will developers understand the handoff?',
        answer:
          'We prepare organized Figma files with components, states, spacing, responsive notes, and flow context so developers can implement with fewer assumptions.',
      },
      {
        question: 'Do you do user testing?',
        answer:
          'We can run lightweight usability reviews, stakeholder walkthroughs, and prototype tests. Larger research programs can be scoped separately.',
      },
      {
        question: 'Can you improve an existing app design?',
        answer:
          'Yes. We can audit the existing interface, identify friction, redesign key flows, and provide a more consistent component system.',
      },
      {
        question: 'What do I get at the end?',
        answer:
          'You receive the Figma design files, clickable prototype when included, exported assets, and handoff notes for implementation.',
      },
    ],
  },
  cta: {
    headline: 'Want users to move through your product with less friction?',
    subtext: 'Let’s map the flow, sharpen the interface, and make the build path clearer.',
    primaryCTA: { label: 'Start a UX project', href: '/#contact' },
    secondaryCTA: { label: 'See UX pricing', href: '/pricing/ui-ux-design' },
    note: 'Best started before development, still useful during redesign.',
  },
}
