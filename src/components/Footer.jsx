import { motion } from 'framer-motion'
import { useInView, useReducedMotion } from '../hooks/useAnimations'
import { navLinks } from '../data'

const socialLinks = [
  { icon: '🐙', label: 'GitHub', href: 'https://github.com/muhammedlamees' },
  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/muhammedlamees' },
  { icon: '📧', label: 'Email', href: 'mailto:muhammedlamees@gmail.com' },
]

export default function Footer() {
  const [footerRef, isInView] = useInView({ threshold: 0.1 })
  const prefersReducedMotion = useReducedMotion()

  const handleNavClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer" ref={footerRef} role="contentinfo">
      <div className="container">
        <motion.div
          className="footer-grid"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Brand */}
          <div>
            <div className="footer-brand-name">
              MUHAMMED LAMEES
            </div>
            <div className="footer-brand-role">
              Full-Stack Software Developer
            </div>
            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer-social-link"
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="footer-heading">Navigation</div>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="footer-heading">Connect</div>
            <ul className="footer-links">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div>© 2026 Muhammed Lamees. All rights reserved.</div>
          <div>Built with passion and precision.</div>
        </motion.div>
      </div>
    </footer>
  )
}
