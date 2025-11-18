'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('cta-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const benefits = [
    'Free site assessment',
    'Custom solutions',
    '24/7 technical support',
    'Lifetime warranty options',
  ]

  return (
    <section
      id="cta-section"
      className="py-20 bg-gradient-to-r from-primary via-primary to-accent text-white relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Ready to Secure Your Property?
          </h2>
          <p
            className={`text-xl text-white/90 mb-12 max-w-2xl mx-auto transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Get expert security solutions tailored to your needs. Contact us today
            for a free consultation.
          </p>

          {/* Benefits list */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transform transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-sm font-medium"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div
            className={`transform transition-all duration-1000 delay-600 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}
          >
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-bold hover:shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-105"
            >
              Get Your Free Quote Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
