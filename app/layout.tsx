import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Ethiopic, Space_Grotesk } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { BRAND_DOMAIN, BRAND_NAME } from "@/data/brand";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic", "latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-noto-sans-ethiopic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND_DOMAIN),
  title: `${BRAND_NAME} | Web & Mobile Development Agency | Addis Ababa`,
  description:
    'We build fast, beautiful, and scalable web and mobile apps using React, Next.js, Vite, and Flutter. Based in Addis Ababa, serving clients globally.',
  keywords: [
    'web development Ethiopia',
    'React developer Addis Ababa',
    'Flutter mobile app Ethiopia',
    'Next.js agency Ethiopia',
    'business profile Addis Ababa',
    'social media management Ethiopia',
  ],
  authors: [{ name: BRAND_NAME, url: BRAND_DOMAIN }],
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    title: `${BRAND_NAME} — Web & Mobile Development Agency`,
    description: 'React, Next.js, Flutter & more — we turn your ideas into fast, beautiful, conversion-ready apps.',
    type: 'website',
    locale: 'en_ET',
    siteName: BRAND_NAME,
    url: BRAND_DOMAIN,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND_NAME} — Web & Mobile Development Agency`,
    description: 'React, Next.js, Flutter & more — built in Addis Ababa, for the world.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${notoSansEthiopic.variable} scroll-smooth`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-[var(--black)]"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
