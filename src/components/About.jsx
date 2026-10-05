import { motion } from 'framer-motion'
import { useInView, useReducedMotion } from '../hooks/useAnimations'

const stats = [
  { number: '3+', label: 'Years Experience' },
  { number: '20+', label: 'Projects Built' },
  { number: '15+', label: 'Technologies' },
  { number: '100%', label: 'Commitment' },
]

const highlights = [
  { icon: '🎨', text: 'Full-Stack Development' },
  { icon: '🚀', text: 'Modern Web Applications' },
  { icon: '🔌', text: 'API & Backend Systems' },
  { icon: '☁️', text: 'Deployment & Server Management' },
]

export default function About() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 })
  const prefersReducedMotion = useReducedMotion()

  const animProps = prefersReducedMotion ? {} : {
    initial: { opacity: 0, y: 40 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }

  return (
    <section id="about" className="section" ref={sectionRef} aria-label="About me">
      <div className="container">
        <div className="about-grid">
          {/* Left: Visual Card */}
          <motion.div
            className="about-visual"
            {...animProps}
            transition={{ ...animProps.transition, delay: 0.1 }}
          >
            <div className="about-visual-inner">
              <div className="about-avatar">ML</div>
              <div className="about-visual-name">Muhammed Lamees</div>
              <div className="about-visual-role">Full-Stack Software Developer</div>

              <div className="about-stats">
                {stats.map((stat, i) => (
                  <motion.div
                    className="about-stat"
                    key={stat.label}
                    initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  >
                    <div className="about-stat-number">{stat.number}</div>
                    <div className="about-stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative glow */}
            <div
              className="glow-orb"
              style={{
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(99,102,241,0.2), transparent)',
                top: '10%',
                right: '-10%',
              }}
            />
          </motion.div>

          {/* Right: Content */}
          <div className="about-content">
            <motion.div {...animProps}>
              <span className="section-label">About Me</span>
            </motion.div>

            <motion.h2 className="section-title" {...animProps}
              transition={{ ...animProps.transition, delay: 0.1 }}>
              I build digital experiences that connect design, technology, and performance.
            </motion.h2>

            <motion.p className="about-text" {...animProps}
              transition={{ ...animProps.transition, delay: 0.2 }}>
              I'm a <strong>Full-Stack Software Developer</strong> with a passion for creating
              modern, high-performance web applications. I work across the entire development
              stack — from crafting pixel-perfect interfaces to architecting robust backends,
              designing databases, building APIs, and deploying production systems.
            </motion.p>

            <motion.p className="about-text" {...animProps}
              transition={{ ...animProps.transition, delay: 0.25 }}>
              My approach combines <strong>technical depth</strong> with a strong eye for
              design, ensuring every product I build is not only functional but also delivers
              an exceptional user experience.
            </motion.p>

            <motion.div className="about-highlights" {...animProps}
              transition={{ ...animProps.transition, delay: 0.3 }}>
              {highlights.map((item, i) => (
                <motion.div
                  className="about-highlight"
                  key={item.text}
                  initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                >
                  <div className="about-highlight-icon">{item.icon}</div>
                  {item.text}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
