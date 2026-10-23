import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCalendar, FaMobileAlt, FaTasks } from 'react-icons/fa'
import { SiGithub, SiLinkedin, SiGmail, SiTelegram, SiReact } from 'react-icons/si'
import site from '../data/site.json'
import './Hero.css'

const roles = site.hero.roles

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const { contact, hero } = site

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const quickStats = [
    { icon: <FaCalendar />, value: '8+', label: 'Years Experience' },
    { icon: <SiReact />, value: '20+', label: 'Full Stack Projects' },
    { icon: <FaMobileAlt />, value: '8+', label: 'Mobile Apps' },
    { icon: <FaTasks />, value: '5+', label: 'Industries' }
  ]

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            <motion.span
              className="hero-title-main"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="title-part-1">Senior</span>
              <span className="title-part-2 typing-animation">{roles[currentRole]}</span>
            </motion.span>
            <motion.span
              className="hero-title-sub"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {hero.tagline}
            </motion.span>
          </h1>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {hero.description}
          </motion.p>

          <motion.div
            className="hero-contacts"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.a
              href={`mailto:${contact.email}`}
              className="contact-link-hero"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiGmail />
            </motion.a>
            <motion.a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-hero"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiLinkedin />
            </motion.a>
            <motion.a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-hero"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiGithub />
            </motion.a>
            {contact.telegram ? (
              <motion.a
                href={contact.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-hero"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiTelegram />
              </motion.a>
            ) : null}
          </motion.div>

          <motion.div
            className="quick-stats-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="quick-stats-horizontal">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="quick-stat-pill"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <span className="stat-icon-pill">{stat.icon}</span>
                  <div className="stat-content-pill">
                    <span className="stat-value-pill">{stat.value}</span>
                    <span className="stat-label-pill">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
