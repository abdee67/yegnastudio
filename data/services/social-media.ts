import type { ServicePageData } from '@/types/service'

export const socialMediaService: ServicePageData = {
  slug: 'social-media',
  name: 'Social Media',
  meta: {
    title: 'Social Media Management Addis Ababa | የኛstudio',
    description: 'Social media management in Addis Ababa with strategy, content creation, posting schedules, community support and analytics.',
    keywords: [
      'social media management Addis Ababa',
      'content creation Ethiopia',
      'Instagram management Ethiopia',
      'TikTok content Ethiopia',
      'Telegram marketing Ethiopia',
      'social media strategy',
      'community management',
      'content calendar',
      'brand social media',
    ],
    ogTitle: 'Social Media Management for Ethiopian Brands',
    ogDescription: 'Strategy, content creation, posting schedules, community management, and analytics for consistent brand growth.',
  },
  hero: {
    badge: 'Social Media',
    headline: 'Content your audience\nrecognizes',
    accentPhrase: 'recognizes',
    subheadline:
      'We help brands plan, create, publish, and measure social content that stays consistent, useful, and aligned with business goals.',
    primaryCTA: { label: 'Start social management', href: '/#contact' },
    secondaryCTA: { label: 'View pricing', href: '/pricing/social-media' },
    stats: [
      { num: '12+', label: 'monthly posts in a starter calendar' },
      { num: '4', label: 'content pillars defined per brand' },
      { num: '30d', label: 'reporting cycle for active retainers' },
    ],
  },
  overview: {
    eyebrow: 'What you get',
    title: 'A consistent social presence without daily improvisation.',
    description: [
      'Most brands do not fail at social because they lack ideas. They fail because the ideas are scattered, inconsistent, and hard to turn into a weekly rhythm.',
      'We build a clear content strategy, create post assets, write captions, plan publishing schedules, support community responses, and report what is working.',
      'The goal is not random activity. It is a recognizable voice, useful content pillars, and repeatable production your audience can learn to expect.',
    ],
    highlights: [
      { icon: '📅', title: 'Planned calendars', description: 'Weekly and monthly schedules tied to campaigns, offers, and audience habits.' },
      { icon: '🎥', title: 'Content creation', description: 'Posts, carousels, short-form scripts, captions, and campaign asset direction.' },
      { icon: '💬', title: 'Community rhythm', description: 'Response guidance, comment tracking, and message patterns for common questions.' },
      { icon: '📈', title: 'Reporting', description: 'Readable performance summaries that shape the next month of content.' },
    ],
  },
  howWeDiffer: {
    eyebrow: 'Why የኛstudio',
    title: 'We connect social content to the rest of your digital presence.',
    subtitle: 'Because posts work better when they point to clear offers, landing pages, campaigns, and brand systems.',
    differentiators: [
      { num: '01', title: 'Strategy before posting', description: 'We define audience, offer, tone, pillars, and content formats before filling a calendar.' },
      { num: '02', title: 'Design consistency', description: 'Posts, covers, stories, and campaign assets follow a recognizable visual system.' },
      { num: '03', title: 'Platform-aware planning', description: 'Instagram, TikTok, Telegram, LinkedIn, and Facebook each get formats that fit the channel.' },
      { num: '04', title: 'Measured improvement', description: 'Monthly reporting informs the next batch instead of leaving content decisions to guesswork.' },
    ],
  },
  process: {
    eyebrow: 'How it works',
    title: 'A monthly social workflow that stays organized.',
    steps: [
      { num: '01', title: 'Brand and audience audit', description: 'We review your current presence, offers, competitors, and audience signals.', deliverable: 'Social audit' },
      { num: '02', title: 'Content strategy', description: 'We define pillars, tone, formats, posting rhythm, and campaign priorities.', deliverable: 'Strategy map' },
      { num: '03', title: 'Calendar planning', description: 'We plan post topics, captions, creative needs, and approval dates.', deliverable: 'Content calendar' },
      { num: '04', title: 'Creation and publishing', description: 'We create assets, refine copy, schedule content, and support responses.', deliverable: 'Published content' },
      { num: '05', title: 'Report and adjust', description: 'We review performance and update the next cycle based on evidence.', deliverable: 'Monthly report' },
    ],
  },
  techStack: {
    eyebrow: 'Tools we use',
    title: 'A practical toolkit for planning, design, publishing, and reporting.',
    tools: [
      { name: 'Figma', category: 'Design', description: 'Reusable post, story, cover, and campaign templates.', proficiency: 'Advanced' },
      { name: 'Canva', category: 'Design', description: 'Editable assets for teams that need simple internal updates.', proficiency: 'Advanced' },
      { name: 'Meta Business Suite', category: 'Publishing', description: 'Scheduling and performance review for Instagram and Facebook.', proficiency: 'Advanced' },
      { name: 'TikTok Planning', category: 'Publishing', description: 'Short-form script planning, hooks, and publishing rhythm.', proficiency: 'Proficient' },
      { name: 'Telegram', category: 'Community', description: 'Channel and group content planning for Ethiopian audience behavior.', proficiency: 'Advanced' },
      { name: 'Analytics Reports', category: 'Reporting', description: 'Monthly summaries of reach, engagement, content types, and next actions.', proficiency: 'Advanced' },
    ],
  },
  projects: [
    {
      emoji: '🧴',
      type: 'Campaign',
      title: 'Skincare content system',
      description: 'A monthly calendar, product education posts, reels scripts, and campaign assets for a beauty brand.',
      year: '2024',
      tags: ['Instagram', 'Reels', 'Design'],
      href: '/#work',
      gradientFrom: 'var(--surface2)',
      gradientTo: 'color-mix(in srgb, var(--accent) 12%, var(--black))',
    },
    {
      emoji: '☕',
      type: 'Local Brand',
      title: 'Cafe launch content',
      description: 'Launch-week teasers, menu posts, location content, and Telegram community announcements.',
      year: '2024',
      tags: ['Launch', 'Telegram', 'Campaign'],
      href: '/#work',
      gradientFrom: 'var(--black)',
      gradientTo: 'var(--surface2)',
    },
    {
      emoji: '🏋️',
      type: 'Fitness',
      title: 'Membership growth calendar',
      description: 'Offer-focused posts, transformation stories, class reminders, and monthly reporting for a gym.',
      year: '2023',
      tags: ['Calendar', 'Community', 'Reports'],
      href: '/#work',
      gradientFrom: 'var(--surface)',
      gradientTo: 'color-mix(in srgb, var(--accent) 10%, var(--surface2))',
    },
  ],
  pricing: {
    eyebrow: 'Packages',
    title: 'Social media packages for consistent monthly momentum.',
    subtitle: 'Start with strategy, then add content production and community support as your channels grow.',
    pricingPageHref: '/pricing/social-media',
    note: 'Paid ad spend, influencer fees, and professional photography are scoped separately.',
    plans: [
      {
        name: 'Starter',
        price: 'ETB 3,000',
        period: 'monthly',
        description: 'A light monthly plan for brands that need a reliable posting rhythm.',
        features: ['Content calendar', '12 static posts', 'Captions', 'Basic scheduling', 'Monthly summary'],
        cta: 'Start monthly',
        variant: 'outline',
        deliveryTime: 'Monthly cycle',
        revisions: '1 approval round',
        support: 'Business hours',
      },
      {
        name: 'Growth',
        price: 'ETB 9,000',
        period: 'monthly',
        description: 'Strategy, richer content, and reporting for brands actively growing attention.',
        features: ['Content strategy', '20 posts', '4 short-form scripts', 'Community guidance', 'Performance report'],
        cta: 'Grow my channels',
        variant: 'solid',
        featured: true,
        deliveryTime: 'Monthly cycle',
        revisions: '2 approval rounds',
        support: 'Weekly check-in',
      },
      {
        name: 'Campaign',
        price: 'Custom',
        period: 'project',
        description: 'Focused launches, events, offers, or seasonal campaigns across platforms.',
        features: ['Campaign concept', 'Asset suite', 'Posting plan', 'Launch monitoring', 'Final report'],
        cta: "Let's plan it",
        variant: 'outline',
        deliveryTime: 'Campaign timeline',
        revisions: 'Milestone based',
        support: 'Campaign window',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Social media questions before we start.',
    faqs: [
      {
        question: 'Do you create the content or only plan it?',
        answer:
          'Both options are available. We can create posts, captions, scripts, and templates, or provide a strategy and calendar for your internal team to execute.',
      },
      {
        question: 'Which platforms do you manage?',
        answer:
          'We commonly support Instagram, Facebook, TikTok, Telegram, and LinkedIn. We choose channels based on your audience and content capacity.',
      },
      {
        question: 'Do you respond to comments and messages?',
        answer:
          'Community management can be included. We create response guidelines and escalation rules so messages are handled consistently.',
      },
      {
        question: 'Can you run ads?',
        answer:
          'We can plan campaign creative and coordinate ad-ready assets. Paid media setup and ad spend are scoped separately depending on goals and budget.',
      },
      {
        question: 'How quickly will we see results?',
        answer:
          'Consistency matters. Some posts perform immediately, but a useful signal usually appears after one to three monthly cycles of posting, learning, and adjusting.',
      },
      {
        question: 'Do you need photos and videos from us?',
        answer:
          'If your business depends on real products, people, or locations, authentic source media helps a lot. We can also guide a simple content capture checklist.',
      },
    ],
  },
  cta: {
    headline: 'Ready to stop posting at random?',
    subtext: 'Let’s turn your social channels into a planned, recognizable part of your brand.',
    primaryCTA: { label: 'Start social management', href: '/#contact' },
    secondaryCTA: { label: 'See social pricing', href: '/pricing/social-media' },
    note: 'Monthly plans start with a strategy and calendar setup.',
  },
}
