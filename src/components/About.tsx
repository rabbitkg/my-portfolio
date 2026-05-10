'use client';

import { useEffect, useRef } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaDownload } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 px-4 overflow-hidden" id="about">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <div ref={imageRef} className="relative aspect-square w-full max-w-lg mx-auto">
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-accent-blue/20 via-accent-purple/10 to-transparent blur-2xl animate-pulse" />
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-white/10 glass-card bg-slate-950/70">
              <Image 
                src="https://i.ibb.co.com/qYSLPQPC/Chat-GPT-Image-May-8-2026-08-50-25-PM.png" 
                alt="About Fazle Rabbi" 
                fill
                className="object-cover bg-slate-950 transition-transform duration-700 hover:scale-105" 
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
              <div className="w-20 h-1.5 bg-accent-blue mx-auto lg:mx-0 rounded-full" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-gray-400 text-lg leading-relaxed"
            >
              <p>
                I am a <span className="text-white font-semibold">MERN Stack Web Developer</span> focused on building aesthetic user applications. I enjoy designing APIs, creating attractive user interfaces, and optimizing performance to deliver smooth and efficient user experiences.
              </p>
              <p>
                Along with strong problem-solving skills, I follow clean architecture principles and modern development patterns. My goal is to write clean, maintainable code, improve UI/UX flows, and build applications that feel fast, secure, and intuitive.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex justify-center lg:justify-start pt-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(139,92,246,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-accent-purple text-white rounded-full font-bold flex items-center gap-3 transition-all group"
              >
                Download Resume <FaDownload className="text-sm group-hover:translate-y-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
