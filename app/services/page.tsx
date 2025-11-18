'use client'

import { useEffect, useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Package, Wrench, Settings, CheckCircle, Clock, Users, Zap, Shield } from 'lucide-react'

const servicesDetail = [
  {
    title: 'Installation',
    icon: Package,
    description:
      'Professional CCTV camera installation tailored to your security needs',
    features: [
      'Site assessment & consultation',
      'Custom layout design',
      'Professional installation',
      'System testing & calibration',
      'User training',
      'Documentation & warranty',
    ],
  },
  {
    title: 'Servicing',
    icon: Wrench,
    description: 'Regular maintenance to keep your security system optimal',
    features: [
      'Routine maintenance',
      'Cleaning & inspection',
      'Software updates',
      'Performance optimization',
      'Emergency repairs',
      '24/7 technical support',
    ],
  },
  {
    title: 'Sales',
    icon: Settings,
    description: 'High-quality CCTV equipment from trusted brands',
    features: [
      'Wide product range',
      'Competitive pricing',
      'Expert recommendations',
      'Quality assurance',
      'Bulk discounts',
      'Installation packages',
    ],
  },
]

const advantages = [
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'Quick service response times for all your needs',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Certified professionals with years of experience',
  },
  {
    icon: Zap,
    title: 'Latest Technology',
    description: 'We use cutting-edge security solutions',
  },
  {
    icon: Shield,
    title: 'Guaranteed Quality',
    description: 'Warranty coverage on all products and services',
  },
]

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className={`text-5xl sm:text-6xl font-bold mb-4 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Our <span className="text-accent">Services</span>
          </h1>
          <p
            className={`text-xl text-blue-100 max-w-2xl mx-auto transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Comprehensive security solutions for every need
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {servicesDetail.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="grid md:grid-cols-2 gap-12 items-center"
                >
                  {/* Icon & Description */}
                  <div
                    className={`transform transition-all duration-1000 ${
                      isVisible
                        ? 'translate-x-0 opacity-100'
                        : index % 2 === 0
                          ? '-translate-x-10 opacity-0'
                          : 'translate-x-10 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 200}ms` : '0ms',
                    }}
                  >
                    <div className="bg-accent/10 p-8 rounded-2xl border border-accent/20 mb-6">
                      <Icon className="w-16 h-16 text-accent" />
                    </div>
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div
                    className={`transform transition-all duration-1000 ${
                      isVisible
                        ? 'translate-x-0 opacity-100'
                        : index % 2 === 0
                          ? 'translate-x-10 opacity-0'
                          : '-translate-x-10 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 200 + 100}ms` : '0ms',
                    }}
                  >
                    <div className="space-y-4">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors"
                        >
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Why Choose <span className="text-accent">Us</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {advantages.map((adv, index) => {
              const Icon = adv.icon
              return (
                <div
                  key={adv.title}
                  className="text-center p-8 bg-card rounded-xl border border-border hover:border-accent/50 transition-all hover:-translate-y-2 duration-300"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {adv.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
