import { motion } from 'framer-motion'
import {
  SiReact,
  SiNodedotjs,
  SiGraphql,
  SiOpenai,
  SiEthereum,
} from 'react-icons/si'
import { FaMobileAlt, FaServer, FaDatabase } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <SiNodedotjs />,
      title: 'Fullstack Development',
      description:
        'End-to-end engineering: React (or other modern frontend) + Node.js/Python backend, seamless API integration (REST/GraphQL), and robust databases. Complete solutions across web and mobile.',
    },
    {
      icon: <SiReact />,
      title: 'Frontend Development',
      description:
        'Modern, responsive UIs with React, Next.js, TypeScript, and world-class state management – delivering pixel-perfect and maintainable web applications.',
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description:
        'API design and implementation using Node.js/Express or Python (FastAPI). Scalable, secure, and maintainable servers and microservices supporting complex app logic.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'React Native & Mobile',
      description:
        'Cross-platform (iOS & Android) apps with React Native. Shared codebase, native performance, streamlined deployment – tailored for fast-growing businesses.',
    },
    {
      icon: <SiGraphql />,
      title: 'API Development',
      description:
        'Expertise in RESTful and GraphQL APIs. API schema design, integration, and documentation with Node.js, Python, and modern architectures.',
    },
    {
      icon: <SiOpenai />,
      title: 'AI & Automation',
      description:
        'Integrating OpenAI GPT, machine learning, and custom automation for smarter applications: value-add chat, analysis, and productivity augmentation.',
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I Build
        </motion.h2>

        <motion.p
          className="services-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Specialized in scalable web, mobile and backend development using React, Next.js, Node.js and cloud-native full-stack architectures—delivering robust solutions from design to deployment.
        </motion.p>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card-professional"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="service-icon-professional">
                {service.icon}
              </div>
              <h3 className="service-title-professional">{service.title}</h3>
              <p className="service-description-professional">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
