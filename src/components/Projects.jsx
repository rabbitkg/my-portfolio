import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaMobileAlt,
  FaServer,
  FaBitcoin,
  FaBrain,
  FaGamepad,
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
  FaApple,
  FaGooglePlay
} from 'react-icons/fa'
import projectsRaw from '../data/projects.json'
import { resolveProjectImage } from '../utils/projectImages'
import './Projects.css'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const projects = useMemo(
    () =>
      projectsRaw.map((p) => ({
        ...p,
        image: resolveProjectImage(p.image)
      })),
    []
  )

  const categories = [
    { name: 'All', icon: <FaCode /> },
    { name: 'Fullstack', icon: <FaServer /> },
    { name: 'Mobile', icon: <FaMobileAlt /> },
    { name: 'Blockchain', icon: <FaBitcoin /> },
    { name: 'AI/ML', icon: <FaBrain /> },
    { name: 'Game', icon: <FaGamepad /> }
  ]

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(
          (project) =>
            Array.isArray(project.categories) &&
            project.categories.includes(activeCategory)
        )

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="project-categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              className={`category-btn ${activeCategory === category.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image-wrapper">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.subtitle}`}
                      className="project-image"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="project-image"
                      style={{
                        minHeight: 180,
                        background: 'var(--surface-muted, rgba(128, 128, 128, 0.15))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      role="img"
                      aria-label={`${project.title} screenshot`}
                    />
                  )}
                </div>
                <div className="project-content">
                  <div className="project-header-row">
                    <h3 className="project-title-new">{project.title}</h3>
                    <div className="project-action-links">
                      {project.githubLink ? (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-link-icon"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="View on GitHub"
                        >
                          <FaGithub />
                        </motion.a>
                      ) : (
                        <div className="action-link-icon disabled" title="Private Repository">
                          <FaGithub />
                        </div>
                      )}
                      {(project.websiteLink || project.liveLink) && (
                        <motion.a
                          href={project.websiteLink || project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-link-icon"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Website"
                        >
                          <FaExternalLinkAlt />
                        </motion.a>
                      )}
                      {project.appStoreLink && (
                        <motion.a
                          href={project.appStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-link-icon"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="App Store"
                        >
                          <FaApple />
                        </motion.a>
                      )}
                      {project.playStoreLink && (
                        <motion.a
                          href={project.playStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-link-icon"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Google Play"
                        >
                          <FaGooglePlay />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <div className="project-subtitle">{project.subtitle}</div>

                  <p className="project-description-new">{project.description}</p>

                  <div className="project-tech-pills">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length > 6 && (
          <motion.div
            className="view-more-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              className="btn-view-more-projects"
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? (
                <>Show Less</>
              ) : (
                <>View More Projects ({filteredProjects.length - 6} more)</>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
