import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, Sparkles } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education = ({ darkMode }) => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-purple-400 font-semibold mb-2 flex items-center gap-2">
            <span className="w-5 h-[1.5px] bg-purple-400"></span>
            SECTION 06
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight">
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>My Academic </span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Consistent academic excellence spanning foundational sciences, undergraduate computer science, and postgraduate applications.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/20 space-y-10 ml-2 sm:ml-4">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative group"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#0B0D12] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 transition-transform">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
              </div>

              {/* Card */}
              <div className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                darkMode 
                  ? 'bg-[#121620] border-white/10 hover:border-cyan-500/40 hover:bg-[#171C27]' 
                  : 'bg-white border-black/10 hover:border-cyan-400 hover:shadow-xl'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap className="w-5 h-5 text-purple-400" />
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/25">
                        {edu.period}
                      </span>
                      {edu.status && (
                        <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                          edu.status.includes('pursuing') 
                            ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20' 
                            : 'bg-white/5 text-gray-400'
                        }`}>
                          {edu.status}
                        </span>
                      )}
                    </div>
                    <h3 className={`font-heading font-bold text-lg sm:text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {edu.degree}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-cyan-400 mt-1">
                      {edu.institution}
                    </p>
                  </div>

                  {edu.score && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 self-start">
                      <Award className="w-4 h-4 text-cyan-400" />
                      <span>{edu.score}</span>
                    </div>
                  )}
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed mt-3 pt-3 border-t border-white/5 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {edu.highlights}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

