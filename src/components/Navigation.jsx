/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { FaHome, FaCode, FaBriefcase, FaGraduationCap, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'
import './Navigation.css'
import ThemeToggle from './ThemeToggle'

const Navigation = ({ activeSection }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'skills', label: 'Skills', icon: <FaCode /> },
    { id: 'services', label: 'Services', icon: <FaBriefcase /> },
    { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> }
  ]

  return (
    <motion.nav 
      className={`navigation ${activeSection === 'home' ? 'navigation--home' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="nav-container">
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <motion.a 
                href={`#${item.id}`} 
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </motion.a>
            </li>
          ))}
        </ul>
        <div className="theme-toggle-wrapper">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
