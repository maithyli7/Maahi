import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Cloud, Globe, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience = ({ darkMode }) => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-purple-400 font-semibold mb-2 flex items-center gap-2">
            <span className="w-5 h-[1.5px] bg-purple-400"></span>
            SECTION 04
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight">
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>Where I've Gained </span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Hands-on technical internships strengthening distributed cloud infrastructure practices and full-stack software development workflows.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-500/20 space-y-12 ml-2 sm:ml-4">
          {EXPERIENCES.map((exp, idx) => {
            const isCloud = exp.role.includes('Cloud');
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#0B0D12] border-2 border-purple-400 flex items-center justify-center group-hover:scale-125 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Experience Card */}
                <div className={`p-7 rounded-2xl border transition-all duration-300 ${
                  darkMode 
                    ? 'bg-[#121620] border-white/10 hover:border-purple-500/40 hover:bg-[#171C27]' 
                    : 'bg-white border-black/10 hover:border-purple-400 hover:shadow-xl'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                        {isCloud ? <Cloud className="w-5 h-5" /> : <Globe className="w-5 h-5" />}
                      </div>
                      <div>
                        <h3 className={`font-heading font-bold text-lg sm:text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {exp.role}
                        </h3>
                        <p className="text-xs font-mono text-cyan-400">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <ul className="space-y-2.5 my-5 text-sm">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs font-mono px-2.5 py-1 rounded-md ${
                          darkMode ? 'bg-[#1d2433] text-gray-300' : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

