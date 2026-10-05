import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView, useReducedMotion } from '../hooks/useAnimations'

const contactLinks = [
  {
    icon: '📧',
    label: 'Email',
    value: 'muhammedlamees@gmail.com',
    href: 'mailto:muhammedlamees@gmail.com',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/muhammedlamees',
    href: 'https://github.com/muhammedlamees',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/muhammedlamees',
    href: 'https://linkedin.com/in/muhammedlamees',
  },
]

export default function Contact() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 })
  const prefersReducedMotion = useReducedMotion()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      // In production, this would send the form data
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const inputProps = (field) => ({
    value: formData[field],
    onChange: (e) => handleChange(field, e.target.value),
    style: errors[field] ? { borderColor: '#ef4444' } : {},
  })

  return (
    <section id="contact" className="section" ref={sectionRef} aria-label="Contact">
      <div className="container">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 16 }}
        >
          <span className="section-label">Get In Touch</span>
        </motion.div>

        <motion.h2
          className="section-title"
          style={{ textAlign: 'center', marginBottom: 8 }}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Have an idea? Let's build it.
        </motion.h2>

        <motion.p
          className="section-subtitle"
          style={{ textAlign: 'center', margin: '0 auto 48px' }}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Whether you're building a product, launching a website, or solving a technical problem,
          let's create something useful and memorable.
        </motion.p>

        <div className="contact-grid">
          {/* Left: Info */}
          <motion.div
            className="contact-info"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="contact-text">
              I'm always interested in hearing about new projects and opportunities.
              Let's discuss how we can work together to bring your vision to life.
            </p>

            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="contact-link"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="contact-link-icon">{link.icon}</div>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--color-text)', marginBottom: '2px' }}>
                      {link.label}
                    </div>
                    <div>{link.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              <a href="mailto:muhammedlamees@gmail.com" className="btn-primary">
                Start a Conversation
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {submitted ? (
              <div style={{
                padding: '48px 32px',
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                borderRadius: '20px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '48px', marginBottom: 16 }}>✨</div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '24px',
                  color: 'var(--color-heading)',
                  marginBottom: 8,
                }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--color-text)' }}>
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      {...inputProps('name')}
                    />
                    {errors.name && (
                      <span style={{ fontSize: '12px', color: '#ef4444' }}>{errors.name}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Email *</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      {...inputProps('email')}
                    />
                    {errors.email && (
                      <span style={{ fontSize: '12px', color: '#ef4444' }}>{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">Project / Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="What's this about?"
                    {...inputProps('subject')}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    {...inputProps('message')}
                  />
                  {errors.message && (
                    <span style={{ fontSize: '12px', color: '#ef4444' }}>{errors.message}</span>
                  )}
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn-primary">
                    Send Message
                    <span>→</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
