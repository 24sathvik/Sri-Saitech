'use client'

import { useEffect, useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { sendContactEmail } from '@/app/actions/send-email'

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const validateIndianPhone = (phone: string): boolean => {
    const indianPhoneRegex = /^[+]?91[0-9]{10}$/
    return indianPhoneRegex.test(phone.replace(/[\s-]/g, ''))
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateIndianPhone(formData.phone)) {
      setError('Please enter a valid Indian phone number (10 digits starting with 91)')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', query: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError(result.message)
      }
    } catch (err) {
      console.error('Error:', err)
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 9848575760',
      href: 'tel:+919848575760',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'Srisaitech1973@gmail.com',
      href: 'mailto:Srisaitech1973@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'LIG 153, H.B Colony Moula Ali, Hyderabad - 500040',
      href: '#',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: '9 AM - 6 PM IST',
      href: '#',
    },
  ]

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
            Get in <span className="text-secondary">Touch</span>
          </h1>
          <p
            className={`text-xl text-white/80 max-w-2xl mx-auto transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            We're here to help with your security needs
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Contact <span className="text-secondary">Information</span>
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={info.title}
                      href={info.href}
                      className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-secondary/50 transition-all hover:-translate-y-1 group"
                      style={{
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="bg-secondary/10 p-4 rounded-lg flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{info.title}</h3>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Map placeholder - Updated to Hyderabad location */}
              <div className="mt-8 bg-muted rounded-xl overflow-hidden h-64 border border-border">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.5557049262226!2d77.25994631490634!3d28.544368299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6557b1e1001%3A0x123456789!2sLIG%20153%20HB%20Colony%20Moula%20Ali%20Hyderabad!5e0!3m2!1sen!2sin!4v1234567890"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact form */}
            <div
              className={`transform transition-all duration-1000 delay-200 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Send us a <span className="text-secondary">Message</span>
                </h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-scale-in">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✓</span>
                    </div>
                    <p className="text-green-700 font-semibold">
                      Thank you! We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                        {error}
                      </div>
                    )}

                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 text-foreground placeholder:text-muted-foreground transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 text-foreground placeholder:text-muted-foreground transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Mobile Number (India)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 text-foreground placeholder:text-muted-foreground transition-all"
                        placeholder="+91 98485 75760"
                      />
                    </div>

                    {/* Query */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Query
                      </label>
                      <textarea
                        name="query"
                        value={formData.query}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 text-foreground placeholder:text-muted-foreground transition-all resize-none"
                        placeholder="Tell us about your security needs..."
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
