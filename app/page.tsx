import Link from 'next/link'
import { HeroSection } from '@/components/hero-section'
import { ServiceHighlights } from '@/components/service-highlights'
import { FeaturedProducts } from '@/components/featured-products'
import { CTASection } from '@/components/cta-section'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CameraAnimation } from '@/components/camera-animation'
import { ScrollingBrands } from '@/components/scrolling-brands'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <section className="py-20 bg-background flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <CameraAnimation />
        </div>
      </section>
      <ServiceHighlights />
      <FeaturedProducts />
      <ScrollingBrands />
      <CTASection />
      <Footer />
    </main>
  )
}
