'use server'

import emailjs from '@emailjs/browser'

export async function sendContactEmail(formData: {
  name: string
  email: string
  phone: string
  query: string
}) {
  try {
    const serviceId = process.env.EMAILJS_SERVICE_ID
    const templateId = process.env.EMAILJS_TEMPLATE_ID
    const publicKey = process.env.EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      throw new Error('EmailJS configuration is missing')
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.query,
      to_email: 'Srisaitech1973@gmail.com',
    }

    await emailjs.send(serviceId, templateId, templateParams, publicKey)

    return { success: true, message: 'Email sent successfully' }
  } catch (error) {
    console.error('EmailJS error:', error)
    return { 
      success: false, 
      message: 'Failed to send message. Please try again.' 
    }
  }
}
