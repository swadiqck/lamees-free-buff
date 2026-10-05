import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useAnimations'

const HeroScene = lazy(() => import('../three/HeroScene'))

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const handleScrollToWork = (e) => {
    e.preventDefault()
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollToContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero-section" aria-label="Hero">
      {/* 3D Canvas Background */}
      <div className="hero-canvas">
        <Suspense fallback={null}>
          {!prefersReducedMotion && <HeroScene />}
        </Suspense>
      </div>

      {/* Ambient glow orbs */}
      <div
        className="glow-orb"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.15), transparent)',
          top: '-10%',
          left: '-10%',
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(192,132,252,0.1), transparent)',
          bottom: '-5%',
          right: '-5%',
          animationDelay: '2s',
        }}
      />

      {/* Hero Content */}
      <motion.div
        className="hero-content"
        variants={prefersReducedMotion ? {} : containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-badge" variants={prefersReducedMotion ? {} : fadeUp}>
          <span className="dot" />
          Available for new projects
        </motion.div>

        <motion.h1 className="hero-name" variants={prefersReducedMotion ? {} : fadeUp}>
          MUHAMMED<br />
          <span className="accent">LAMEES</span>
        </motion.h1>

        <motion.p className="hero-title" variants={prefersReducedMotion ? {} : fadeUp}>
          Full-Stack Software Developer
        </motion.p>

        <motion.p className="hero-description" variants={prefersReducedMotion ? {} : fadeUp}>
          Building modern web experiences, scalable applications, and digital products.
        </motion.p>

        <motion.div className="hero-cta" variants={prefersReducedMotion ? {} : fadeUp}>
          <a href="#projects" className="btn-primary" onClick={handleScrollToWork}>
            View My Work
            <span>→</span>
          </a>
          <a href="#contact" className="btn-secondary" onClick={handleScrollToContact}>
            Let's Connect
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span>Scroll</span>
        <div className="line" />
      </motion.div>
    </section>
  )
}
