'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    text: "Sajid's ability to tackle both complex backend logic and pixel-perfect frontend design is rare. He truly understands how to build applications that scale while maintaining a cinematic feel.",
    name: "Alex Rivera",
    role: "CTO, TechFlow",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    text: "The portfolio Sajid built for us exceeded all expectations. The animations are buttery smooth, and the performance is top-notch. A true professional in every sense.",
    name: "Sarah Chen",
    role: "Lead Designer, Creativ",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    text: "Exceptional attention to detail. Sajid doesn't just write code; he crafts experiences. His work on our real-time analytics platform was transformative.",
    name: "Marcus Thorne",
    role: "Product Manager, Apex",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    })
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto text-center mb-12 md:mb-20">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-accent-pink font-mono mb-2 text-sm md:text-base"
        >
          / REVIEWS
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold"
        >
          What People <span className="text-gradient">Say</span>
        </motion.h3>
      </div>

      <div className="max-w-4xl mx-auto relative px-0 md:px-12">
        <div className="relative min-h-[400px] md:min-h-[350px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
              }}
              className="w-full"
            >
              <div className="glass-card p-8 md:p-16 rounded-3xl md:rounded-[3rem] border border-white/10 relative overflow-hidden group">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-accent-pink/10 rounded-full blur-[60px] md:blur-[100px] -z-10" />
                
                <FaQuoteLeft className="text-4xl md:text-7xl text-accent-pink/20 absolute top-6 left-6 md:top-10 md:left-10" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex gap-1 mb-6 md:mb-8">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 text-sm md:text-base" />
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-2xl text-gray-200 leading-relaxed italic mb-8 md:mb-10 max-w-2xl">
                    "{testimonials[current].text}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img src={testimonials[current].avatar} alt={testimonials[current].name} className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-accent-pink p-1 object-cover" />
                    <div className="text-left">
                      <h4 className="text-lg md:text-xl font-bold text-white">{testimonials[current].name}</h4>
                      <p className="text-accent-pink font-medium text-xs md:text-sm">{testimonials[current].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-8 md:mt-0 md:block">
          <button 
            onClick={prev}
            className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors z-20 group"
          >
            <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={next}
            className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors z-20 group"
          >
            <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
