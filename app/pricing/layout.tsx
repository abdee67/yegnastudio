import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Breadcrumb from '@/components/ui/Breadcrumb'
import PageFade from '@/components/ui/PageFade'

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <PageFade>{children}</PageFade>
      <Footer />
    </>
  )
}
