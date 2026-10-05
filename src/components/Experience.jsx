import { motion } from 'framer-motion'
import { useInView, useReducedMotion } from '../hooks/useAnimations'
import { experience } from '../data'

export default function Experience() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="experience" className="section" ref={sectionRef} aria-label="Work experience">
      <div className="container">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 16 }}
        >
          <span className="section-label">Experience</span>
        </motion.div>

        <motion.h2
          className="section-title"
          style={{ textAlign: 'center', marginBottom: 8 }}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Professional Journey
        </motion.h2>

        <motion.p
          className="section-subtitle"
          style={{ textAlign: 'center', margin: '0 auto 48px' }}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Building experience across the full development stack
        </motion.p>

        <div className="experience-list">
          {experience.map((item, index) => (
            <motion.div
              className="experience-item"
              key={index}
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: prefersReducedMotion ? 0 : 0.3 + index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="experience-dot" />
              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-role">{item.role}</div>
                  <div className="experience-period">{item.period}</div>
                </div>
                <div className="experience-company">{item.company}</div>
                <p className="experience-description">{item.description}</p>
                <div className="experience-tech">
                  {item.tech.map((tech) => (
                    <span className="experience-tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
