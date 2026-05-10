'use client';

import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(-140);

  const socialLinks = [
    { name: "GitHub", icon: <FaGithub />, href: "#" },
    { name: "LinkedIn", icon: <FaLinkedin />, href: "#" },
    { name: "Twitter", icon: <FaTwitter />, href: "#" },
  ];

  const techIcons = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCKWGB4bc-n_URgNRnFKWA3QtZC2eCbuUGCBNzvBUTeLj2nUvkiiufpa8gPLtmc7PvfSljMNG-UzK-iH_Xf9cC_s04KJcfT2PqftnopodS0kGK8cSlPiQV-Am78emTx7ioQ1yrFWOCtzbghPJQjw4R1B78csRy03No0Yfbl_bbU3luQF9CYUBw0zJLpCSK9xQfvAS0abVKUj61hdPe00ec2Yp2ZprCGsSM9o2J5JXMkW8L1HYeIdondfUuEo9KQnfJF8iGcxZJvotQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBKtU2OsX_u2WFXEEB6OWUigLqwBDX1UPJgCoAXpnhz4f13nJKd2Pw5OadU2k-WieDNdrpMHJ1LmOFpvZJXbxaFfJ7RuHkQ9mMwXBu-MzwJoH8ySjvCvI3nGVNwHrl9AJQ6ERGUwD3Y4uvtJtJsccVSdSQP2WZu6P27NUOVien4PNLpDDUZr6WSN7mYGPWKGOILnIwLh1RzISRVct39E9Ph_2xkC8WFJC3hIglRF-UAUIT7N6dwlkKaQqUIg32IiwREtCvGrbU07PE",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBpUV6-wWE3giGuJuglNd7-lSirhLVcrHgLKzaqXKiLTgqvSbIQ6HUYWxW4zdhs_aCC_qTfLPLLQ-LellzYtVnUQ1sxnTd1bWW4oAexBxDbGbduHqjRnZZ-Wj1Taicc0EFzfAQ7pv3P9e4grdExVkp8hm51xivAJ20-Hz6W0vu3JIHK6d2kmTDemy17Yq1IXTWd6DxdZtXNh-l3W2SL0ZPMW7mMlo7wADBd0L4mQp9kLS0TK3RGkGRU_NVmtQuRAGAX_K_TDY-2wXk",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBTqzCeCVmyjrYf1mdmtnvWq9MhJS9DnwxcAxBB5EndCr4MDycejvFHS2JbCasQm6CB-WSkrm25MRAYkTvS_2kESD_zziiGnzgwPUeUPr9hllAzwjKC0EnH5UDDu2fn2V8xRUXKpch3Hz1IDLMQCevmzMLESKDJx1k-JtFoJwC1ifn_LVW9rLFmw28tHUX5hDcmgY57egwpq_FEYJxOs6bwiII9wQyX4yUmKd8Vg9T1u2stv_NdH6jnYAw-uz-EzsNB5wT_UeYjhTY",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDLws-UgPNJEGHIWotebjK4fwcd9asYriyNKUQly94t8tVY-M0QgVAouhvFuA0mkAOw27mqdFqvJIOiUKTEqtjUfanYcb-DumFIdxn72wUUjFHuicj6g05Ldy3ImyCFQfPL84_sPuQD5-xGdrH9Frg943nzdrPrp2JEsK3Dckc19bdEtpse2lQp7Gj6gnArd-OCItGoJgAUcr6u-nFi5oGsgGhScmh5AaFogPwrxcnvhAaMOYD00gxj7YRMVn6IVqFNg4U7iMdLj9o"
  ];

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth > 768 ? -220 : -140);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.hero-stagger',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15 }
    );

    // Orbit Animation
    const icons = iconsRef.current?.children;
    if (icons) {
      gsap.to(icons, {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: 'none',
      });
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen pt-32 pb-20 px-4 md:px-8 flex items-center justify-center overflow-hidden" id="hero">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="space-y-8 text-center md:text-left z-10">
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-tight"
            >
              Hi, I'm <br />
              <span className="text-gradient">Fazle Rabbi</span>
            </motion.h1>
            <p className="text-gray-400 text-base md:text-xl max-w-xl mx-auto md:mx-0 hero-stagger leading-relaxed">
              I build scalable fullstack applications using <span className="text-white">React, Node.js, Express, and MongoDB</span>. I turn complex ideas into seamless digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 hero-stagger">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 md:px-10 py-4 bg-accent-blue text-white rounded-full font-bold shadow-[0_10px_25px_rgba(59,130,246,0.4)] transition-all flex items-center gap-2 group"
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 md:px-10 py-4 border border-white/20 rounded-full font-bold transition-all"
            >
              Let's Collaborate
            </motion.button>
          </div>

          <div className="flex justify-center md:justify-start gap-8 pt-4 hero-stagger">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -5, color: '#3b82f6' }}
                className="text-gray-500 text-2xl transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Hero Image Section with Enhanced Animation */}
        <div className="relative flex justify-center items-center">
          <motion.div
            ref={avatarRef}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              y: [0, -20, 0] // Floating effect
            }}
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 1 },
              rotate: { duration: 1 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[480px] md:h-[480px]"
          >
            {/* Morphing Glow Background */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 40% 60%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-tr from-accent-blue/30 via-accent-purple/20 to-accent-pink/30 blur-[80px] md:blur-[150px]"
            />

            <div className="relative w-full h-full rounded-full border-4 border-white/10 p-2 md:p-6 backdrop-blur-md bg-slate-950/50 overflow-hidden shadow-[0_35px_120px_rgba(59,130,246,0.18)]">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-full h-full rounded-full overflow-hidden relative border-2 border-white/10 bg-slate-950"
              >
                <Image
                  src="https://i.ibb.co.com/qYSLPQPC/Chat-GPT-Image-May-8-2026-08-50-25-PM.png"
                  alt="Sajid Yaqub"
                  fill
                  priority
                  className="object-cover bg-slate-950"
                />
              </motion.div>
            </div>

            {/* Orbiting Icons */}
            <div ref={iconsRef} className="absolute inset-0 pointer-events-none">
              {techIcons.map((icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="absolute top-1/2 left-1/2 -mt-4 -ml-4 md:-mt-6 md:-ml-6 bg-white/10 backdrop-blur-xl p-2 md:p-3 rounded-2xl border border-white/20 shadow-2xl"
                  style={{
                    transform: `rotate(${index * (360 / techIcons.length)}deg) translateY(${radius}px) rotate(-${index * (360 / techIcons.length)}deg)`
                  }}
                >
                  <Image src={icon} alt="Tech Icon" width={24} height={24} className="w-6 h-6 md:w-8 md:h-8" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
