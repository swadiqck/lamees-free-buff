import { motion } from 'framer-motion'
import { useInView, useReducedMotion } from '../hooks/useAnimations'
import { services } from '../data'

export default function Services() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="section" ref={sectionRef} aria-label="Services offered">
      <div className="container">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 16 }}
        >
          <span className="section-label">Services</span>
        </motion.div>

        <motion.h2
          className="section-title"
          style={{ textAlign: 'center', marginBottom: 8 }}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          What I Can Build
        </motion.h2>

        <motion.p
          className="section-subtitle"
          style={{ textAlign: 'center', margin: '0 auto' }}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          End-to-end development services for modern digital products
        </motion.p>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={service.title}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: prefersReducedMotion ? 0 : 0.2 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={prefersReducedMotion ? {} : {
                y: -8,
                rotateX: 2,
                rotateY: -2,
                transition: { duration: 0.3 },
              }}
              style={{ perspective: '1000px' }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
