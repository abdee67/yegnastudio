// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'Process', href: '/#process' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Contact', href: '/#contact' },
]

export const SERVICES_NAV = [
  { label: 'Web Development', href: '/services/web-development', icon: '🌐', desc: 'React, Next.js & Vite apps' },
  { label: 'Mobile Apps', href: '/services/mobile-apps', icon: '📱', desc: 'Flutter iOS & Android' },
  { label: 'Business Profile', href: '/services/business-profile', icon: '🧾', desc: 'Company profiles & PDFs' },
  { label: 'UI/UX Design', href: '/services/ui-ux-design', icon: '🖥️', desc: 'Figma wireframes & systems' },
  { label: 'Social Media', href: '/services/social-media', icon: '📣', desc: 'Strategy & content creation' },
]

export const PRICING_NAV = [
  { label: 'Web Development', href: '/pricing/web-development', icon: '🌐', desc: 'Starting ETB 20,000' },
  { label: 'Mobile Apps', href: '/pricing/mobile-apps', icon: '📱', desc: 'Starting ETB 25,000' },
  { label: 'Business Profile', href: '/pricing/business-profile', icon: '🧾', desc: 'Starting ETB 3,600' },
  { label: 'UI/UX Design', href: '/pricing/ui-ux-design', icon: '🖥️', desc: 'Starting ETB 8,000' },
  { label: 'Social Media', href: '/pricing/social-media', icon: '📣', desc: 'Starting ETB 3,000/mo' },
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
  { num: '2+', label: 'Years in business' },
]

// ─── Ticker ───────────────────────────────────────────────────────────────────

export const TICKER_ITEMS = [
  'React', 'Next.js', 'Flutter', 'Vite',
  'Web Apps', 'Mobile Apps', 'Business Profiles',
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
    emoji: '🧾',
    title: 'Business Profile',
    description:
      'Professional company profiles, capability statements, and proposal-ready PDFs starting from ETB 3,600.',
    tags: ['Company Profile', 'PDF', 'Proposal'],
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
    emoji: '🥗',
    type: 'Nutrition & Health',
    theme: 't1',
    title: 'CORD Consultancy',
    description: 'A polished consultancy website for nutrition, health programs, and field-based community work.',
    year: '2026',
    href: 'https://www.cordconsultancy.com/',
    image: '/images/converted/cord1.webp',
    imageAlt: 'CORD Consultancy website homepage screenshot',
    tags: ['Consultancy', 'Responsive Site', 'Health'],
  },
  {
    id: 2,
    emoji: '🎬',
    type: 'Branding Company',
    theme: 't2',
    title: 'Mika Creation',
    description: 'A cinematic branding company website with bold visual direction and portfolio-first storytelling.',
    year: '2026',
    href: 'https://mika-creation.vercel.app/',
    image: '/images/converted/mika1.webp',
    imageAlt: 'Mika Creation website homepage screenshot',
    tags: ['Branding', 'Portfolio', 'Vercel'],
  },
  {
    id: 3,
    emoji: '🧠',
    type: 'Personal Development',
    theme: 't3',
    title: 'Great Minds Growth',
    description: 'A personal growth site for mindset transformation, emotional resilience, and coaching discovery.',
    year: '2026',
    href: 'https://great-minds-growth.netlify.app/',
    image: '/images/converted/greatMinds.webp',
    imageAlt: 'Great Minds Growth website homepage screenshot',
    tags: ['Coaching', 'Growth', 'Netlify'],
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
    '"የኛstudio understood our mission at CORD Consultancy and turned it into a clear, polished website. The team was responsive, organized, and delivered a platform that helps us present our nutrition and health work with confidence."',
  name: 'CORD Consultancy CEO',
  role: 'Nutrition & Health Consultancy',
  initials: 'CC',
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

export const PLANS = [
  {
    name: 'Starter',
    price: 'ETB 20,000',
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
  { icon: '📞', label: '+251 977 764 845' },
  { icon: '📞', label: '+251 901 889 188' },
  { icon: '✉️', label: 'hello@yegnastudio.et' },
  { icon: '💬', label: '@yegnastudio on Telegram' },
  { icon: '📍', label: 'Addis Ababa, Ethiopia' },
]

export const SERVICE_OPTIONS = [
  'Web App (React / Next.js)',
  'Mobile App (Flutter)',
  'Business Profile',
  'Social Media Management',
  'UI/UX Design',
  'Full Package',
]

// ─── Footer ───────────────────────────────────────────────────────────────────

export const FOOTER_LINKS = {
  Services: [
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'Mobile Apps', href: '/services/mobile-apps' },
    { label: 'Business Profile', href: '/services/business-profile' },
    { label: 'Social Media', href: '/services/social-media' },
  ],
  Company: [
    { label: 'About us', href: '#' },
    { label: 'Portfolio', href: '/#work' },
    { label: 'Pricing', href: '/pricing/web-development' },
    { label: 'Contact', href: '/#contact' },
  ],
  Contact: [
    { label: '+251 977 764 845', href: 'tel:+251977764845' },
    { label: '+251 901 889 188', href: 'tel:+251901889188' },
    { label: 'hello@yegnastudio.et', href: 'mailto:hello@yegnastudio.et' },
    { label: '@yegnastudio on Telegram', href: 'https://t.me/yegnastudio' },
    { label: 'Addis Ababa, Ethiopia', href: 'https://maps.google.com/?q=Addis%20Ababa%2C%20Ethiopia' },
  ],
}

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#', short: 'fb' },
  { label: 'LinkedIn', href: '#', short: 'in' },
  { label: 'Instagram', href: '#', short: 'ig' },
  { label: 'Telegram', href: 'https://t.me/yegnastudio', short: 'tg' },
]
