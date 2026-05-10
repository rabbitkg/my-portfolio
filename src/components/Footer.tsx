'use client';

import { motion } from 'framer-motion';
import { FaArrowUp, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-10 px-4 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent-purple/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gradient">Fazle Rabbi</span>
            </h2>
            <p className="text-gray-400 max-w-sm">
              Crafting high-performance digital experiences with passion and precision.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              {[
                { icon: <FaGithub />, href: "#" },
                { icon: <FaLinkedin />, href: "#" },
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaEnvelope />, href: "mailto:hello@fazlerabbi.com" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-full glass-card bg-slate-950/60 border border-white/10 flex items-center justify-center text-xl text-gray-400 hover:text-white hover:bg-accent-purple/20 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-accent-purple"
            >
              Back to top
              <div className="w-10 h-10 rounded-full border border-accent-purple flex items-center justify-center group-hover:bg-accent-purple group-hover:text-white transition-all">
                <FaArrowUp />
              </div>
            </motion.button>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© 2025 Fazle Rabbi. Built with Passion.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
