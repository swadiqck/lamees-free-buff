import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView, useReducedMotion } from '../hooks/useAnimations'
import { process } from '../data'

export default function Process() {
  const [sectionRef, isInView] = useInView({ threshold: 0.2 })
  const [activeStep, setActiveStep] = useState(-1)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!isInView) return
    // Progressively activate steps
    let step = 0
    const interval = setInterval(() => {
      setActiveStep(step)
      step++
      if (step >= process.length) {
        clearInterval(interval)
      }
    }, prefersReducedMotion ? 0 : 200)

    return () => clearInterval(interval)
  }, [isInView, prefersReducedMotion])

  return (
    <section className="section" ref={sectionRef} aria-label="Development process">
      <div className="container">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 16 }}
        >
          <span className="section-label">How I Work</span>
        </motion.div>

        <motion.h2
          className="section-title"
          style={{ textAlign: 'center', marginBottom: 8 }}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Development Process
        </motion.h2>

        <motion.p
          className="section-subtitle"
          style={{ textAlign: 'center', margin: '0 auto 48px' }}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          A structured approach to delivering quality digital products
        </motion.p>

        <div className="process-timeline">
          {process.map((step, index) => (
            <motion.div
              className={`process-step ${index <= activeStep ? 'active' : ''}`}
              key={step.number}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 0.3 + index * 0.15 }}
            >
              <div className="process-step-number">{step.number}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.description}</p>

              {index < process.length - 1 && (
                <div className="process-line">
                  <div
                    className="process-line-fill"
                    style={{ width: index < activeStep ? '100%' : '0%' }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
