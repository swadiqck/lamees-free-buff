import { useEffect } from 'react'
import { motion } from 'framer-motion'

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const contentVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.3 },
  },
}

export default function ProjectModal({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="modal-overlay"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Project details: ${project.name}`}
    >
      <motion.div
        className="modal-content"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ✕
        </button>

        <div className="modal-category">{project.category}</div>
        <h2 className="modal-title">{project.name}</h2>

        <div className="modal-section">
          <h3 className="modal-section-title">Overview</h3>
          <p className="modal-section-text">{project.longDescription}</p>
        </div>

        <div className="modal-section">
          <h3 className="modal-section-title">Problem</h3>
          <p className="modal-section-text">{project.problem}</p>
        </div>

        <div className="modal-section">
          <h3 className="modal-section-title">Solution</h3>
          <p className="modal-section-text">{project.solution}</p>
        </div>

        <div className="modal-section">
          <h3 className="modal-section-title">Architecture</h3>
          <p className="modal-section-text">{project.architecture}</p>
        </div>

        <div className="modal-section">
          <h3 className="modal-section-title">Technologies</h3>
          <div className="modal-stack">
            {project.stack.map((tech) => (
              <span className="modal-stack-tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-section">
          <h3 className="modal-section-title">Key Features</h3>
          <ul className="modal-features">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="modal-links">
          <a
            href={project.liveUrl}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo →
          </a>
          <a
            href={project.githubUrl}
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}
