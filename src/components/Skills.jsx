import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Binary, 
  Database, 
  Globe, 
  Cloud, 
  Cpu, 
  ShieldCheck,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const iconMap = {
  Terminal: Terminal,
  Binary: Binary,
  Database: Database,
  Globe: Globe,
  Cloud: Cloud,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck
};

export const Skills = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-cyan-400 font-semibold mb-2 flex items-center gap-2">
            <span className="w-5 h-[1.5px] bg-cyan-400"></span>
            SECTION 03
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight">
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>Technical </span>
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Skills Dashboard
            </span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Structured competencies across modern languages, system fundamentals, databases, cloud architecture, and physical computing.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Terminal;
            const isSelected = selectedCategory === cat.name;

            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setSelectedCategory(isSelected ? null : cat.name)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  darkMode
                    ? isSelected 
                      ? 'bg-[#171C27] border-purple-500/60 shadow-lg shadow-purple-500/10' 
                      : 'bg-[#121620] border-white/10 hover:border-white/25 hover:bg-[#151a26]'
                    : isSelected 
                      ? 'bg-purple-50/80 border-purple-500 shadow-md' 
                      : 'bg-white border-black/10 hover:border-black/20 hover:shadow-lg'
                }`}
              >
                {/* Header of Card */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`font-heading font-bold text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {cat.name}
                      </h3>
                      <span className="text-[11px] font-mono text-gray-500">
                        {cat.skills.length} core competencies
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                        darkMode
                          ? 'bg-[#1a2130] text-gray-200 border border-white/5 hover:border-purple-400/40 hover:text-cyan-300'
                          : 'bg-gray-100 text-gray-800 border border-black/5 hover:border-purple-300 hover:text-purple-700'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Engineering Philosophy Note */}
        <div className={`mt-12 p-5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
          darkMode ? 'bg-[#121620]/60 border-white/5 text-gray-400' : 'bg-white/80 border-black/5 text-gray-600'
        }`}>
          <div className="flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Focused on depth of understanding and pragmatic implementation rather than arbitrary percentage ratings.</span>
          </div>
          <span className="text-cyan-400 font-semibold tracking-wide uppercase">
            Practical Competency
          </span>
        </div>

      </div>
    </section>
  );
};

