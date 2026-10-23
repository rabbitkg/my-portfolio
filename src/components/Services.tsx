'use client';

import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaServer, FaDatabase, FaLock, FaShoppingCart, FaRocket, FaMobileAlt } from 'react-icons/fa';

const services = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end web applications built with modern stacks like MERN.",
    icon: <FaCode />,
    color: "text-accent-blue"
  },
  {
    title: "Frontend Development",
    description: "Fast, responsive, and user-friendly interfaces built with React.",
    icon: <FaPaintBrush />,
    color: "text-accent-purple"
  },
  {
    title: "Backend & API Development",
    description: "Secure and efficient server-side logic and RESTful API development.",
    icon: <FaServer />,
    color: "text-accent-pink"
  },
  {
    title: "Database Design & Management",
    description: "Well-structured MongoDB databases optimized for speed and reliability.",
    icon: <FaDatabase />,
    color: "text-accent-blue"
  },
  {
    title: "Authentication & Authorization",
    description: "Implementing secure login and session management across applications.",
    icon: <FaLock />,
    color: "text-accent-purple"
  },
  {
    title: "E-Commerce Development",
    description: "Building modern e-commerce platforms with payment gateway integration.",
    icon: <FaShoppingCart />,
    color: "text-accent-pink"
  },
  {
    title: "Performance Optimization",
    description: "Enhancing speed and efficiency to provide a smooth user experience.",
    icon: <FaRocket />,
    color: "text-accent-blue"
  },
  {
    title: "Responsive UI Building",
    description: "Ensuring applications look great and work perfectly across all devices.",
    icon: <FaMobileAlt />,
    color: "text-accent-purple"
  }
];

export default function Services() {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden" id="services">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-accent-blue/5 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Services I <span className="text-gradient">Provide</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Delivering high quality user experiences tailored for building fast, reliable and user-friendly digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-10 rounded-[2rem] border border-white/5 hover:border-accent-blue/30 transition-all group flex flex-col items-center text-center h-full"
            >
              <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-8 ${service.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-black/20`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-5 leading-tight">{service.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
