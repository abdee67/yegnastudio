import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import HowWeDiffer from '@/components/service-page/HowWeDiffer'
import OurProcess from '@/components/service-page/OurProcess'
import ServiceCTA from '@/components/service-page/ServiceCTA'
import ServiceFAQ from '@/components/service-page/ServiceFAQ'
import ServiceHero from '@/components/service-page/ServiceHero'
import ServiceOverview from '@/components/service-page/ServiceOverview'
import ServicePricing from '@/components/service-page/ServicePricing'
import ServiceProjects from '@/components/service-page/ServiceProjects'
import TechStack from '@/components/service-page/TechStack'
import JsonLd from '@/components/ui/JsonLd'
import { BRAND_DOMAIN, BRAND_NAME } from '@/data/brand'
import { getServiceData, SERVICE_DATA_MAP, SERVICE_SLUGS } from '@/data/services'

type ServicePageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false
export const revalidate = false

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const data = getServiceData(slug)

  if (!data) {
    return { title: 'Not Found' }
  }

  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords,
    authors: [{ name: BRAND_NAME, url: BRAND_DOMAIN }],
    openGraph: {
      title: data.meta.ogTitle ?? data.meta.title,
      description: data.meta.ogDescription ?? data.meta.description,
      type: 'website',
      locale: 'en_ET',
      siteName: BRAND_NAME,
      url: `${BRAND_DOMAIN}/services/${slug}`,
      images: [
        {
          url: `/og/${slug}.png`,
          width: 1200,
          height: 630,
          alt: data.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.meta.title,
      description: data.meta.description,
      images: [`/og/${slug}.png`],
    },
    alternates: {
      canonical: `${BRAND_DOMAIN}/services/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
  }
}

function serviceJsonLd(slug: string) {
  const data = SERVICE_DATA_MAP[slug as keyof typeof SERVICE_DATA_MAP]

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.name,
    provider: {
      '@type': 'Organization',
      name: BRAND_NAME,
      url: BRAND_DOMAIN,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Addis Ababa',
        addressCountry: 'ET',
      },
    },
    description: data.meta.description,
    areaServed: 'ET',
    serviceType: data.name,
  }
}

function faqJsonLd(slug: string) {
  const data = SERVICE_DATA_MAP[slug as keyof typeof SERVICE_DATA_MAP]

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const data = getServiceData(slug)

  if (!data) {
    notFound()
  }

  return (
    <>
      <JsonLd data={serviceJsonLd(slug)} />
      <JsonLd data={faqJsonLd(slug)} />
      <ServiceHero {...data.hero} />
      <ServiceOverview {...data.overview} />
      <HowWeDiffer {...data.howWeDiffer} />
      <OurProcess {...data.process} />
      <TechStack {...data.techStack} />
      <ServiceProjects eyebrow="Relevant work" title="Projects shaped around this service." projects={data.projects} />
      <ServicePricing {...data.pricing} />
      <ServiceFAQ {...data.faq} />
      <ServiceCTA {...data.cta} />
    </>
  )
}
