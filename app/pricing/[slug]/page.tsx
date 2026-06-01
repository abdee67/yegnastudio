import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PricingCards from '@/components/pricing-page/PricingCards'
import PricingComparison from '@/components/pricing-page/PricingComparison'
import PricingCTA from '@/components/pricing-page/PricingCTA'
import PricingFAQ from '@/components/pricing-page/PricingFAQ'
import PricingHero from '@/components/pricing-page/PricingHero'
import PricingProjects from '@/components/pricing-page/PricingProjects'
import { BRAND_DOMAIN, BRAND_NAME } from '@/data/brand'
import { getPricingData, PRICING_SLUGS } from '@/data/pricing'

type PricingPageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false
export const revalidate = false

export function generateStaticParams() {
  return PRICING_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PricingPageProps): Promise<Metadata> {
  const { slug } = await params
  const data = getPricingData(slug)

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
      url: `${BRAND_DOMAIN}/pricing/${slug}`,
      images: [
        {
          url: `/og/pricing-${slug}.png`,
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
      images: [`/og/pricing-${slug}.png`],
    },
    alternates: {
      canonical: `${BRAND_DOMAIN}/pricing/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
  }
}

export default async function PricingPage({ params }: PricingPageProps) {
  const { slug } = await params
  const data = getPricingData(slug)

  if (!data) {
    notFound()
  }

  return (
    <>
      <PricingHero {...data.hero} />
      <PricingCards {...data.cards} />
      <PricingComparison {...data.comparison} />
      <PricingProjects projects={data.projects} />
      <PricingFAQ faq={data.faq} />
      <PricingCTA cta={data.cta} />
    </>
  )
}
