import { motion } from 'framer-motion'
import { useInView, useReducedMotion } from '../hooks/useAnimations'
import { skills } from '../data'

export default function Skills() {
  const [sectionRef, isInView] = useInView({ threshold: 0.05 })
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = prefersReducedMotion ? {} : {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  }

  const itemVariants = prefersReducedMotion ? {} : {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="skills" className="section" ref={sectionRef} aria-label="Skills and technologies">
      <div className="container">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 16 }}
        >
          <span className="section-label">Skills & Technologies</span>
        </motion.div>

        <motion.h2
          className="section-title"
          style={{ textAlign: 'center', marginBottom: 8 }}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Technologies I Work With
        </motion.h2>

        <motion.p
          className="section-subtitle"
          style={{ textAlign: 'center', margin: '0 auto' }}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          A comprehensive toolkit for building complete digital products
        </motion.p>

        <div className="skills-categories">
          {skills.map((category, catIndex) => (
            <motion.div
              className="skill-category"
              key={category.category}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.15 }}
            >
              <div className="skill-category-header">
                <div className="skill-category-icon">{category.icon}</div>
                <h3 className="skill-category-title">{category.category}</h3>
              </div>

              <motion.div
                className="skill-items"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                {category.items.map((skill) => (
                  <motion.div
                    className="skill-item"
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -3 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  >
                    <span className="skill-item-icon">{skill.icon}</span>
                    {skill.name}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
