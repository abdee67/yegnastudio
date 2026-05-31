import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'DevStudio | Web & Mobile Development Agency | Addis Ababa',
  description:
    'We build fast, beautiful, and scalable web and mobile apps using React, Next.js, Vite, and Flutter. Based in Addis Ababa, serving clients globally.',
  keywords: [
    'web development Ethiopia',
    'React developer Addis Ababa',
    'Flutter mobile app Ethiopia',
    'Next.js agency Ethiopia',
    'graphic design Addis Ababa',
    'social media management Ethiopia',
  ],
  openGraph: {
    title: 'DevStudio — Web & Mobile Development Agency',
    description: 'React, Next.js, Flutter & more — we turn your ideas into fast, beautiful, conversion-ready apps.',
    type: 'website',
    locale: 'en_ET',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevStudio — Web & Mobile Development Agency',
    description: 'React, Next.js, Flutter & more — built in Addis Ababa, for the world.',
  },
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
