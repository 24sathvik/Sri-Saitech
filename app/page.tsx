import Link from 'next/link'
import { HeroSection } from '@/components/hero-section'
import { ServiceHighlights } from '@/components/service-highlights'
import { FeaturedProducts } from '@/components/featured-products'
import { CTASection } from '@/components/cta-section'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServiceHighlights />
      <FeaturedProducts />
      <CTASection />
      <Footer />
    </main>
  )
}
