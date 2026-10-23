'use client';

import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    title: "MERN Todo App (2022)",
    category: "Full Stack",
    description: "A fully functional Todo application with authentication, CRUD operations, and a clean, responsive UI.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1000",
    tags: ["MERN", "NODE", "EXPRESS", "MONGODB"],
    link: "#",
    github: "#"
  },
  {
    title: "E-Commerce Demo (2022)",
    category: "Full Stack",
    description: "A modern e-commerce platform featuring product listing, cart systems, and checkout flow.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    tags: ["MERN", "STRIPE", "REDUX", "MONGODB"],
    link: "#",
    github: "#"
  },
  {
    title: "Social Media Platform",
    category: "Realtime",
    description: "A social networking app with real-time chat, posts, and user profiles built with MERN stack.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Socket.io", "MongoDB"],
    link: "#",
    github: "#"
  },
  {
    title: "Job Portal API",
    category: "Backend",
    description: "A robust backend API for a job portal with authentication, role-based access, and job management.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=1000",
    tags: ["Node.js", "Express", "MongoDB"],
    link: "#",
    github: "#"
  }
];

const categories = ["All", "Full Stack", "Realtime", "Dashboard", "Enterprise"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filteredProjects = projects.filter(p => filter === "All" || p.category === filter);

  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden" id="projects">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Recent <span className="text-gradient">Projects</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore some of the recent projects I've built using the MERN stack.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full border text-xs md:text-sm font-bold transition-all duration-300 ${
                filter === cat 
                  ? "bg-accent-purple border-accent-purple text-white shadow-[0_5px_20px_rgba(139,92,246,0.4)]" 
                  : "border-white/10 text-gray-400 hover:border-white/30 hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
                className="group relative glass-card rounded-[2.5rem] overflow-hidden border border-white/5 flex flex-col h-full hover:border-accent-blue/30 transition-all duration-500 shadow-2xl"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/95 via-transparent to-transparent opacity-80" />
                  
                  {/* GitHub Icon */}
                  <a 
                    href={project.github}
                    className="absolute top-6 right-6 w-12 h-12 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>

                {/* Project Info */}
                <div className="p-10 flex flex-col flex-grow">
                  <h4 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h4>
                  <p className="text-gray-400 text-base mb-8 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-white/5 rounded-lg text-[10px] font-bold text-accent-blue border border-white/5 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Large CTA Button */}
                  <div className="mt-auto">
                    <motion.a 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.link}
                      className="w-full py-5 bg-accent-blue text-white rounded-2xl font-extrabold flex items-center justify-center gap-3 hover:bg-accent-purple transition-all shadow-[0_5px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_5px_25px_rgba(139,92,246,0.5)]"
                    >
                      Live Demo 🚀
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-8 mt-20 text-gray-500">
          <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all group">
            <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <div className="flex gap-4 font-mono text-xl">
            <span className="text-accent-purple font-bold">01</span>
            <span className="opacity-30">/</span>
            <span>02</span>
          </div>
          <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all group">
            <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
