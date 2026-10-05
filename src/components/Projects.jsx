import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView, useReducedMotion } from '../hooks/useAnimations'
import { projects } from '../data'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [sectionRef, isInView] = useInView({ threshold: 0.05 })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="projects" className="section" ref={sectionRef} aria-label="Featured projects">
      <div className="container">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 16 }}
        >
          <span className="section-label">Featured Projects</span>
        </motion.div>

        <motion.h2
          className="section-title"
          style={{ textAlign: 'center', marginBottom: 8 }}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Selected Work
        </motion.h2>

        <motion.p
          className="section-subtitle"
          style={{ textAlign: 'center', margin: '0 auto' }}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          A showcase of products and platforms I've built
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className={`project-card ${project.featured ? 'featured' : ''}`}
              key={project.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={prefersReducedMotion ? {} : { y: -6 }}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${project.name}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedProject(project)
                }
              }}
            >
              <div className="project-card-inner">
                {/* Visual side */}
                <div className="project-visual">
                  <div
                    className="project-visual-gradient"
                    style={{ background: project.gradient }}
                  />
                  <div className="project-visual-content">
                    <div className="project-visual-icon">{project.icon}</div>
                  </div>
                </div>

                {/* Info side */}
                <div className="project-info">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-stack">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span className="project-stack-tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <span className="project-link primary" onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProject(project)
                    }}>
                      View Details →
                    </span>
                    <a
                      className="project-link secondary"
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
