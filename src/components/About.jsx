import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiNodedotjs, 
  SiVuedotjs, 
  SiPython, 
  SiJavascript, 
  SiTypescript,
  SiNextdotjs,
  SiDocker,
  SiGraphql,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiFirebase,
  SiPostgresql,
  SiAngular
} from 'react-icons/si'
import { 
  FaHospital, 
  FaMoneyBillWave, 
  FaShoppingCart, 
  FaShieldAlt,
  FaBitcoin,
  FaRobot
} from 'react-icons/fa'
import './About.css'

const About = () => {
  const techIcons = [
    // Uncomment and update if you want floating icons on the section
    // { icon: <SiReact />, position: { top: '10%', left: '30%' }, delay: 0 },
    // { icon: <SiNextdotjs />, position: { top: '20%', left: '10%' }, delay: 0.15 },
    // { icon: <SiVuedotjs />, position: { top: '30%', left: '60%' }, delay: 0.25 },
    // { icon: <SiAngular />, position: { top: '50%', left: '45%' }, delay: 0.35 },
    // { icon: <SiNodedotjs />, position: { bottom: '30%', left: '15%' }, delay: 0.5 },
    // { icon: <SiPython />, position: { bottom: '10%', right: '20%' }, delay: 0.65 },
    // { icon: <SiDocker />, position: { top: '70%', right: '15%' }, delay: 0.8 },
    // { icon: <FaRobot />, position: { bottom: '12%', left: '55%' }, delay: 1 }
  ]

  return (
    <section id="about" className="about">
      {/* Floating Tech Icons - Full Width */}
      <div className="floating-icons">
        {techIcons.map((item, index) => (
          <motion.div
            key={index}
            className="floating-icon"
            style={item.position}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 0.6,
              delay: item.delay * 0.1,
              y: {
                duration: 4 + (index % 3),
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{ scale: 1.15, y: -5 }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="title-highlight">Me</span>
        </motion.h2>
        
        <div className="about-wrapper">
          <div className="about-content">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <strong>Senior Full Stack Engineer</strong> with <strong>8+ years</strong> of professional experience building scalable <strong>fullstack</strong> and <strong>mobile applications</strong> for both startups and enterprises.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Specialized in <strong>React</strong> and <strong>Next.js</strong>, with solid experience in <strong>Vue.js</strong> and <strong>Angular</strong>. Strong backend background using <strong>Node.js</strong>, <strong>Python</strong>, and <strong>PHP/Laravel</strong>, with working knowledge of <strong>Java</strong> and <strong>.NET</strong> ecosystems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Experienced in both <strong>startup</strong> and <strong>enterprise</strong> environments, collaborating with cross-functional teams. Known for clear communication, strong problem-solving skills, and a collaborative mindset.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Proven technical leader in <strong>Agile</strong> teams, delivering projects end-to-end and mentoring engineers on architecture, code quality, and <strong>DevOps</strong> best practices. Focused on performance, maintainability, and high-quality user experiences.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
