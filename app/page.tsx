import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import Ticker from "@/components/sections/Ticker"
import Services from "@/components/sections/Services"
import Work from "@/components/sections/Work"
import Process from "@/components/sections/Process"
import Pricing from "@/components/sections/Pricing"
import Contact from "@/components/sections/Contact"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Ticker />
        <Services />
        <Work />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
