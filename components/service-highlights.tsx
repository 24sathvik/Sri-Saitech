'use client'

import { useEffect, useState } from 'react'
import { Wrench, Package, Settings } from 'lucide-react'

const services = [
  {
    icon: Package,
    title: 'Installation',
    description:
      'Professional CCTV camera installation tailored to your security needs. From residential to industrial setups.',
    delay: '0',
  },
  {
    icon: Wrench,
    title: 'Servicing',
    description:
      'Regular maintenance and repair services to keep your security system running optimally at all times.',
    delay: '200',
  },
  {
    icon: Settings,
    title: 'Sales',
    description:
      'Wide range of high-quality CCTV cameras and equipment from trusted brands at competitive prices.',
    delay: '400',
  },
]

export function ServiceHighlights() {
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

    const element = document.getElementById('services-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services-section"
      className="py-20 bg-gradient-to-b from-background to-secondary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-foreground mb-4 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Our <span className="text-accent">Services</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Comprehensive security solutions for every need
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative transform transition-all duration-1000 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{
                transitionDelay: isVisible ? `${service.delay}ms` : '0ms',
              }}
            >
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-accent/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Icon background */}
                <div className="inline-block bg-accent/10 p-4 rounded-xl mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover accent line */}
                <div className="mt-6 w-0 h-1 bg-accent rounded-full group-hover:w-12 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
