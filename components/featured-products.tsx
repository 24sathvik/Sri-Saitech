'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const products = [
  {
    category: 'AHD Cameras',
    description: 'Advanced High Definition cameras with exceptional clarity',
    color: 'from-primary to-dark-gray',
  },
  {
    category: 'IP Cameras',
    description: 'Internet Protocol cameras for networked surveillance',
    color: 'from-primary/90 to-dark-gray',
  },
  {
    category: 'WiFi PTZ Cameras',
    description: 'Pan, Tilt, Zoom cameras with wireless connectivity',
    color: 'from-primary to-dark-gray/80',
  },
  {
    category: 'Solar Cameras',
    description: 'Solar-powered SIM-based cameras for remote locations',
    color: 'from-primary/85 to-dark-gray',
  },
]

const brands = [
  'HIKVISION',
  'CP PLUS',
  'DAHUA',
  'PRAMA',
  'HI FOCUS',
  'Others',
]

export function FeaturedProducts() {
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

    const element = document.getElementById('products-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="products-section"
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-foreground mb-4 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Featured <span className="text-accent">Products</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Cutting-edge camera solutions for every application
          </p>
        </div>

        {/* Product categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={product.category}
              className={`group relative transform transition-all duration-1000 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
              }}
            >
              <div
                className={`bg-gradient-to-br ${product.color} p-8 rounded-xl text-white overflow-hidden relative group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">{product.category}</h3>
                  <p className="text-white/90 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-4 inline-block text-white group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-block bg-primary text-secondary px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-105"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
