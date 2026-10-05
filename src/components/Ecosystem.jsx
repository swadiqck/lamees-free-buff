import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { useInView, useReducedMotion } from '../hooks/useAnimations'

const EcosystemScene = lazy(() => import('../three/EcosystemScene'))

export default function Ecosystem() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      className="section ecosystem-section"
      ref={sectionRef}
      aria-label="Technology ecosystem"
    >
      <div className="ecosystem-canvas">
        <Suspense fallback={null}>
          {!prefersReducedMotion && isInView && <EcosystemScene />}
        </Suspense>
      </div>

      {/* 2D fallback gradient when no 3D */}
      {prefersReducedMotion && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.08), transparent 70%)',
          }}
        />
      )}

      <div className="ecosystem-overlay">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Technology Stack</span>
        </motion.div>

        <motion.h2
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            background: 'linear-gradient(135deg, #fafafa, #818cf8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 16,
          }}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          FULL-STACK
        </motion.h2>

        <motion.p
          style={{
            fontSize: 'clamp(14px, 1.5vw, 17px)',
            color: 'var(--color-text)',
            maxWidth: '480px',
            lineHeight: 1.7,
          }}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A complete ecosystem spanning Frontend, Backend, Database, API, Cloud, and Deployment — 
          all connected and working in harmony.
        </motion.p>
      </div>
    </section>
  )
}
