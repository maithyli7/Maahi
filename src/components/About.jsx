import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Code, 
  Cpu, 
  Sparkles, 
  Compass, 
  CheckCircle2, 
  TerminalSquare 
} from 'lucide-react';
import { HIGHLIGHT_CARDS, PERSONAL_INFO } from '../data/portfolioData';

const iconMap = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Code: Code,
  Cpu: Cpu,
};

export const About = ({ darkMode }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-purple-400 font-semibold mb-2 flex items-center gap-2">
            <span className="w-5 h-[1.5px] bg-purple-400"></span>
            SECTION 02
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight">
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>A Little </span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </div>

        {/* Story & Visual Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Narrative Content */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`p-6 rounded-2xl border ${
              darkMode ? 'bg-[#121620]/60 border-white/10' : 'bg-white/80 border-black/10'
            }`}>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                I'm <strong className="text-purple-400 font-semibold">Maithyli</strong>, a Computer Science graduate currently pursuing my Master of Computer Applications. My journey in technology is driven by curiosity, problem-solving, and the desire to build meaningful solutions.
              </p>
            </div>

            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              From developing web applications and exploring cloud infrastructure to experimenting with IoT-based systems, I enjoy understanding how technology works and applying that knowledge to real-world challenges.
            </p>

            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              I'm particularly interested in <span className={darkMode ? 'text-gray-200' : 'text-gray-800'}>software engineering, AI/ML, and cybersecurity</span>, and I'm continuously expanding my technical knowledge through projects, practical learning, and experimentation.
            </p>

            {/* Quick Core Principles */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium">
              {[
                "Clean Architecture & OOP Principles",
                "Hands-on Microcontrollers & Sensors",
                "Relational Database Design & Normalization",
                "Cloud Provisioning & Access Control"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Persona Card / Bio Stat */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={`rounded-2xl border p-7 relative overflow-hidden ${
              darkMode ? 'bg-[#171C27]/80 border-white/10' : 'bg-white border-black/10 shadow-lg'
            }`}>
              {/* Subtle accent corner */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-purple-500/20 to-cyan-500/0 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <TerminalSquare className="w-6 h-6 text-cyan-400" />
                <span className="font-mono text-xs uppercase tracking-wider text-purple-400 font-semibold">
                  Professional Identity
                </span>
              </div>

              <blockquote className={`italic text-base sm:text-lg mb-6 leading-relaxed ${
                darkMode ? 'text-gray-200' : 'text-gray-800'
              }`}>
                "{PERSONAL_INFO.statement}"
              </blockquote>

              <div className="border-t border-white/10 pt-5 space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Location</span>
                  <span className={darkMode ? 'text-white' : 'text-gray-900'}>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Degree</span>
                  <span className="text-cyan-400">MCA Candidate (2025–2027)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Undergraduate</span>
                  <span className={darkMode ? 'text-gray-200' : 'text-gray-800'}>B.Sc. Computer Science (8.5 GPA)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Key Interests</span>
                  <span className="text-purple-300">Software Eng, AI/ML, Cloud, IoT</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Four Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHT_CARDS.map((card, idx) => {
            const Icon = iconMap[card.icon] || Code;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`p-6 rounded-2xl border transition-all duration-300 group ${
                  darkMode 
                    ? 'bg-[#121620] border-white/10 hover:border-purple-500/40 hover:bg-[#171C27]' 
                    : 'bg-white border-black/10 hover:border-purple-400 hover:shadow-xl'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className={`font-heading font-bold text-lg mb-1 group-hover:text-purple-400 transition-colors ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {card.title}
                </h3>
                <span className="inline-block text-xs font-mono text-cyan-400 mb-3">
                  {card.subtitle}
                </span>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-[#A1A7B3]' : 'text-gray-600'}`}>
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

