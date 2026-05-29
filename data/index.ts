// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work',     href: '#work' },
  { label: 'Process',  href: '#process' },
  { label: 'Pricing',  href: '#pricing' },
  { label: 'Contact',  href: '#contact' },
]

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HERO_STATS = [
  {
    num: '30+',
    label: 'Projects delivered across web & mobile',
    tags: ['React', 'Next.js', 'Flutter', 'Vite', 'Node.js'],
    wide: true,
  },
  { num: '20+', label: 'Happy clients served' },
  { num: '2+',  label: 'Years in business' },
]

// ─── Ticker ───────────────────────────────────────────────────────────────────

export const TICKER_ITEMS = [
  'React', 'Next.js', 'Flutter', 'Vite',
  'Web Apps', 'Mobile Apps', 'Graphic Design',
  'Social Media', 'UI/UX', 'Addis Ababa',
]

// ─── Services ─────────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    num: '01',
    emoji: '🌐',
    title: 'Web Development',
    description:
      'Fast, beautiful web apps built with React, Next.js, and Vite — optimized for performance and conversion.',
    tags: ['React', 'Next.js', 'Vite'],
  },
  {
    num: '02',
    emoji: '📱',
    title: 'Mobile Apps',
    description:
      'Cross-platform mobile apps with Flutter that look and feel native on both iOS and Android.',
    tags: ['Flutter', 'iOS', 'Android'],
  },
  {
    num: '03',
    emoji: '🎨',
    title: 'Graphic Design',
    description:
      'Logos, brand identities, marketing materials, and visual assets that make your brand unforgettable.',
    tags: ['Branding', 'Print', 'Digital'],
  },
  {
    num: '04',
    emoji: '📣',
    title: 'Social Media Management',
    description:
      'Content creation, posting schedules, community engagement, and growth strategy for your brand.',
    tags: ['Instagram', 'TikTok', 'Telegram'],
  },
  {
    num: '05',
    emoji: '🖥️',
    title: 'UI/UX Design',
    description:
      'Wireframes, prototypes, and pixel-perfect interfaces designed for real users and measurable results.',
    tags: ['Figma', 'Prototyping'],
  },
  {
    num: '06',
    emoji: '⚙️',
    title: 'API & Backend',
    description:
      'RESTful APIs, databases, and integrations to power your product — built to scale from day one.',
    tags: ['Node.js', 'Supabase', 'Firebase'],
  },
]

// ─── Work / Portfolio ─────────────────────────────────────────────────────────

export const PROJECTS = [
  {
    id: 1,
    emoji: '🛒',
    type: 'Web App',
    theme: 't1',
    title: 'E-Commerce Platform',
    description: 'Full-stack Next.js store with payments, inventory & admin panel',
    year: '2024',
    href: '#',
  },
  {
    id: 2,
    emoji: '🚗',
    type: 'Mobile App',
    theme: 't2',
    title: 'Ride Booking App',
    description: 'Flutter app with real-time tracking, driver & rider flows',
    year: '2024',
    href: '#',
  },
  {
    id: 3,
    emoji: '☕',
    type: 'Branding',
    theme: 't3',
    title: 'Coffee Brand Identity',
    description: 'Full logo system, packaging & social media kit for a local café',
    year: '2024',
    href: '#',
  },
  {
    id: 4,
    emoji: '📊',
    type: 'Dashboard',
    theme: 't4',
    title: 'Analytics Dashboard',
    description: 'React + Recharts admin dashboard for a fintech startup',
    year: '2023',
    href: '#',
  },
  {
    id: 5,
    emoji: '🏥',
    type: 'Web App',
    theme: 't5',
    title: 'Clinic Booking System',
    description: 'Appointment scheduling, patient records & SMS notifications',
    year: '2023',
    href: '#',
  },
  {
    id: 6,
    emoji: '🧴',
    type: 'Social Media',
    theme: 't6',
    title: 'Skincare Brand Campaign',
    description: '3-month social media management & content strategy',
    year: '2023',
    href: '#',
  },
]

// ─── Process ──────────────────────────────────────────────────────────────────

export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Discovery call',
    description:
      'We spend 30 minutes understanding your business, goals, and what success looks like. No sales pressure — just listening and asking the right questions.',
  },
  {
    num: '02',
    title: 'Proposal & timeline',
    description:
      'A clear scope of work with a fixed price and delivery timeline. You know exactly what you\'re getting — and what it costs — before any work begins.',
  },
  {
    num: '03',
    title: 'Design & development',
    description:
      'We work in focused sprints and share progress regularly. Regular check-ins are built in so you\'re never left wondering what\'s happening.',
  },
  {
    num: '04',
    title: 'Review, launch & support',
    description:
      'Revisions are included. When you\'re 100% satisfied, we launch. Then we remain available for tweaks, updates, and whatever comes next.',
  },
]

export const TESTIMONIAL = {
  quote:
    '"They built our entire platform from scratch in under 3 weeks — clean code, beautiful UI, and they stayed reachable the whole way through. Best dev team we\'ve worked with."',
  name: 'Yonas Alemu',
  role: 'CEO, Habesha Tech',
  initials: 'YA',
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

export const PLANS = [
  {
    name: 'Starter',
    price: 'ETB 15,000',
    period: 'one-time',
    description: 'Perfect for small businesses that need a clean, professional online presence.',
    features: [
      '5-page responsive website',
      'Mobile-first design',
      'Contact form & WhatsApp',
      'Basic SEO setup',
      '3 rounds of revisions',
      '2 weeks delivery',
    ],
    cta: 'Get started',
    variant: 'outline' as const,
    featured: false,
  },
  {
    name: 'Growth',
    price: 'ETB 35,000',
    period: 'one-time',
    description: 'For businesses ready for a full-featured web app or mobile app.',
    features: [
      'Custom web or mobile app',
      'React / Next.js / Flutter',
      'Admin dashboard',
      'API & database setup',
      'Authentication & roles',
      'Unlimited revisions',
      '3–4 weeks delivery',
    ],
    cta: 'Get started',
    variant: 'solid' as const,
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Complex platforms, multi-role systems, and ongoing development partnerships.',
    features: [
      'Everything in Growth',
      'Custom integrations',
      'Payment systems',
      'Dedicated developer',
      'Monthly retainer available',
      'SLA support',
    ],
    cta: "Let's talk",
    variant: 'outline' as const,
    featured: false,
  },
]

// ─── Contact ──────────────────────────────────────────────────────────────────

export const CONTACT_CHANNELS = [
  { icon: '📞', label: '+251 9XX XXX XXX' },
  { icon: '✉️', label: 'hello@devstudio.et' },
  { icon: '💬', label: '@devstudio on Telegram' },
  { icon: '📍', label: 'Addis Ababa, Ethiopia' },
]

export const SERVICE_OPTIONS = [
  'Web App (React / Next.js)',
  'Mobile App (Flutter)',
  'Graphic Design',
  'Social Media Management',
  'UI/UX Design',
  'Full Package',
]

// ─── Footer ───────────────────────────────────────────────────────────────────

export const FOOTER_LINKS = {
  Services: [
    { label: 'Web Development',       href: '#services' },
    { label: 'Mobile Apps',           href: '#services' },
    { label: 'Graphic Design',        href: '#services' },
    { label: 'Social Media',          href: '#services' },
  ],
  Company: [
    { label: 'About us',  href: '#' },
    { label: 'Portfolio', href: '#work' },
    { label: 'Pricing',   href: '#pricing' },
    { label: 'Contact',   href: '#contact' },
  ],
  Contact: [
    { label: '+251 9XX XXX XXX', href: 'tel:+251900000000' },
    { label: 'hello@devstudio.et', href: 'mailto:hello@devstudio.et' },
    { label: 'Addis Ababa, ET',  href: '#' },
  ],
}

export const SOCIAL_LINKS = [
  { label: 'Facebook',  href: '#', short: 'fb' },
  { label: 'LinkedIn',  href: '#', short: 'in' },
  { label: 'Instagram', href: '#', short: 'ig' },
  { label: 'Telegram',  href: '#', short: 'tg' },
]