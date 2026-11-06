import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Download, 
  Mail, 
  MapPin, 
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { BrandIcons } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero = ({ darkMode }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Background Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status / Availability Pill */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono mb-6 border transition-colors ${
                darkMode 
                  ? 'bg-purple-950/40 border-purple-500/30 text-purple-300' 
                  : 'bg-purple-50 border-purple-200 text-purple-800'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.status}</span>
            </motion.div>

            {/* Introductory Label */}
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-cyan-400 font-semibold mb-2 flex items-center gap-2">
              <span className="inline-block w-6 h-[1.5px] bg-cyan-400"></span>
              HELLO, I'M
            </span>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight leading-[1.08] mb-4">
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                Maithyli{' '}
              </span>
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Gajula
              </span>
            </h1>

            {/* Professional Headline */}
            <h2 className={`text-xl sm:text-2xl font-semibold mb-4 tracking-tight ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              {PERSONAL_INFO.headline}
            </h2>

            {/* Supporting Description */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mb-8 ${darkMode ? 'text-[#A1A7B3]' : 'text-gray-600'}`}>
              {PERSONAL_INFO.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#resume-section"
                className={`w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm border transition-all flex items-center justify-center gap-2 ${
                  darkMode
                    ? 'border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/30'
                    : 'border-black/15 bg-black/5 text-gray-900 hover:bg-black/10 hover:border-black/30'
                }`}
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-white/10 w-full text-xs font-mono">
              <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>CONNECT:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-1.5 transition-colors ${darkMode ? 'text-gray-300 hover:text-cyan-300' : 'text-gray-700 hover:text-purple-600'}`}
              >
                <BrandIcons.Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-1.5 transition-colors ${darkMode ? 'text-gray-300 hover:text-cyan-300' : 'text-gray-700 hover:text-purple-600'}`}
              >
                <BrandIcons.Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={`flex items-center gap-1.5 transition-colors ${darkMode ? 'text-gray-300 hover:text-cyan-300' : 'text-gray-700 hover:text-purple-600'}`}
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
              <div className="hidden sm:flex items-center gap-1.5 ml-auto text-gray-400">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-End Developer Interactive Composition */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Gradient Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-indigo-500/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 animate-pulse-slow" />

              {/* Terminal Code Window & Profile Combination */}
              <div className={`relative rounded-2xl border overflow-hidden shadow-2xl transition-all ${
                darkMode ? 'bg-[#121620]/90 border-white/10' : 'bg-white/90 border-black/10'
              }`}>
                {/* Window Header */}
                <div className={`flex items-center justify-between px-4 py-3 border-b ${
                  darkMode ? 'border-white/10 bg-[#171C27]' : 'border-black/5 bg-gray-100'
                }`}>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-mono text-gray-400 ml-2">maithyli@dev-environment ~</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                      v2.5.0
                    </span>
                  </div>
                </div>

                {/* Profile Showcase Card */}
                <div className="p-7 flex flex-col items-center text-center bg-gradient-to-b from-purple-900/10 via-transparent to-transparent">
                  <div className="relative mb-4">
                    <img 
                      src="/images/profile.jpg" 
                      alt="Maithyli Gajula" 
                      className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl object-cover ring-4 ring-purple-500/30 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
                    />
                    <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-emerald-500 ring-4 ring-[#121620] flex items-center gap-1 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      <span className="text-[10px] font-mono text-white font-semibold">Active</span>
                    </div>
                  </div>
                  
                  <h3 className={`font-heading font-bold text-xl sm:text-2xl mt-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Maithyli Gajula
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-400 font-mono mt-1 font-medium">
                    Aspiring Software Engineer &bull; MCA Scholar
                  </p>
                  <p className={`text-xs mt-1.5 max-w-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Aditya Degree & PG College, Gopalapatnam
                  </p>
                </div>

                {/* Floating Micro Tech Pills */}
                <div className={`px-5 py-3 border-t flex items-center justify-between gap-2 text-[11px] font-mono ${
                  darkMode ? 'border-white/5 bg-[#0e121a] text-gray-400' : 'border-black/5 bg-gray-50 text-gray-600'
                }`}>
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" /> ESP32 / IoT
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-purple-400" /> Python / Django
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> AWS EC2/S3
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
