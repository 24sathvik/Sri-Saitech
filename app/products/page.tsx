'use client'

import { useEffect, useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const productCategories = [
  {
    name: 'AHD Cameras',
    description: 'Advanced High Definition cameras with exceptional clarity and resolution',
    color: 'from-primary to-dark-gray',
    features: ['1080P - 4MP resolution', 'Night vision', 'Weather resistant', 'Easy installation'],
  },
  {
    name: 'IP Cameras',
    description: 'Internet Protocol cameras for networked surveillance systems',
    color: 'from-primary/90 to-dark-gray',
    features: ['Network connectivity', 'Remote access', 'Cloud storage compatible', 'High resolution'],
  },
  {
    name: 'WiFi PTZ Cameras',
    description: 'Pan, Tilt, Zoom cameras with wireless connectivity for flexible monitoring',
    color: 'from-primary to-dark-gray/80',
    features: ['360° coverage', 'Wireless control', 'Zoom capability', 'Motion tracking'],
  },
  {
    name: 'Solar Cameras',
    description: 'Solar-powered SIM-based cameras for remote locations without power',
    color: 'from-primary/85 to-dark-gray',
    features: ['Solar powered', 'SIM based', 'Remote monitoring', 'Low maintenance'],
  },
]

const brands = [
  { name: 'HIKVISION', logo: '🔒' },
  { name: 'CP PLUS', logo: '📹' },
  { name: 'DAHUA', logo: '🎥' },
  { name: 'PRAMA', logo: '📊' },
  { name: 'HI FOCUS', logo: '👁️' },
  { name: 'Others', logo: '⭐' },
]

export default function ProductsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary to-dark-gray text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className={`text-5xl sm:text-6xl font-bold mb-4 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Our <span className="text-secondary">Products</span>
          </h1>
          <p
            className={`text-xl text-gray-300 max-w-2xl mx-auto transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            High-quality CCTV cameras and security equipment
          </p>
        </div>
      </section>

      {/* Product categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.map((product, index) => (
              <div
                key={product.name}
                className={`group transform transition-all duration-1000 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                }}
              >
                <div
                  className={`bg-gradient-to-br ${product.color} rounded-2xl p-8 text-white overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-64 flex flex-col justify-between`}
                >
                  <div>
                    <h3 className="text-3xl font-bold mb-3">{product.name}</h3>
                    <p className="text-white/90 mb-6">{product.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <span className="inline-block w-2 h-2 bg-white/60 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">
            Trusted <span className="text-accent">Brands</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className={`group relative transform transition-all duration-700 ${
                  isVisible
                    ? 'scale-100 opacity-100'
                    : 'scale-75 opacity-0'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                <div className="bg-card border border-primary/20 rounded-xl p-6 text-center hover:border-accent/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl mb-3">{brand.logo}</div>
                  <p className="font-bold text-primary text-sm">{brand.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
