'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ShieldAlert, ArrowRight } from 'lucide-react'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary to-dark-gray text-white overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center min-h-screen">
        <div className="text-center space-y-8 py-20 w-full">
          {/* Animated icon */}
          <div
            className={`inline-block transform transition-all duration-1000 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}
          >
            <div className="bg-secondary/20 p-6 rounded-2xl backdrop-blur-sm border border-secondary/30">
              <ShieldAlert className="w-16 h-16 text-secondary" />
            </div>
          </div>

          {/* Main heading with staggered animation */}
          <div className="space-y-4">
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight transform transition-all duration-1000 delay-100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Sri Saitech
              <br />
              <span className="text-secondary">Enterprises</span>
            </h1>
            <p
              className={`text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto transform transition-all duration-1000 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Professional CCTV Installation, Servicing & Sales
            </p>
          </div>

          {/* Tagline */}
          <p
            className={`text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Trusted security solutions for residential, commercial, and industrial
            facilities. Serving you with top-tier products and expert installation.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <Link
              href="/contact"
              className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all transform hover:scale-105 inline-flex items-center gap-2 group"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-secondary/10 transition-all transform hover:scale-105"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust badges */}
          <div
            className={`flex flex-wrap justify-center gap-6 pt-8 transform transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {['Expert Installation', '24/7 Support', 'Warranty Coverage'].map(
              (badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-sm font-medium text-gray-300"
                >
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  {badge}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-white text-sm font-medium">Scroll to explore</div>
      </div>
    </section>
  )
}
