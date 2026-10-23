'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 5000);
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-accent-blue/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Contact <span className="text-gradient">Us</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Please fill out the contact form below and discuss about your next big project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <motion.h3 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Get in touch today
              </motion.h3>
              <p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-10">
              {[
                { icon: <FaEnvelope />, label: "Email", value: "hello@fazlerabbi.com", color: "text-accent-purple" },
                { icon: <FaPhone />, label: "Phone", value: "+880 1XXXXXXXXX", color: "text-accent-pink" },
                { icon: <FaMapMarkerAlt />, label: "Location", value: "Dhaka, Bangladesh", color: "text-accent-blue" }
              ].map((info, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-2xl ${info.color} group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-lg`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">{info.label}</p>
                    <p className="text-lg md:text-xl font-bold text-white group-hover:text-accent-blue transition-colors">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-14 rounded-[3rem] border border-white/5 shadow-2xl relative"
          >
            {/* Form Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-blue/20 via-accent-purple/20 to-accent-pink/20 rounded-[3rem] blur-xl opacity-50 -z-10" />

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 outline-none focus:border-accent-purple transition-all text-white placeholder:text-gray-600 focus:bg-white/10"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 outline-none focus:border-accent-purple transition-all text-white placeholder:text-gray-600 focus:bg-white/10"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 outline-none focus:border-accent-purple transition-all text-white placeholder:text-gray-600 focus:bg-white/10"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 outline-none focus:border-accent-purple transition-all text-white placeholder:text-gray-600 focus:bg-white/10"
                />
              </div>
              <textarea
                name="message"
                placeholder="How can I help you?"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 outline-none focus:border-accent-purple transition-all resize-none text-white placeholder:text-gray-600 focus:bg-white/10"
              />

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(139,92,246,0.5)" }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-6 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink text-white rounded-2xl font-extrabold flex items-center justify-center gap-3 shadow-2xl disabled:opacity-50 text-lg uppercase tracking-widest transition-all"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSuccess ? (
                  "Message Sent Successfully!"
                ) : (
                  <>Send Message <FaPaperPlane className="ml-2" /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
