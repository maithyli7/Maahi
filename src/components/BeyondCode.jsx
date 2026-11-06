import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Compass, 
  BookOpen, 
  Lightbulb, 
  ShieldAlert, 
  Languages, 
  Globe 
} from 'lucide-react';
import { BEYOND_CODE, LANGUAGES_SPOKEN } from '../data/portfolioData';

const iconMap = {
  Sparkles: Sparkles,
  Compass: Compass,
  BookOpen: BookOpen,
  Lightbulb: Lightbulb,
  ShieldAlert: ShieldAlert,
};

export const BeyondCode = ({ darkMode }) => {
  return (
    <section id="beyond" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute right-1/4 top-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-purple-400 font-semibold mb-2 flex items-center gap-2">
            <span className="w-5 h-[1.5px] bg-purple-400"></span>
            SECTION 08
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight">
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>Beyond the </span>
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Terminal
            </span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Perspectives, curiosity, and cultural explorations that enrich my engineering worldview and problem-solving intuition.
          </p>
        </div>

        {/* Dynamic Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {BEYOND_CODE.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-7 rounded-2xl border transition-all duration-300 ${
                  darkMode 
                    ? 'bg-[#121620] border-white/10 hover:border-purple-500/40 hover:bg-[#161c28]' 
                    : 'bg-white border-black/10 hover:border-purple-400 hover:shadow-xl'
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                
                <h3 className={`font-heading font-bold text-lg mb-2.5 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-[#A1A7B3]' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Multilingual Fluency Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`p-7 rounded-2xl border ${
            darkMode ? 'bg-[#171C27]/80 border-white/10' : 'bg-purple-50/50 border-purple-200'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div className="flex items-center gap-3">
              <Languages className="w-5 h-5 text-purple-400" />
              <div>
                <h3 className={`font-heading font-bold text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Language Fluency & Communication
                </h3>
                <p className={`text-xs font-mono ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Effective collaboration across multicultural and international engineering environments.
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">
              Global Ready
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {LANGUAGES_SPOKEN.map((lang) => (
              <div 
                key={lang.language} 
                className={`p-4 rounded-xl border font-mono flex items-center justify-between ${
                  darkMode ? 'bg-[#121620] border-white/5' : 'bg-white border-black/5'
                }`}
              >
                <span className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {lang.language}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-purple-500/15 text-purple-300">
                  {lang.proficiency}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

