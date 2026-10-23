'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaUserAlt } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[100] px-4 py-4 md:py-6 pointer-events-none">
      <nav 
        className={`max-w-7xl mx-auto w-full transition-all duration-500 pointer-events-auto rounded-2xl md:rounded-3xl border border-white/5 ${
          scrolled 
            ? 'bg-bg-dark/80 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3 px-6' 
            : 'bg-transparent py-4 px-4 md:px-8'
        }`}
      >
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:rotate-12 transition-transform">
              FR
            </div>
            <span className="text-xl font-black tracking-tighter hidden sm:block">
              <span className="text-white">FAZLE</span>
              <span className="text-accent-blue">.</span>
              <span className="text-white">RABBI</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-blue transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black rounded-full text-[10px] lg:text-xs font-black uppercase tracking-widest hover:bg-accent-blue hover:text-white transition-all shadow-xl gap-2 active:scale-95"
            >
              <FaUserAlt className="text-[10px]" /> 
              <span>Hire Me</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl p-2 text-white hover:text-accent-blue transition-colors"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 bg-slate-950/95 backdrop-blur-3xl z-[90] flex flex-col items-center justify-center gap-10 md:hidden rounded-3xl border border-white/10 shadow-2xl pointer-events-auto"
          >
            {navLinks.map((link, i) => (
              <Link 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter text-white hover:text-accent-blue transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="px-12 py-5 bg-accent-purple text-white rounded-full text-xl font-black uppercase tracking-widest shadow-2xl hover:bg-accent-blue transition-all"
            >
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
