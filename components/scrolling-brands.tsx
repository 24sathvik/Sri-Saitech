'use client'

import { useEffect, useState } from 'react'

const brandsList = [
  'HIKVISION',
  'CP PLUS',
  'DAHUA',
  'PRAMA',
  'HI FOCUS',
  'UNIVIEW',
  'HONEYWELL',
  'BOSCH',
  'AXIS',
  'ZYXEL',
]

export function ScrollingBrands() {
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

    const element = document.getElementById('brands-scroll-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="brands-scroll-section" className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-secondary text-center mb-12">
          Brands We <span className="text-accent">Support</span>
        </h2>

        {/* Scrolling container */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {/* First set */}
            {brandsList.map((brand, index) => (
              <div
                key={`${brand}-1`}
                className="min-w-max flex items-center justify-center px-8 py-4 bg-secondary/10 border-2 border-secondary rounded-lg transform transition-all duration-300 hover:bg-secondary hover:text-primary hover:scale-110"
              >
                <span className="font-bold text-lg text-secondary">{brand}</span>
              </div>
            ))}
            {/* Duplicate set for seamless scroll */}
            {brandsList.map((brand) => (
              <div
                key={`${brand}-2`}
                className="min-w-max flex items-center justify-center px-8 py-4 bg-secondary/10 border-2 border-secondary rounded-lg transform transition-all duration-300 hover:bg-secondary hover:text-primary hover:scale-110"
              >
                <span className="font-bold text-lg text-secondary">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
