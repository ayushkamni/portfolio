import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
} from 'react-icons/fi'
import { personalInfo } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import Button from '../ui/Button'

const contactDetails = [
  { icon: FiGithub, label: 'GitHub', value: 'github.com/ayushkamni', href: personalInfo.github },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/ayushkamni', href: personalInfo.linkedin },
  { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
  { icon: FiMapPin, label: 'Location', value: personalInfo.location, href: null },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message:
          'EmailJS is not configured yet. Add your credentials to a .env file.',
      })
      setIsSubmitting(false)
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: personalInfo.name,
        },
        publicKey
      )

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      })
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Have a project in mind or hiring for a developer role? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <GlassCard>
            <h3 className="text-xl font-bold mb-6">Get in touch</h3>
            <div className="space-y-5">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl glass">
                    <Icon className="text-lg text-violet-300" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="font-medium hover:text-violet-300 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-violet-500/40 bg-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-violet-500/40 bg-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full rounded-xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-violet-500/40 bg-transparent resize-none"
                />
              </div>

              {status.message && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm ${
                    status.type === 'success' ? 'text-emerald-400' : 'text-red-400'
                  }`}
                >
                  {status.message}
                </motion.p>
              )}

              <Button type="submit" icon={FiSend} className="w-full sm:w-auto">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
