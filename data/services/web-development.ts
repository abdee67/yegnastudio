import type { ServicePageData } from '@/types/service'

export const webDevelopmentService: ServicePageData = {
  slug: 'web-development',
  name: 'Web Development',
  meta: {
    title: 'Web Development in Addis Ababa | የኛstudio',
    description: 'Custom React, Next.js and Vite web development in Addis Ababa for fast, secure business websites and scalable web apps.',
    keywords: [
      'web development Addis Ababa',
      'React developer Ethiopia',
      'Next.js agency Ethiopia',
      'Vite web apps',
      'TypeScript development',
      'Supabase developer',
      'business website Ethiopia',
      'web app development',
      'Tailwind CSS agency',
    ],
    ogTitle: 'Web Development for Ethiopian Businesses',
    ogDescription: 'Launch fast, polished websites and web apps with React, Next.js, Vite, TypeScript and Supabase.',
  },
  hero: {
    badge: 'Web Development',
    headline: 'Websites that\nwin business',
    accentPhrase: 'win business',
    subheadline:
      'We build responsive websites and product-grade web apps that load quickly, feel premium, and give your team the tools to grow.',
    primaryCTA: { label: 'Start a web project', href: '/#contact' },
    secondaryCTA: { label: 'View pricing', href: '/pricing/web-development' },
    stats: [
      { num: '30+', label: 'web and app launches shipped' },
      { num: '95%', label: 'target Lighthouse performance' },
      { num: '14d', label: 'typical starter website delivery' },
    ],
  },
  overview: {
    eyebrow: 'What you get',
    title: 'A web presence built for credibility, speed, and conversion.',
    description: [
      'Your website is often the first serious conversation a customer has with your business. We design and build that moment with structure, clarity, and technical care.',
      'Our web work covers polished company websites, landing pages, dashboards, portals, booking systems, and custom web applications using the modern React ecosystem.',
      'Every build includes responsive layouts, performance-minded engineering, SEO foundations, analytics readiness, and a handoff your team can actually use.',
    ],
    highlights: [
      { icon: '⚡', title: 'Fast by default', description: 'Performance budgets, optimized assets, and clean frontend architecture from day one.' },
      { icon: '🔒', title: 'Secure flows', description: 'Authentication, forms, role access, and database rules planned before launch.' },
      { icon: '🧭', title: 'Clear journeys', description: 'Pages are structured around what visitors need to understand and do next.' },
      { icon: '🛠️', title: 'Easy to maintain', description: 'Typed components, tidy data models, and documentation for future updates.' },
    ],
  },
  howWeDiffer: {
    eyebrow: 'Why የኛstudio',
    title: 'We treat your website like a working product, not a brochure.',
    subtitle:
      'That means design, code, launch planning, and post-launch support move together instead of being handed across a messy gap.',
    differentiators: [
      { num: '01', title: 'Business-first scope', description: 'We start with offers, audiences, workflows, and success metrics before opening the editor.' },
      { num: '02', title: 'Modern stack decisions', description: 'React, Next.js, Vite, TypeScript, Tailwind CSS, and Supabase are chosen when they fit the job.' },
      { num: '03', title: 'Visible progress', description: 'You get milestone previews, clear feedback windows, and a build that never disappears into silence.' },
      { num: '04', title: 'Launch ownership', description: 'We handle deployment, SEO basics, analytics setup, and the small details that make launch feel calm.' },
    ],
  },
  process: {
    eyebrow: 'How it works',
    title: 'A focused web process from idea to launch.',
    steps: [
      { num: '01', title: 'Discovery and sitemap', description: 'We clarify the audience, content, functionality, and conversion path.', deliverable: 'Scope and sitemap' },
      { num: '02', title: 'Wireframe and content plan', description: 'We map the page structure and identify the copy, assets, and data needed.', deliverable: 'Wireframes' },
      { num: '03', title: 'Interface design', description: 'We create the visual system and responsive page designs before build.', deliverable: 'Design preview' },
      { num: '04', title: 'Development sprint', description: 'We build the site or app with typed components, route structure, and integrations.', deliverable: 'Staging link' },
      { num: '05', title: 'QA and launch', description: 'We test responsiveness, forms, metadata, performance, and deployment settings.', deliverable: 'Live release' },
    ],
  },
  techStack: {
    eyebrow: 'Tools we use',
    title: 'A stack selected for speed, polish, and maintainability.',
    tools: [
      { name: 'Next.js', category: 'Frontend', description: 'App Router websites, SEO-ready pages, and production deployments.', proficiency: 'Expert' },
      { name: 'React', category: 'Frontend', description: 'Reusable UI systems for sites, dashboards, and product interfaces.', proficiency: 'Expert' },
      { name: 'Vite', category: 'Frontend', description: 'Lean single-page apps and internal tools with fast iteration.', proficiency: 'Advanced' },
      { name: 'TypeScript', category: 'Engineering', description: 'Strict typing for safer components, APIs, and data contracts.', proficiency: 'Expert' },
      { name: 'Tailwind CSS', category: 'Design System', description: 'Responsive, token-driven styling without heavy CSS overhead.', proficiency: 'Expert' },
      { name: 'Supabase', category: 'Backend', description: 'Postgres, auth, storage, and secure data-backed workflows.', proficiency: 'Advanced' },
      { name: 'Firebase', category: 'Backend', description: 'Realtime app features, auth, and lightweight cloud services.', proficiency: 'Advanced' },
      { name: 'Vercel', category: 'Deployment', description: 'Preview deployments, production hosting, and performance insights.', proficiency: 'Advanced' },
    ],
  },
  projects: [
    {
      emoji: '🛒',
      type: 'Commerce',
      title: 'Retail ordering platform',
      description: 'A Next.js storefront with product filtering, checkout handoff, and an admin-ready product model.',
      year: '2024',
      tags: ['Next.js', 'Supabase', 'SEO'],
      href: '/#work',
      gradientFrom: 'var(--surface2)',
      gradientTo: 'color-mix(in srgb, var(--accent) 16%, var(--black))',
    },
    {
      emoji: '📊',
      type: 'Dashboard',
      title: 'Operations analytics dashboard',
      description: 'A typed React dashboard for weekly reporting, branch comparison, and manager-level access.',
      year: '2024',
      tags: ['React', 'TypeScript', 'Charts'],
      href: '/#work',
      gradientFrom: 'var(--black)',
      gradientTo: 'var(--surface2)',
    },
    {
      emoji: '🏥',
      type: 'Booking',
      title: 'Clinic appointment system',
      description: 'A mobile-first booking flow with patient intake forms, staff notifications, and calendar-ready data.',
      year: '2023',
      tags: ['Forms', 'Auth', 'Responsive'],
      href: '/#work',
      gradientFrom: 'var(--surface)',
      gradientTo: 'color-mix(in srgb, var(--accent) 12%, var(--surface2))',
    },
  ],
  pricing: {
    eyebrow: 'Packages',
    title: 'Choose the right starting point for your web build.',
    subtitle: 'Every package includes responsive implementation, launch support, and practical guidance.',
    pricingPageHref: '/pricing/web-development',
    note: 'Final pricing depends on scope, integrations, content readiness, and timeline.',
    plans: [
      {
        name: 'Starter',
        price: 'ETB 15,000',
        period: 'one-time',
        description: 'A polished website for small businesses that need credibility fast.',
        features: ['Up to 5 pages', 'Responsive layout', 'Contact form', 'Basic SEO setup', 'Analytics-ready launch'],
        cta: 'Get started',
        variant: 'outline',
        deliveryTime: '~2 weeks',
        revisions: '3 rounds',
        support: '14 days',
      },
      {
        name: 'Growth',
        price: 'ETB 35,000',
        period: 'one-time',
        description: 'A custom site or lightweight web app with richer content and integrations.',
        features: ['Custom UI system', 'CMS or database setup', 'Authentication option', 'Performance pass', 'Deployment support'],
        cta: 'Plan my build',
        variant: 'solid',
        featured: true,
        deliveryTime: '3-4 weeks',
        revisions: 'Unlimited within scope',
        support: '30 days',
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'project',
        description: 'For platforms, dashboards, marketplaces, and long-term development needs.',
        features: ['Architecture planning', 'Multi-role workflows', 'API integrations', 'Testing plan', 'Retainer option'],
        cta: "Let's talk",
        variant: 'outline',
        deliveryTime: 'Scoped timeline',
        revisions: 'Milestone based',
        support: 'SLA available',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Web development questions we hear often.',
    faqs: [
      {
        question: 'Do you build only marketing websites?',
        answer:
          'No. We build company websites, landing pages, dashboards, booking systems, portals, and custom web applications. The scope determines whether we use a static site, a CMS, a database, authentication, or a full product architecture.',
      },
      {
        question: 'Can you redesign an existing website?',
        answer:
          'Yes. We can audit your current site, keep what works, restructure what does not, and rebuild the experience with a cleaner design and stronger technical foundation.',
      },
      {
        question: 'Will my website be SEO friendly?',
        answer:
          'We include technical SEO basics such as metadata, semantic structure, sitemap readiness, performance practices, and responsive behavior. Content strategy and ongoing SEO campaigns can be added if needed.',
      },
      {
        question: 'Can you connect payments or dashboards?',
        answer:
          'Yes. We can connect payment providers, admin dashboards, database workflows, analytics, email notifications, and third-party APIs depending on your business process.',
      },
      {
        question: 'Do you provide hosting?',
        answer:
          'We help set up deployment on a reliable hosting platform and can manage the launch configuration. If you want ongoing hosting and maintenance handled for you, we can include that as a retainer.',
      },
      {
        question: 'What do you need from me to start?',
        answer:
          'We need your business goals, preferred pages or features, brand assets if available, example sites you like, and a decision maker who can provide feedback during review windows.',
      },
    ],
  },
  cta: {
    headline: 'Ready to build a website that earns trust?',
    subtext:
      'Tell us what you want the site to do, and we will recommend the simplest strong path to launch.',
    primaryCTA: { label: 'Start a web project', href: '/#contact' },
    secondaryCTA: { label: 'See web pricing', href: '/pricing/web-development' },
    note: 'Free consultation. Clear scope before any payment.',
  },
}
